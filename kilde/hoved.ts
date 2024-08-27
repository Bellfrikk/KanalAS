const maksNiva = 3;


let spelarNiva:brettNummer = 0;
let peng:number = 0;
let ruter:Ruter = {kant:{  x:9, y:9, niva:0, type:'kant', vatn:false}};
let ruteListe:string[] = [];
let sjekk  = 0;
let meldingKlikkHandling:meldingsTrykk = 'nesteBrett';

function oppstart() {
 // lagreKjeks(spelarNiva, peng)
//  sjekkEtterKjeks()
visMelding(brettData[spelarNiva].melding,'nesteBrett')
}

function lagBrett(){
  for(let x=0;x<8;x++){
    for(let y=0;y<8;y++){
      let id:string = 'X'+x+'Y'+y
      ruteListe.push(id);
      ruter[id] = new Rute(x, y, brettData[spelarNiva][id as keyof brettDataNiva][0], brettData[spelarNiva][id as keyof brettDataNiva][1]);
      oppdaterRute(id,null,null,null)
    }
  }
  peng = brettData[spelarNiva].startePeng;
  tegnTopp()
}

function tegnTopp(){
  document.getElementById('topp')!.innerHTML = '<p>Peng: ' + peng + '  Level: ' + spelarNiva + '<p>';
}


function trykkPaRute(nr:string){
  if(meldingKlikkHandling === 'nesteBrett'){
    meldingKlikk()
    return;
  }else if(ruter[nr].type !== 'land'){ return;}
  const naboTypar = finnNaboTypar(nr);
  const naboNiva = finnNaboNiva(nr);
  const naboRuter = finnNaboRuter(nr);
  if(!naboNiva.includes(ruter[nr].niva-2)){//lag kanal visst ruter på sida er på same nivå eller eitt mindre
    if(!sjekkPeng(naboRuter,1)){return;}
    oppdaterRute(nr,'kanal',null,null)
  } else{//lag sluse visst bare 1 side er 2 nivå lågare og sidene ikkje er vatn eller kanal og motsattside ikkje er fjell
    if(lagSluse(nr, naboTypar, [ naboRuter[0],naboRuter[1],naboRuter[2],naboRuter[3]])){ }
    else if(lagSluse(nr, naboTypar, [ naboRuter[1],naboRuter[2],naboRuter[3],naboRuter[0]])){ }
    else if(lagSluse(nr, naboTypar, [ naboRuter[2],naboRuter[3],naboRuter[0],naboRuter[1]])){ }
    else if(lagSluse(nr, naboTypar, [ naboRuter[3],naboRuter[0],naboRuter[1],naboRuter[2]])){ }
  }
  fyllKanal(nr)
  sjekkOmFerdig(nr)
}
function lagSluse (nr:string,naboTypar:string[], naboar:string[] ){
  if(ruter[naboar[0]].niva === ruter[nr].niva-2 &&
    ruter[naboar[1]].niva === ruter[nr].niva &&
    ruter[naboar[2]].niva === ruter[nr].niva &&
    ruter[naboar[3]].niva === ruter[nr].niva &&
    ruter[naboar[0]].type !== 'fjell' &&
    !ruter[naboar[1]].vatn && ruter[naboar[1]].type !== 'kanal' &&
    ruter[naboar[2]].type !== 'fjell' &&
    !ruter[naboar[3]].vatn && ruter[naboar[3]].type !== 'kanal'
 ){
  if(!sjekkPeng(naboar,3)){return;}
  oppdaterRute(nr,'sluse',-1,null)
  oppdaterRute(naboar[1],'fjell',null,null)
  oppdaterRute(naboar[3],'fjell',null,null)
}else{
  return false;
 }
}
function sjekkPeng(naboar:string[], startPris:number){
  let pris = startPris;
  naboar.forEach(nabo => {
    if(ruter[nabo].vatn) { pris++}
  });
  if(peng  < pris){
    visFeil('Du er tom for pengar, prøv igjen.', 'nesteBrett')
    return false;}
  else{ 
    peng -= pris;
    tegnTopp()
    return true;
  }
}
function fyllKanal(nr:string){
  let ruterTilSjekk:string[] = [nr];
  let sjekkaRuter:string[] = [];
  let kanalar:string[] = [nr];
  let fantVatn:boolean = false;
  sjekkRute();
  function sjekkRute(){
    const nr = ruterTilSjekk[0];
    const naboer = finnNaboRuter(nr);
    naboer.forEach(nabo => {
      if(sjekkaRuter.includes(nabo)){//ikkje sjekk ruter sjekka før
      }else if(ruter[nabo].vatn && ruter[nabo].niva >= ruter[nr].niva){
        fantVatn = true;
      }else if( ruter[nabo].type === 'kanal' || // sjekk kanalar
      (ruter[nabo].type === 'sluse' && ruter[nabo].niva > ruter[nr].niva)){ //bare sjekk sluser som renn nedover
        kanalar.push(nabo);
        ruterTilSjekk.push(nabo);
      }
    });
       
    sjekkaRuter.push(nr);
    ruterTilSjekk.shift()
    if(ruterTilSjekk.length > 0 ){ 
      sjekkRute() 
    }else if(fantVatn){
      kanalar.forEach(nr => {
        oppdaterRute(nr,null,null,true)
      });
    }
  }
}


