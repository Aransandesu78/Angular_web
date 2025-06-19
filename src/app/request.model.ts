/** Création d'une interface pour faciliter l'exportation 
* de l'objet Resim Request avec un typage fort **/

export interface RequestModel {
  id: number;
  PlatformVehicule: string;
  projectVehicule: string;
  ADASDrivingOwner: string;
  TypeDriving: string;
  ADASApplicantOwner: string;

  silSWFrCam: string;
  linkSilSWFrCam: string;
  silSWFrRad: string;
  linkSilSWFrRad: string;
  silSWSideRad: string;
  linkSilSWSideRad: string;
  silSWAdas: string;
  CalibrationSwAdas: string;
  linkSilSWAdas: string;

  Comments: string;
  result_comment: string; 
  num_DDV: number;
  stateResimLoopStatus: string;
  stateADASStatus: string;
  dateCreationResimLoopRequest: Date; // ou Date
  dateEndResimLoop: Date;
  dateModifStatusBuckettemp: Date;
  statusBuckettemp: string;
  associateResimForm: string;
}
  