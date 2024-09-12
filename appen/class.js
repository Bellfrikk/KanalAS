"use strict";
class Rute {
    constructor(x, y, niva, type) {
        this.x = x;
        this.y = y;
        this.niva = niva;
        this.type = type;
        this.vatn = type === 'vatn' ? true : false;
        this.reiseLengde = type === 'stopp' ? 0 : 1000;
        this.luftLinjeFram = 1000;
        this.totNR = 1000;
        this.forelderRute = null;
    }
}
