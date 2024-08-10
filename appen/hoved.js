"use strict";
const maksNiva = 2;
const brettData = {
    0: { startePeng: 7,
        X0Y0: 'start', X1Y0: 'vatn', X2Y0: 'land', X3Y0: 'land', X4Y0: 'land', X5Y0: 'land', X6Y0: 'land', X7Y0: 'vatn',
        X0Y1: 'vatn', X1Y1: 'vatn', X2Y1: 'land', X3Y1: 'land', X4Y1: 'land', X5Y1: 'land', X6Y1: 'vatn', X7Y1: 'vatn',
        X0Y2: 'vatn', X1Y2: 'vatn', X2Y2: 'land', X3Y2: 'land', X4Y2: 'land', X5Y2: 'land', X6Y2: 'vatn', X7Y2: 'vatn',
        X0Y3: 'vatn', X1Y3: 'vatn', X2Y3: 'land', X3Y3: 'land', X4Y3: 'land', X5Y3: 'land', X6Y3: 'vatn', X7Y3: 'vatn',
        X0Y4: 'vatn', X1Y4: 'vatn', X2Y4: 'land', X3Y4: 'land', X4Y4: 'land', X5Y4: 'land', X6Y4: 'vatn', X7Y4: 'vatn',
        X0Y5: 'vatn', X1Y5: 'vatn', X2Y5: 'land', X3Y5: 'land', X4Y5: 'land', X5Y5: 'land', X6Y5: 'vatn', X7Y5: 'vatn',
        X0Y6: 'vatn', X1Y6: 'land', X2Y6: 'land', X3Y6: 'land', X4Y6: 'land', X5Y6: 'land', X6Y6: 'vatn', X7Y6: 'vatn',
        X0Y7: 'vatn', X1Y7: 'land', X2Y7: 'land', X3Y7: 'land', X4Y7: 'land', X5Y7: 'land', X6Y7: 'vatn', X7Y7: 'stopp'
    },
    1: { startePeng: 9,
        X0Y0: 'start', X1Y0: 'vatn', X2Y0: 'land', X3Y0: 'land', X4Y0: 'land', X5Y0: 'land', X6Y0: 'land', X7Y0: 'vatn',
        X0Y1: 'vatn', X1Y1: 'vatn', X2Y1: 'land', X3Y1: 'land', X4Y1: 'fjell', X5Y1: 'land', X6Y1: 'vatn', X7Y1: 'vatn',
        X0Y2: 'vatn', X1Y2: 'vatn', X2Y2: 'land', X3Y2: 'land', X4Y2: 'fjell', X5Y2: 'vatn', X6Y2: 'vatn', X7Y2: 'vatn',
        X0Y3: 'vatn', X1Y3: 'vatn', X2Y3: 'fjell', X3Y3: 'land', X4Y3: 'fjell', X5Y3: 'land', X6Y3: 'vatn', X7Y3: 'vatn',
        X0Y4: 'vatn', X1Y4: 'vatn', X2Y4: 'fjell', X3Y4: 'land', X4Y4: 'vatn', X5Y4: 'land', X6Y4: 'vatn', X7Y4: 'vatn',
        X0Y5: 'vatn', X1Y5: 'vatn', X2Y5: 'fjell', X3Y5: 'land', X4Y5: 'vatn', X5Y5: 'land', X6Y5: 'vatn', X7Y5: 'vatn',
        X0Y6: 'vatn', X1Y6: 'land', X2Y6: 'fjell', X3Y6: 'land', X4Y6: 'land', X5Y6: 'vatn', X6Y6: 'vatn', X7Y6: 'vatn',
        X0Y7: 'vatn', X1Y7: 'land', X2Y7: 'fjell', X3Y7: 'land', X4Y7: 'land', X5Y7: 'land', X6Y7: 'vatn', X7Y7: 'stopp'
    },
    2: { startePeng: 11,
      X0Y0: 'start', X1Y0: 'vatn', X2Y0: 'land', X3Y0: 'fjell', X4Y0: 'land', X5Y0: 'land', X6Y0: 'land', X7Y0: 'vatn',
      X0Y1: 'vatn', X1Y1: 'vatn', X2Y1: 'land', X3Y1: 'land', X4Y1: 'fjell', X5Y1: 'land', X6Y1: 'vatn', X7Y1: 'vatn',
      X0Y2: 'vatn', X1Y2: 'vatn', X2Y2: 'land', X3Y2: 'vatn', X4Y2: 'fjell', X5Y2: 'vatn', X6Y2: 'vatn', X7Y2: 'vatn',
      X0Y3: 'vatn', X1Y3: 'vatn', X2Y3: 'fjell', X3Y3: 'land', X4Y3: 'fjell', X5Y3: 'land', X6Y3: 'vatn', X7Y3: 'vatn',
      X0Y4: 'vatn', X1Y4: 'vatn', X2Y4: 'fjell', X3Y4: 'land', X4Y4: 'vatn', X5Y4: 'land', X6Y4: 'vatn', X7Y4: 'vatn',
      X0Y5: 'vatn', X1Y5: 'vatn', X2Y5: 'fjell', X3Y5: 'fjell', X4Y5: 'vatn', X5Y5: 'land', X6Y5: 'vatn', X7Y5: 'vatn',
      X0Y6: 'vatn', X1Y6: 'land', X2Y6: 'fjell', X3Y6: 'land', X4Y6: 'fjell', X5Y6: 'vatn', X6Y6: 'vatn', X7Y6: 'vatn',
      X0Y7: 'vatn', X1Y7: 'land', X2Y7: 'fjell', X3Y7: 'land', X4Y7: 'land', X5Y7: 'land', X6Y7: 'vatn', X7Y7: 'stopp'
  }
};
const ruteTypar = {
    start: {
        niva: 0,
        farge: 'red'
    },
    stopp: {
        niva: 0,
        farge: 'red'
    },
    vatn: {
        niva: 0,
        farge: '#105fcc'
    },
    kanal: {
        niva: 0,
        farge: '#8c5c1c'
    },
    land: {
        niva: 1,
        farge: 'green'
    },
    fjell: {
        niva: 2,
        farge: 'grey'
    }
};
let spelaNiva = 2;
let peng = 0;
let ruter = {};
let ruteListe = [];
function oppstart() {
    lagreKjeks(spelaNiva, peng);
    sjekkEtterKjeks();
    lagBrett();
    visInfomelding('meldingStart');
}
function lagBrett() {
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            let id = 'X' + x + 'Y' + y;
            ruteListe.push(id);
            ruter[id] = new Rute(x, y, brettData[spelaNiva][id]);
        }
    }
    peng = brettData[spelaNiva].startePeng;
    tegnTopp();
    TegnHoved();
}
function sjekkEtterKjeks() {
    //let kjeks = document.cookie.split(';');
    //for(let i = 0; i < kjeks.length; i++) {
    //  let c = ca[i];
    //  while (c.charAt(0) == ' ') {
    //    c = c.substring(1);
    //  }
    //  if (c.indexOf(name) == 0) {
    //    return c.substring(name.length, c.length);
    //  }
    //}
    //return "";  
    //spelaNiva = 0;
}
function lagreKjeks(niva, peng) {
    document.cookie = "KanalAS:" + niva + ":" + peng + ";" + "expires=Thu, 18 Dec 2033 12:00:00 UTC;path=/";
}
/*
function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}*/
function tegnTopp() {
    document.getElementById('topp').innerHTML = '<p>Peng: ' + peng + '  Level: ' + spelaNiva + '<p>';
}
function TegnHoved() {
    ruteListe.forEach(nr => {
        document.getElementById(nr).style.background = ruteTypar[ruter[nr].type].farge;
    });
}
function trykkRute(nr) {
    const naboTypar = finnNaboTypar(finnNaboRuter(nr));
    if (!sjekkPeng(naboTypar)) {
        return;
    }
    if (ruter[nr].type === 'fjell') {
        return;
    }
    else if (ruter[nr].type === 'land') {
        oppdaterRuteType(nr, 'kanal');
        if (naboTypar.includes('vatn')) {
            fyllKanalar(nr);
        }
        sjekkOmFerdig(nr);
    }
}
function sjekkPeng(naboar) {
    let pris = 1;
    naboar.forEach(nabo => {
        if (nabo === 'vatn') {
            pris++;
        }
    });
    if (peng < pris) {
        visInfomelding('meldingForLitePengar');
        return false;
    }
    else {
        peng -= pris;
        tegnTopp();
        return true;
    }
}
function fyllKanalar(startRute) {
    let ruterTilSjekk = [startRute];
    let sjekkaRuter = [];
    while (ruterTilSjekk.length > 0) {
        const nr = ruterTilSjekk[0];
        if (ruter[nr].type === 'kanal') {
            oppdaterRuteType(nr, 'vatn');
            const naboer = finnNaboRuter(nr);
            naboer.forEach(nabo => {
                if (!sjekkaRuter.includes(nabo) && ruter[nabo].type === 'kanal') {
                    ruterTilSjekk.push(nabo);
                }
            });
        }
        sjekkaRuter.push(nr);
        ruterTilSjekk.shift();
    }
}
function sjekkOmFerdig(nr) {
    let ruterTilSjekk = ['X1Y0', 'X0Y1'];
    let sjekkaRuter = ['X0Y0'];
    sjekkRute();
    function sjekkRute() {
        const nr = ruterTilSjekk[0];
        if (ruter[nr].type === 'stopp') {
            vinn();
            return;
        }
        else if (ruter[nr].type === 'vatn') {
            const naboer = finnNaboRuter(nr);
            naboer.forEach(nabo => {
                if (!sjekkaRuter.includes(nabo)) {
                    ruterTilSjekk.push(nabo);
                }
            });
        }
        sjekkaRuter.push(nr);
        ruterTilSjekk.shift();
        if (ruterTilSjekk.length > 0) {
            sjekkRute();
        }
    }
}
function finnNaboRuter(nr) {
    let naboer = [];
    if (ruter[nr].y < 7) {
        naboer.push('X' + (ruter[nr].x) + 'Y' + (ruter[nr].y + 1));
    }
    if (ruter[nr].y > 0) {
        naboer.push('X' + (ruter[nr].x) + 'Y' + (ruter[nr].y - 1));
    }
    if (ruter[nr].x < 7) {
        naboer.push('X' + (ruter[nr].x + 1) + 'Y' + (ruter[nr].y));
    }
    if (ruter[nr].x > 0) {
        naboer.push('X' + (ruter[nr].x - 1) + 'Y' + (ruter[nr].y));
    }
    return (naboer);
}
function finnNaboTypar(naboar) {
    let svar = [];
    naboar.forEach(nabo => {
        svar.push(ruter[nabo].type);
    });
    return (svar);
}
function oppdaterRuteType(nr, nyType) {
    ruter[nr].type = nyType;
    document.getElementById(nr).style.background = ruteTypar[nyType].farge;
}
function vinn() {
    spelaNiva++;
    peng += 5;
    visInfomelding('meldingNesteNiva');
}
function visInfomelding(melding) {
    document.getElementById(melding).style.display = 'flex';
}
function fjernInfomelding() {
    document.getElementById('meldingStart').style.display = 'none';
    document.getElementById('meldingNesteNiva').style.display = 'none';
    document.getElementById('meldingForLitePengar').style.display = 'none';
}
function nesteNiva() {
    if (spelaNiva > maksNiva) {
        return;
    }
    fjernInfomelding();
    lagBrett();
}
