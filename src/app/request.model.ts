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
  num_DDV: number;
  stateResimLoopStatus: string;
  stateADASStatus: string;
  dateCreationResimLoopRequest: string; // ou Date
  dateEndResimLoop: string;
  dateModifStatusBuckettemp: string;
  statusBuckettemp: 'To_validate' | 'accepted' | 'refused';
  associateResimForm: string;
}
  