function sjekkOmFerdig(nr:string){
  let ruterTilSjekk:string[] = ['X1Y0','X0Y1'];
  let sjekkaRuter:string[] = ['X0Y0'];
  sjekkRute();
  function sjekkRute(){
    const nr = ruterTilSjekk[0];
    if(ruter[nr].type === 'stopp'){
        vinn()
        return;
    }else if(ruter[nr].vatn){
      const naboer = finnNaboRuter(nr);
      naboer.forEach(nabo => {
        if(!sjekkaRuter.includes(nabo)){ ruterTilSjekk.push(nabo);}
      });
       }
    sjekkaRuter.push(nr);
    ruterTilSjekk.shift()
    if(ruterTilSjekk.length > 0 ){ sjekkRute() }
    
  }
}

function oppdaterRute(nr:string,nyType:RuteTypar|null,nyNiva:number|null,nyVatn:boolean|null){
  if(nr === 'kant'){return;}
  if(nyType !== null){ ruter[nr].type = nyType; }
  if(nyNiva !== null ){ ruter[nr].niva += nyNiva; }
  if(nyVatn !== null){ ruter[nr].vatn = nyVatn; }
  const naboar = finnNaboRuter(nr)
  const naboSider = finnNaboKantar(nr);
  const tortEllerVatn = ruter[nr].vatn ? 'vatn' : ruter[nr].type;

  if(ruter[nr].type === 'kanal'){
    document.getElementById(nr +'M')!.className = tortEllerVatn + ruter[nr].niva;
    naboSider.forEach(side => { 
      if(side.naboSide !== 'kant' && (ruter[side.nabo].type === 'kanal' || ruter[side.nabo].type === 'vatn' || ruter[side.nabo].type === 'sluse') ){
        document.getElementById(side.denneSide)!.className = tortEllerVatn + ruter[nr].niva;
        document.getElementById(side.naboSide)!.className = tortEllerVatn + ruter[side.nabo].niva;
      }
    });
  }else if(ruter[nr].type === 'sluse'){
    document.getElementById(nr +'M')!.className = 'sluse ' + tortEllerVatn + ruter[nr].niva;
    naboSider.forEach(side => {
      if(side.naboSide !== 'kant' && (ruter[side.nabo].type === 'kanal' || ruter[side.nabo].type === 'vatn') ){
        document.getElementById(side.denneSide)!.className = 'sluse ' + tortEllerVatn + ruter[nr].niva;
        document.getElementById(side.naboSide)!.className = tortEllerVatn + ruter[side.nabo].niva;
      }
    });
  }else{
    const sider = ['VO','O','HO','V','M','H','VN','N','HN'];
    sider.forEach(side => {
      document.getElementById(nr+side)!.className = ruter[nr].type + ruter[nr].niva;
    });
  } 
}
 
function vinn(){
  spelarNiva++;
  visMelding('Du klarte det! Prøv neste nivå.','nesteBrett')
}

function visFeilmelding(){
  document.getElementById('feilMelding')!.style.display = 'flex';
}
function fjernInfomelding(){
  document.getElementById('melding')!.style.display = 'none';
  document.getElementById('feilmelding')!.style.display = 'none';

}

function nesteNiva(){
  if(spelarNiva > maksNiva){return;}
  fjernInfomelding()
  lagBrett()
}
