type RuteTypar = "start"|"stopp"|"vatn"|"land"|"kanal"|"fjell"|"sluse";

type RuteData = [number,RuteTypar];

type brettDataNiva = { startePeng:number;
  X0Y0:RuteData; X1Y0:RuteData; X2Y0:RuteData; X3Y0:RuteData; X4Y0:RuteData; X5Y0:RuteData; X6Y0:RuteData; X7Y0:RuteData;  
  X0Y1:RuteData; X1Y1:RuteData; X2Y1:RuteData; X3Y1:RuteData; X4Y1:RuteData; X5Y1:RuteData; X6Y1:RuteData; X7Y1:RuteData;  
  X0Y2:RuteData; X1Y2:RuteData; X2Y2:RuteData; X3Y2:RuteData; X4Y2:RuteData; X5Y2:RuteData; X6Y2:RuteData; X7Y2:RuteData;  
  X0Y3:RuteData; X1Y3:RuteData; X2Y3:RuteData; X3Y3:RuteData; X4Y3:RuteData; X5Y3:RuteData; X6Y3:RuteData; X7Y3:RuteData;  
  X0Y4:RuteData; X1Y4:RuteData; X2Y4:RuteData; X3Y4:RuteData; X4Y4:RuteData; X5Y4:RuteData; X6Y4:RuteData; X7Y4:RuteData;  
  X0Y5:RuteData; X1Y5:RuteData; X2Y5:RuteData; X3Y5:RuteData; X4Y5:RuteData; X5Y5:RuteData; X6Y5:RuteData; X7Y5:RuteData;  
  X0Y6:RuteData; X1Y6:RuteData; X2Y6:RuteData; X3Y6:RuteData; X4Y6:RuteData; X5Y6:RuteData; X6Y6:RuteData; X7Y6:RuteData;  
  X0Y7:RuteData; X1Y7:RuteData; X2Y7:RuteData; X3Y7:RuteData; X4Y7:RuteData; X5Y7:RuteData; X6Y7:RuteData; X7Y7:RuteData;  
}

type BrettData = { 
  [key:number]:brettDataNiva;
}

class Rute {
  x:number;
  y:number;
  niva:number;
  type:RuteTypar;

  constructor (x:number, y:number, niva:number, type:RuteTypar){
    this.x = x;
    this.y = y;
    this.niva = niva;
    this.type = type;
  }
}
type Ruter = {
  [key:string]:Rute;
}
type infoMelding = 'meldingStart'|'meldingNesteNiva'|'meldingForLitePengar';
