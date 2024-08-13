const maksNiva = 2;
const brettData = {
  0: { startePeng: 7, melding:'Lag ein kanal mellom dei røde punkta.',
      X0Y0: [1,'start'],X1Y0: [1,'vatn'], X2Y0: [1,'land'], X3Y0: [1,'land'], X4Y0: [1,'land'], X5Y0: [1,'land'], X6Y0: [1,'land'], X7Y0: [1,'vatn'],
      X0Y1: [1,'vatn'], X1Y1: [1,'vatn'], X2Y1: [1,'land'], X3Y1: [1,'land'], X4Y1: [1,'land'], X5Y1: [1,'land'], X6Y1: [1,'vatn'], X7Y1: [1,'vatn'],
      X0Y2: [1,'vatn'], X1Y2: [1,'vatn'], X2Y2: [1,'land'], X3Y2: [1,'land'], X4Y2: [1,'land'], X5Y2: [1,'land'], X6Y2: [1,'vatn'], X7Y2: [1,'vatn'],
      X0Y3: [1,'vatn'], X1Y3: [1,'vatn'], X2Y3: [1,'land'], X3Y3: [1,'land'], X4Y3: [1,'land'], X5Y3: [1,'land'], X6Y3: [1,'vatn'], X7Y3: [1,'vatn'],
      X0Y4: [1,'vatn'], X1Y4: [1,'vatn'], X2Y4: [1,'land'], X3Y4: [1,'land'], X4Y4: [1,'land'], X5Y4: [1,'land'], X6Y4: [1,'vatn'], X7Y4: [1,'vatn'],
      X0Y5: [1,'vatn'], X1Y5: [1,'vatn'], X2Y5: [1,'land'], X3Y5: [1,'land'], X4Y5: [1,'land'], X5Y5: [1,'land'], X6Y5: [1,'vatn'], X7Y5: [1,'vatn'],
      X0Y6: [1,'vatn'], X1Y6: [1,'land'], X2Y6: [1,'land'], X3Y6: [1,'land'], X4Y6: [1,'land'], X5Y6: [1,'land'], X6Y6: [1,'vatn'], X7Y6: [1,'vatn'],
      X0Y7: [1,'vatn'], X1Y7: [1,'land'], X2Y7: [1,'land'], X3Y7: [1,'land'], X4Y7: [1,'land'], X5Y7: [1,'land'], X6Y7: [1,'vatn'], X7Y7: [1,'stopp']
  },
  1: { startePeng: 9, melding:'Nytt: Fjell kan ikkje gravast til kanal.',
      X0Y0: [1,'start'],X1Y0: [1,'vatn'], X2Y0: [1,'land'], X3Y0:  [1,'land'], X4Y0: [1,'land'], X5Y0: [1,'land'], X6Y0: [1,'land'], X7Y0: [1,'vatn'],
      X0Y1: [1,'vatn'], X1Y1: [1,'vatn'], X2Y1: [1,'land'], X3Y1:  [1,'land'], X4Y1: [1,'fjell'], X5Y1:[1,'land'], X6Y1: [1,'vatn'], X7Y1: [1,'vatn'],
      X0Y2: [1,'vatn'], X1Y2: [1,'vatn'], X2Y2: [1,'land'], X3Y2:  [1,'land'], X4Y2: [1,'fjell'], X5Y2:[1,'vatn'], X6Y2: [1,'vatn'], X7Y2: [1,'vatn'],
      X0Y3: [1,'vatn'], X1Y3: [1,'vatn'], X2Y3: [1,'fjell'], X3Y3: [1,'land'], X4Y3: [1,'fjell'], X5Y3:[1,'land'], X6Y3: [1,'vatn'], X7Y3: [1,'vatn'],
      X0Y4: [1,'vatn'], X1Y4: [1,'vatn'], X2Y4: [1,'fjell'], X3Y4: [1,'land'], X4Y4: [1,'vatn'], X5Y4: [1,'land'], X6Y4: [1,'vatn'], X7Y4: [1,'vatn'],
      X0Y5: [1,'vatn'], X1Y5: [1,'vatn'], X2Y5: [1,'fjell'], X3Y5: [1,'land'], X4Y5: [1,'vatn'], X5Y5: [1,'land'], X6Y5: [1,'vatn'], X7Y5: [1,'vatn'],
      X0Y6: [1,'vatn'], X1Y6: [1,'land'], X2Y6: [1,'fjell'], X3Y6: [1,'land'], X4Y6: [1,'land'], X5Y6: [1,'vatn'], X6Y6: [1,'vatn'], X7Y6: [1,'vatn'],
      X0Y7: [1,'vatn'], X1Y7: [1,'land'], X2Y7: [1,'fjell'], X3Y7: [1,'land'], X4Y7: [1,'land'], X5Y7: [1,'land'], X6Y7: [1,'vatn'], X7Y7: [1,'stopp']
  },
  2: { startePeng: 11, melding:'Nytt: Sluser kan koble høg og låg kanal.',
    X0Y0: [1,'start'],X1Y0: [1,'vatn'], X2Y0: [1,'land'], X3Y0: [1,'fjell'],X4Y0: [2,'land'], X5Y0: [2,'land'], X6Y0: [2,'land'], X7Y0: [2,'vatn'],
    X0Y1: [1,'vatn'], X1Y1: [1,'vatn'], X2Y1: [1,'land'], X3Y1: [1,'land'], X4Y1: [2,'land'],X5Y1: [2,'land'], X6Y1: [2,'vatn'], X7Y1: [2,'vatn'],
    X0Y2: [1,'vatn'], X1Y2: [1,'vatn'], X2Y2: [1,'land'], X3Y2: [1,'land'], X4Y2: [2,'land'],X5Y2: [2,'land'], X6Y2: [2,'vatn'], X7Y2: [2,'vatn'],
    X0Y3: [1,'vatn'], X1Y3: [1,'vatn'], X2Y3: [1,'fjell'],X3Y3: [1,'land'], X4Y3: [2,'land'],X5Y3: [2,'land'], X6Y3: [2,'vatn'], X7Y3: [2,'vatn'],
    X0Y4: [1,'vatn'], X1Y4: [1,'vatn'], X2Y4: [1,'fjell'],X3Y4: [1,'land'], X4Y4: [2,'land'], X5Y4: [2,'land'], X6Y4: [2,'vatn'], X7Y4: [2,'vatn'],
    X0Y5: [1,'vatn'], X1Y5: [1,'vatn'], X2Y5: [1,'fjell'],X3Y5: [1,'fjell'],X4Y5: [2,'land'], X5Y5: [2,'land'], X6Y5: [2,'vatn'], X7Y5: [2,'vatn'],
    X0Y6: [1,'vatn'], X1Y6: [1,'land'], X2Y6: [1,'fjell'],X3Y6: [1,'land'], X4Y6: [2,'land'],X5Y6: [2,'vatn'], X6Y6: [2,'vatn'], X7Y6: [2,'vatn'],
    X0Y7: [1,'vatn'], X1Y7: [1,'land'], X2Y7: [1,'fjell'],X3Y7: [1,'land'], X4Y7: [2,'land'], X5Y7: [2,'land'], X6Y7: [2,'vatn'], X7Y7: [2,'stopp']
}
};

