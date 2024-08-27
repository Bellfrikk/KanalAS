"use strict";
function finnNaboRuter(nr) {
    let naboer = [];
    if (ruter[nr].y > 0) {
        naboer.push('X' + (ruter[nr].x) + 'Y' + (ruter[nr].y - 1));
    }
    else {
        naboer.push('kant');
    }
    if (ruter[nr].x < 7) {
        naboer.push('X' + (ruter[nr].x + 1) + 'Y' + (ruter[nr].y));
    }
    else {
        naboer.push('kant');
    }
    if (ruter[nr].y < 7) {
        naboer.push('X' + (ruter[nr].x) + 'Y' + (ruter[nr].y + 1));
    }
    else {
        naboer.push('kant');
    }
    if (ruter[nr].x > 0) {
        naboer.push('X' + (ruter[nr].x - 1) + 'Y' + (ruter[nr].y));
    }
    else {
        naboer.push('kant');
    }
    return (naboer);
}
function finnNaboTypar(nr) {
    const naboar = finnNaboRuter(nr);
    let svar = [];
    naboar.forEach(nabo => {
        svar.push(ruter[nabo].type);
    });
    return (svar);
}
function finnNaboNiva(nr) {
    const naboar = finnNaboRuter(nr);
    let svar = [];
    naboar.forEach(nabo => {
        svar.push(ruter[nabo].niva);
    });
    return (svar);
}
function finnNaboKantar(nr) {
    const naboar = finnNaboRuter(nr);
    let svar = [
        { denneSide: nr + 'O', nabo: naboar[0], naboSide: naboar[0] === 'kant' ? 'kant' : naboar[0] + 'N' },
        { denneSide: nr + 'H', nabo: naboar[1], naboSide: naboar[1] === 'kant' ? 'kant' : naboar[1] + 'V' },
        { denneSide: nr + 'N', nabo: naboar[2], naboSide: naboar[2] === 'kant' ? 'kant' : naboar[2] + 'O' },
        { denneSide: nr + 'V', nabo: naboar[3], naboSide: naboar[3] === 'kant' ? 'kant' : naboar[3] + 'H' }
    ];
    return svar;
}
