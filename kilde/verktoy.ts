
function finnNaboRuter(nr:ruteID):ruteID[] {//[oppe-høgre-nede-venstre]
  let naboer:ruteID[] = [];
  if(ruter[nr].y>0 ){naboer.push(('X'+(ruter[nr].x)  +'Y'+(ruter[nr].y-1)) as ruteID)} else { naboer.push('kant')}
  if(ruter[nr].x<7 ){naboer.push(('X'+(ruter[nr].x+1)+'Y'+(ruter[nr].y)  ) as ruteID)} else { naboer.push('kant')}
  if(ruter[nr].y<7 ){naboer.push(('X'+(ruter[nr].x)  +'Y'+(ruter[nr].y+1)) as ruteID)} else { naboer.push('kant')}
  if(ruter[nr].x>0 ){naboer.push(('X'+(ruter[nr].x-1)+'Y'+(ruter[nr].y)  ) as ruteID)} else { naboer.push('kant')}
  return(naboer)
}

function finnNaboTypar(nr:ruteID){
  const naboar = finnNaboRuter(nr)
  let svar:string[] = [];
  naboar.forEach(nabo => {
    svar.push(ruter[nabo].type);
  });
  return(svar);
}
function finnNaboNiva(nr:ruteID){
  const naboar = finnNaboRuter(nr)
  let svar:number[] = [];
  naboar.forEach(nabo => {
    svar.push(ruter[nabo].niva);
  });
  return(svar);
}
function finnNaboKantar(nr:ruteID){
  const naboar = finnNaboRuter(nr)
  let svar = [
    {denneSide: nr+'O',nabo: naboar[0] as ruteID, naboSide: naboar[0] === 'kant' ? 'kant' : naboar[0]+'N'},
    {denneSide: nr+'H',nabo: naboar[1] as ruteID, naboSide: naboar[1] === 'kant' ? 'kant' : naboar[1]+'V'},
    {denneSide: nr+'N',nabo: naboar[2] as ruteID, naboSide: naboar[2] === 'kant' ? 'kant' : naboar[2]+'O'},
    {denneSide: nr+'V',nabo: naboar[3] as ruteID, naboSide: naboar[3] === 'kant' ? 'kant' : naboar[3]+'H'}
  ]
  return svar;
} 