let spelarNiva:number = 0;
let peng:number = 0;
let ruter:Ruter = {};
let ruteListe:string[] = [];

function oppstart() {
 // lagreKjeks(spelarNiva, peng)
//  sjekkEtterKjeks()
  lagBrett()
}

function lagBrett(){
  for(let x=0;x<8;x++){
    for(let y=0;y<8;y++){
      let id:string = 'X'+x+'Y'+y;
      ruteListe.push(id);
      ruter[id] = new Rute(x, y, brettData[spelarNiva][id as keyof brettDataNiva][0], brettData[spelarNiva][id as keyof brettDataNiva][1]);
    }
  }
  peng = brettData[spelarNiva].startePeng;
  tegnTopp()
  oppdaterVatn()
  oppdaterMelding(brettData[spelarNiva].melding)
}

function tegnTopp(){
  document.getElementById('topp')!.innerHTML = '<p>Peng: ' + peng + '  Level: ' + spelarNiva + '<p>';
}

function oppdaterVatn() {
  ruteListe.forEach(nr => {
    if(ruter[nr].type === 'kilde'||ruter[nr].type === 'start'||ruter[nr].type === 'stopp'){
      fyllVatn(nr)
    }
  });
}

function fyllVatn(startRute:string){
  let ruterTilSjekk:string[] = [startRute];
  let sjekkaRuter:string[] = [];
  const vannNiva = ruter[startRute].niva;

  while(ruterTilSjekk.length > 0){
    const nr = ruterTilSjekk[0];
      const naboer = finnNaboRuter(nr);
      naboer.forEach(nabo => {
        if(!sjekkaRuter.includes(nabo) && ruter[nabo].niva <= vannNiva){ 
          ruter[nabo].type === 'vatn';
          oppdaterRute(nr)
          ruterTilSjekk.push(nabo);
        }
      });
    sjekkaRuter.push(nr);
    ruterTilSjekk.shift()
  }
}

