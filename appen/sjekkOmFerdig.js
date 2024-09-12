"use strict";
function sjekkOmFerdig() {
    let tilSjekk = ["X7Y7"];
    let erSjekka = [];
    let denne = "X7Y7";
    let denneNr = 0;
    sjekkHer();
    function sjekkHer() {
        //finn ruta med lågast totNR og sett til denne
        if (tilSjekk.length > 0) {
            let tmp = ruter[tilSjekk[0]].totNR;
            tilSjekk.forEach((rute, nr) => {
                if (ruter[rute].totNR <= tmp) {
                    tmp = ruter[rute].totNR;
                    denne = rute;
                    denneNr = nr;
                }
            });
            const naboar = finnNaboRuter(denne);
            naboar.forEach(nabo => {
                if (nabo !== 'kant' && //ikkje er utafor brettet
                    !erSjekka.includes(nabo) && //ikkje er sjekka allerede
                    (ruter[nabo].vatn || ruter[nabo].type === 'start' || ruter[nabo].type === 'stopp')) {
                    const nyReiseLengde = finnReiseLengde(nabo, denne);
                    if (ruter[nabo].reiseLengde > nyReiseLengde) { //lagre ny vei visst den er kortare
                        ruter[nabo].reiseLengde = nyReiseLengde;
                        ruter[nabo].luftLinjeFram = finnLuftjinjeFram(nabo);
                        ruter[nabo].totNR = ruter[nabo].reiseLengde + ruter[nabo].luftLinjeFram;
                        ruter[nabo].forelderRute = denne;
                        //document.getElementById(nabo+'M')!.style.background = 'yellow';
                        //document.getElementById(denne+'M')!.style.background = 'purple';
                    }
                    if (nabo === startRute) {
                        ruter[nabo].forelderRute = denne;
                        skipTur();
                        return;
                    }
                    if (!tilSjekk.includes(nabo)) { //legg denne naboen i lista som einskal sjekke naobane til
                        tilSjekk.push(nabo);
                    }
                }
            });
            erSjekka.push(denne); //merk denne som sjekka
            tilSjekk.splice(denneNr, 1); //fjern frå sjekke lista
            sjekkHer();
        }
    }
}
function finnReiseLengde(nr, forelder) {
    let svar = Math.abs(ruter[forelder].reiseLengde + 1);
    return Math.floor(svar);
}
function finnLuftjinjeFram(nr) {
    let svar = Math.abs(ruter[nr].x - ruter[startRute].x) + Math.abs(ruter[nr].y - ruter[startRute].y);
    return Math.floor(svar);
}
function skipTur() {
    const maksFlytt = 2;
    let flyttNR = maksFlytt;
    let flytting = setInterval(flyttSkip, 100);
    let denneRute;
    let nesteRute = 'X0Y0';
    let flyttX = 0;
    let flyttY = 0;
    function flyttSkip() {
        if (flyttNR === maksFlytt) {
            flyttNR = 1;
            denneRute = nesteRute;
            nesteRute = ruter[denneRute].forelderRute;
            // flyttX = (ruter[nesteRute].x - ruter[denneRute].x) * strRute.width / maksFlytt;
            // flyttY = (ruter[nesteRute].y - ruter[denneRute].y) * strRute.height / maksFlytt;
            // skipet.retning = flyttX > flyttY ? 0 : 90;
            const naboSider = finnNaboKantar(denneRute);
            document.getElementById(denneRute + 'M').className = 'ferdigVei ';
            naboSider.forEach(side => {
                if (side.nabo === nesteRute) {
                    document.getElementById(side.denneSide).className = 'ferdigVei ';
                    document.getElementById(side.naboSide).className = 'ferdigVei';
                }
            });
        }
        //skipet.x += flyttX;
        //skipet.y += flyttY;
        //teinSkip()
        flyttNR++;
        if (nesteRute === stoppRute) {
            clearInterval(flytting);
            vinn();
        }
    }
}
