const maksNiva = 3;
const brettData = {
  0: { startePeng: 7, melding:'Lag ein kanal mellom dei røde punkta.',
      X0Y0: [0,'start'],X1Y0: [0,'vatn'], X2Y0: [0,'land'], X3Y0: [0,'land'], X4Y0: [0,'land'], X5Y0: [0,'land'], X6Y0: [0,'land'], X7Y0: [0,'vatn'],
      X0Y1: [0,'vatn'], X1Y1: [0,'vatn'], X2Y1: [0,'land'], X3Y1: [0,'land'], X4Y1: [0,'land'], X5Y1: [0,'land'], X6Y1: [0,'vatn'], X7Y1: [0,'vatn'],
      X0Y2: [0,'vatn'], X1Y2: [0,'vatn'], X2Y2: [0,'land'], X3Y2: [0,'land'], X4Y2: [0,'land'], X5Y2: [0,'land'], X6Y2: [0,'vatn'], X7Y2: [0,'vatn'],
      X0Y3: [0,'vatn'], X1Y3: [0,'vatn'], X2Y3: [0,'land'], X3Y3: [0,'land'], X4Y3: [0,'land'], X5Y3: [0,'land'], X6Y3: [0,'vatn'], X7Y3: [0,'vatn'],
      X0Y4: [0,'vatn'], X1Y4: [0,'vatn'], X2Y4: [0,'land'], X3Y4: [0,'land'], X4Y4: [0,'land'], X5Y4: [0,'land'], X6Y4: [0,'vatn'], X7Y4: [0,'vatn'],
      X0Y5: [0,'vatn'], X1Y5: [0,'vatn'], X2Y5: [0,'land'], X3Y5: [0,'land'], X4Y5: [0,'land'], X5Y5: [0,'land'], X6Y5: [0,'vatn'], X7Y5: [0,'vatn'],
      X0Y6: [0,'vatn'], X1Y6: [0,'land'], X2Y6: [0,'land'], X3Y6: [0,'land'], X4Y6: [0,'land'], X5Y6: [0,'land'], X6Y6: [0,'vatn'], X7Y6: [0,'vatn'],
      X0Y7: [0,'vatn'], X1Y7: [0,'land'], X2Y7: [0,'land'], X3Y7: [0,'land'], X4Y7: [0,'land'], X5Y7: [0,'land'], X6Y7: [0,'vatn'], X7Y7: [0,'stopp']
  },
  1: { startePeng: 9, melding:'Nytt: Fjell kan ikkje gravast til kanal.',
      X0Y0: [0,'start'],X1Y0: [0,'vatn'], X2Y0: [0,'land'], X3Y0:  [0,'land'], X4Y0: [0,'land'], X5Y0: [0,'land'], X6Y0: [0,'land'], X7Y0: [0,'vatn'],
      X0Y1: [0,'vatn'], X1Y1: [0,'vatn'], X2Y1: [0,'land'], X3Y1:  [0,'land'], X4Y1: [0,'fjell'], X5Y1:[0,'land'], X6Y1: [0,'vatn'], X7Y1: [0,'vatn'],
      X0Y2: [0,'vatn'], X1Y2: [0,'vatn'], X2Y2: [0,'land'], X3Y2:  [0,'land'], X4Y2: [0,'fjell'], X5Y2:[0,'vatn'], X6Y2: [0,'vatn'], X7Y2: [0,'vatn'],
      X0Y3: [0,'vatn'], X1Y3: [0,'vatn'], X2Y3: [0,'fjell'], X3Y3: [0,'land'], X4Y3: [0,'fjell'], X5Y3:[0,'land'], X6Y3: [0,'vatn'], X7Y3: [0,'vatn'],
      X0Y4: [0,'vatn'], X1Y4: [0,'vatn'], X2Y4: [0,'fjell'], X3Y4: [0,'land'], X4Y4: [0,'vatn'], X5Y4: [0,'land'], X6Y4: [0,'vatn'], X7Y4: [0,'vatn'],
      X0Y5: [0,'vatn'], X1Y5: [0,'vatn'], X2Y5: [0,'fjell'], X3Y5: [0,'land'], X4Y5: [0,'vatn'], X5Y5: [0,'land'], X6Y5: [0,'vatn'], X7Y5: [0,'vatn'],
      X0Y6: [0,'vatn'], X1Y6: [0,'land'], X2Y6: [0,'fjell'], X3Y6: [0,'land'], X4Y6: [0,'land'], X5Y6: [0,'vatn'], X6Y6: [0,'vatn'], X7Y6: [0,'vatn'],
      X0Y7: [0,'vatn'], X1Y7: [0,'land'], X2Y7: [0,'fjell'], X3Y7: [0,'land'], X4Y7: [0,'land'], X5Y7: [0,'land'], X6Y7: [0,'vatn'], X7Y7: [0,'stopp']
  },
  2: { startePeng: 15, melding:'Nytt: Sluser kan koble høg og låg kanal.',
    X0Y0: [0,'start'],X1Y0: [0,'land'], X2Y0: [0,'land'], X3Y0: [2,'land'], X4Y0: [2,'land'], X5Y0: [2,'fjell'],X6Y0: [2,'land'], X7Y0: [2,'vatn'],
    X0Y1: [0,'vatn'], X1Y1: [0,'land'], X2Y1: [0,'land'], X3Y1: [2,'land'], X4Y1: [2,'land'], X5Y1: [2,'fjell'],X6Y1: [2,'land'], X7Y1: [2,'vatn'],
    X0Y2: [0,'vatn'], X1Y2: [0,'land'], X2Y2: [0,'land'], X3Y2: [2,'land'], X4Y2: [2,'land'], X5Y2: [2,'fjell'],X6Y2: [2,'land'], X7Y2: [2,'vatn'],
    X0Y3: [0,'vatn'], X1Y3: [0,'land'], X2Y3: [0,'fjell'],X3Y3: [2,'land'], X4Y3: [2,'land'], X5Y3: [2,'land'], X6Y3: [2,'land'], X7Y3: [2,'vatn'],
    X0Y4: [0,'vatn'], X1Y4: [0,'land'], X2Y4: [0,'fjell'],X3Y4: [2,'land'], X4Y4: [2,'land'], X5Y4: [2,'land'], X6Y4: [2,'land'], X7Y4: [2,'vatn'],
    X0Y5: [0,'vatn'], X1Y5: [0,'land'], X2Y5: [0,'fjell'],X3Y5: [2,'vatn'], X4Y5: [2,'land'], X5Y5: [2,'land'], X6Y5: [2,'land'], X7Y5: [2,'vatn'],
    X0Y6: [0,'vatn'], X1Y6: [0,'land'], X2Y6: [0,'fjell'],X3Y6: [2,'land'], X4Y6: [2,'land'], X5Y6: [2,'land'], X6Y6: [2,'land'], X7Y6: [2,'vatn'],
    X0Y7: [0,'vatn'], X1Y7: [0,'land'], X2Y7: [0,'fjell'],X3Y7: [2,'land'], X4Y7: [2,'land'], X5Y7: [2,'land'], X6Y7: [2,'land'], X7Y7: [2,'stopp']
  },
  3: { startePeng: 15, melding:'Nytt: Sluser kan koble høg og låg kanal.',
    X0Y0: [0,'start'],X1Y0: [0,'land'], X2Y0: [2,'land'], X3Y0: [2,'land'], X4Y0: [2,'land'], X5Y0: [2,'land'], X6Y0: [0,'land'], X7Y0: [0,'vatn'],
    X0Y1: [0,'vatn'], X1Y1: [0,'land'], X2Y1: [2,'land'], X3Y1: [2,'land'], X4Y1: [2,'land'], X5Y1: [2,'land'], X6Y1: [0,'land'], X7Y1: [0,'vatn'],
    X0Y2: [0,'vatn'], X1Y2: [0,'land'], X2Y2: [2,'land'], X3Y2: [2,'land'], X4Y2: [2,'land'], X5Y2: [2,'land'], X6Y2: [0,'land'], X7Y2: [0,'vatn'],
    X0Y3: [0,'vatn'], X1Y3: [0,'land'], X2Y3: [2,'fjell'],X3Y3: [2,'land'], X4Y3: [2,'land'], X5Y3: [2,'land'], X6Y3: [0,'land'], X7Y3: [0,'vatn'],
    X0Y4: [0,'vatn'], X1Y4: [0,'land'], X2Y4: [2,'fjell'],X3Y4: [2,'land'], X4Y4: [2,'land'], X5Y4: [2,'land'], X6Y4: [0,'land'], X7Y4: [0,'vatn'],
    X0Y5: [0,'vatn'], X1Y5: [0,'land'], X2Y5: [2,'fjell'],X3Y5: [2,'vatn'], X4Y5: [2,'land'], X5Y5: [2,'land'], X6Y5: [0,'land'], X7Y5: [0,'vatn'],
    X0Y6: [0,'vatn'], X1Y6: [0,'land'], X2Y6: [2,'fjell'],X3Y6: [2,'land'], X4Y6: [2,'land'], X5Y6: [2,'land'], X6Y6: [0,'land'], X7Y6: [0,'vatn'],
    X0Y7: [0,'vatn'], X1Y7: [0,'land'], X2Y7: [2,'fjell'],X3Y7: [2,'land'], X4Y7: [2,'land'], X5Y7: [2,'land'], X6Y7: [0,'land'], X7Y7: [0,'stopp']
  }
};

