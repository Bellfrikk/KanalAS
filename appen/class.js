"use strict";
class Rute {
    constructor(x, y, niva, type) {
        this.x = x;
        this.y = y;
        this.niva = niva;
        this.type = type;
        this.vatn = type === 'vatn' ? true : false;
    }
}
