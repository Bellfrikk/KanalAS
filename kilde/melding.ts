
type meldingsTrykk = 'nesteBrett'|'stopp'|'lukk';

function visMelding(melding:string,klikk:meldingsTrykk) {
  meldingKlikkHandling = klikk;
  document.getElementById('melding')!.className = 'braMelding';
  document.getElementById('meldingstekst')!.innerText = melding;
}
function visFeil(melding:string,klikk:meldingsTrykk) {
  meldingKlikkHandling = klikk;
  document.getElementById('melding')!.className = 'feilMelding';
  document.getElementById('meldingstekst')!.innerText = melding;
}

function meldingKlikk(){
  if(meldingKlikkHandling === 'nesteBrett'){
    visMelding(brettData[spelarNiva].melding,'lukk')
    lagBrett()
    fjernMelding()   
  }else if(meldingKlikkHandling === 'lukk'){
    fjernMelding()  
  }
}
function fjernMelding(){
  document.getElementById('melding')!.className = 'fjernMelding';
}