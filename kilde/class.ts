type BrettData = {[key in BrettNivaer]: BrettDataNiva;};
type StartePeng = number;
type Melding = string;
type BrettNivaer = 0|1|2|3;
type BrettDataNiva = { [key in ruteID]: RuteData;} & {
  melding: string;
  startePeng: number;
};
type RuteTypar = "start"|"stopp"|"vatn"|"land"|"hogland"|"kant"|"fjell"|"sluse"|"kanal";
type RuteData = [number,RuteTypar]; //{[key in ruteID|'startePeng'|'melding']: [BrettNivaer, RuteTypar];};
type ruteID = 'X0Y0'|'X1Y0'|'X2Y0'|'X3Y0'|'X4Y0'|'X5Y0'|'X6Y0'|'X7Y0'|'X0Y1'|'X1Y1'|'X2Y1'|'X3Y1'|'X4Y1'|'X5Y1'|'X6Y1'|'X7Y1'|'X0Y2'|'X1Y2'|'X2Y2'|'X3Y2'|'X4Y2'|'X5Y2'|'X6Y2'|'X7Y2'|'X0Y3'|'X1Y3'|'X2Y3'|'X3Y3'|'X4Y3'|'X5Y3'|'X6Y3'|'X7Y3'|'X0Y4'|'X1Y4'|'X2Y4'|'X3Y4'|'X4Y4'|'X5Y4'|'X6Y4'|'X7Y4'|'X0Y5'|'X1Y5'|'X2Y5'|'X3Y5'|'X4Y5'|'X5Y5'|'X6Y5'|'X7Y5'|'X0Y6'|'X1Y6'|'X2Y6'|'X3Y6'|'X4Y6'|'X5Y6'|'X6Y6'|'X7Y6'|'X0Y7'|'X1Y7'|'X2Y7'|'X3Y7'|'X4Y7'|'X5Y7'|'X6Y7'|'X7Y7';


class Rute {
  x:number;
  y:number;
  niva:number;
  type:RuteTypar;
  vatn:boolean;

  constructor (x:number, y:number, niva:number, type:RuteTypar){
    this.x = x;
    this.y = y;
    this.niva = niva;
    this.type = type;
    this.vatn = type === 'vatn'? true : false;
  }
}


type Ruter = {
  [key:string]:Rute;
}