function oppdaterMelding(melding:string) {
  document.getElementById('melding')!.style.display = 'flex';
  document.getElementById('meldingstekst')!.innerText = melding;
}

function trykkPaRute(nr:string){
  const naboTypar = finnNaboTypar(finnNaboRuter(nr));
  if(!sjekkPeng(naboTypar)){return;}
  if(ruter[nr].type === 'fjell' || ruter[nr].type === 'sluse'){ return;
  }else if(ruter[nr].type === 'land'){
    ruter[nr].niva--;
    oppdaterRute(nr)
    oppdaterVatn()
    sjekkOmFerdig(nr)
  }
}

function sjekkPeng(naboar:string[]){
  let pris = 1;
  naboar.forEach(nabo => {
    if(nabo === 'vatn') { pris++}
  });
  if(peng  < pris){
    visFeilmelding()
    return false;}
  else{ 
    peng -= pris;
    tegnTopp()
    return true;
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
    }else if(ruter[nr].type === 'vatn'){
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
function finnNaboRuter(nr:string) {
  let naboer:string[] = [];
  if(ruter[nr].y<7 ){naboer.push('X'+(ruter[nr].x)  +'Y'+(ruter[nr].y+1))}
  if(ruter[nr].y>0 ){naboer.push('X'+(ruter[nr].x)  +'Y'+(ruter[nr].y-1))}
  if(ruter[nr].x<7 ){naboer.push('X'+(ruter[nr].x+1)+'Y'+(ruter[nr].y)  )}
  if(ruter[nr].x>0 ){naboer.push('X'+(ruter[nr].x-1)+'Y'+(ruter[nr].y)  )}
  return(naboer)
}

function finnNaboTypar(naboar:string[]){
  let svar:string[] = [];
  naboar.forEach(nabo => {
    svar.push(ruter[nabo].type);
  });
  return(svar);
}

function oppdaterRute(nr:string){
  if(ruter[nr].type === 'vatn' || ruter[nr].type === 'land'){
    document.getElementById(nr)!.className = 'rute ' + ruter[nr].type + ruter[nr].niva;
  } else {
    document.getElementById(nr)!.className = 'rute ' + ruter[nr].type;
  }
}

function vinn(){
  spelarNiva++;
  oppdaterMelding('Du klarte det! Prøv neste nivå.')
}

function visFeilmelding(){
  document.getElementById('feilMelding')!.style.display = 'flex';
}
function fjernInfomelding(){
  document.getElementById('melding')!.style.display = 'none';
  document.getElementById('feilMelding')!.style.display = 'none';
}

function nesteNiva(){
  if(spelarNiva > maksNiva){return;}
  fjernInfomelding()
  lagBrett()
}
