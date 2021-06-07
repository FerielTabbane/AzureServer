export interface Detector {
  id: Number;
  brand:string;
  model: string;
  expiration: string;
  lieu: string;
  raccord:RACCORD;
  telesurveille:TELESURVEILLE;
  interconnecte:INTERCONNECTE;
  typeBatterie: string;
  nbBatterie:number;


}

export enum RACCORD{
  no=0, yes=1, maybe=2
}

export enum TELESURVEILLE{
  no=0, yes=1, maybe=2
}


export enum INTERCONNECTE{
  no=0, yes=1, maybe=2
}
