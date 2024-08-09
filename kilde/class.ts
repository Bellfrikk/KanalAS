type RuteTypar = "start"|"stopp"|"vatn"|"land"|"kanal"|"fjell";

type BrettData = { 
  [key:number]:brettDataNiva;
}

type brettDataNiva = { startePeng:number;
  X0Y0:RuteTypar; X1Y0:RuteTypar; X2Y0:RuteTypar; X3Y0:RuteTypar; X4Y0:RuteTypar; X5Y0:RuteTypar; X6Y0:RuteTypar; X7Y0:RuteTypar;  
  X0Y1:RuteTypar; X1Y1:RuteTypar; X2Y1:RuteTypar; X3Y1:RuteTypar; X4Y1:RuteTypar; X5Y1:RuteTypar; X6Y1:RuteTypar; X7Y1:RuteTypar;  
  X0Y2:RuteTypar; X1Y2:RuteTypar; X2Y2:RuteTypar; X3Y2:RuteTypar; X4Y2:RuteTypar; X5Y2:RuteTypar; X6Y2:RuteTypar; X7Y2:RuteTypar;  
  X0Y3:RuteTypar; X1Y3:RuteTypar; X2Y3:RuteTypar; X3Y3:RuteTypar; X4Y3:RuteTypar; X5Y3:RuteTypar; X6Y3:RuteTypar; X7Y3:RuteTypar;  
  X0Y4:RuteTypar; X1Y4:RuteTypar; X2Y4:RuteTypar; X3Y4:RuteTypar; X4Y4:RuteTypar; X5Y4:RuteTypar; X6Y4:RuteTypar; X7Y4:RuteTypar;  
  X0Y5:RuteTypar; X1Y5:RuteTypar; X2Y5:RuteTypar; X3Y5:RuteTypar; X4Y5:RuteTypar; X5Y5:RuteTypar; X6Y5:RuteTypar; X7Y5:RuteTypar;  
  X0Y6:RuteTypar; X1Y6:RuteTypar; X2Y6:RuteTypar; X3Y6:RuteTypar; X4Y6:RuteTypar; X5Y6:RuteTypar; X6Y6:RuteTypar; X7Y6:RuteTypar;  
  X0Y7:RuteTypar; X1Y7:RuteTypar; X2Y7:RuteTypar; X3Y7:RuteTypar; X4Y7:RuteTypar; X5Y7:RuteTypar; X6Y7:RuteTypar; X7Y7:RuteTypar;  
}

class Rute {
  x:number;
  y:number;
  type:RuteTypar;

  constructor (x:number, y:number, type:any){
    this.x = x;
    this.y = y;
    this.type = type;
  }
}
type Ruter = {
  [key:string]:Rute;
}
type infoMelding = 'meldingStart'|'meldingNesteNiva'|'meldingForLitePengar';