let spelarNiva:brettNummer = 0;
let peng:number = 0;
let ruter:Ruter = {kant:{  x:9, y:9, niva:0, type:'kant', vatn:false}};
let ruteListe:string[] = [];
let sjekk  = 0;

function oppstart() {
 // lagreKjeks(spelarNiva, peng)
//  sjekkEtterKjeks()
visMelding(brettData[spelarNiva].melding)
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

function visMelding(melding:string) {
  document.getElementById('melding')!.className = 'braMelding';
  document.getElementById('meldingstekst')!.innerText = melding;
}
function visFeil(melding:string) {
  document.getElementById('melding')!.className = 'feilMelding';
  document.getElementById('meldingstekst')!.innerText = melding;
}

function trykkPaRute(nr:string){
  if(ruter[nr].type !== 'land'){ return;}
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
    visFeil('Du er tom for pengar, prøv igjen.')
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
        if(ruter[nabo].type === 'kanal'){
          ruterTilSjekk.push(nabo);
        }
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
function finnNaboRuter(nr:string) {//[oppe-høgre-nede-venstre]
  let naboer:string[] = [];
  if(ruter[nr].y>0 ){naboer.push('X'+(ruter[nr].x)  +'Y'+(ruter[nr].y-1))} else { naboer.push('kant')}
  if(ruter[nr].x<7 ){naboer.push('X'+(ruter[nr].x+1)+'Y'+(ruter[nr].y)  )} else { naboer.push('kant')}
  if(ruter[nr].y<7 ){naboer.push('X'+(ruter[nr].x)  +'Y'+(ruter[nr].y+1))} else { naboer.push('kant')}
  if(ruter[nr].x>0 ){naboer.push('X'+(ruter[nr].x-1)+'Y'+(ruter[nr].y)  )} else { naboer.push('kant')}
  return(naboer)
}

function finnNaboTypar(nr:string){
  const naboar = finnNaboRuter(nr)
  let svar:string[] = [];
  naboar.forEach(nabo => {
    svar.push(ruter[nabo].type);
  });
  return(svar);
}
function finnNaboNiva(nr:string){
  const naboar = finnNaboRuter(nr)
  let svar:number[] = [];
  naboar.forEach(nabo => {
    svar.push(ruter[nabo].niva);
  });
  return(svar);
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
 
 function finnNaboKantar(nr:string){
  const naboar = finnNaboRuter(nr)
  let svar = [
    {denneSide: nr+'O',nabo: naboar[0], naboSide: naboar[0] === 'kant' ? 'kant' : naboar[0]+'N'},
    {denneSide: nr+'H',nabo: naboar[1], naboSide: naboar[1] === 'kant' ? 'kant' : naboar[1]+'V'},
    {denneSide: nr+'N',nabo: naboar[2], naboSide: naboar[2] === 'kant' ? 'kant' : naboar[2]+'O'},
    {denneSide: nr+'V',nabo: naboar[3], naboSide: naboar[3] === 'kant' ? 'kant' : naboar[3]+'H'}
  ]
  return svar;
} 
  

function vinn(){
  spelarNiva++;
  visMelding('Du klarte det! Prøv neste nivå.')
}


function meldingKlikk(){
  document.getElementById('melding')!.className = 'fjernMelding';
  if(spelarNiva > maksNiva){return;}
  lagBrett()
}