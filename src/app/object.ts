/*** Création des objets pour les composants angular ***/  

export interface Adas {
    PlatformVehicule: string; // SWEET111, SWEET200, SWEET400, SWEET420 ... ADAS platform 
    projectVehicule: string; // XFK, HHN, HCB, ... => Vehicule 
    ADASDrivingOwner: string; // AEB, LSS, ISA, ACC ... => ADAS functions
    TypeDriving: string; // FEAS, DEV, CERTIF, SMP
    ADASApplicantOwner: string; // AEB, LSS, ISA, ACC ... => ADAS functions
}

export interface Sensors {
    silSWFrCam: string; // Any
    linkSilSWFrCam: string; // Link 
    silSWFrRad: string; // Any
    linkSilSWFrRad: string; // Link 
    silSWSideRad: string; // Any
    linkSilSWSideRad: string; 
    silSWAdas: string; // Any
    CalibrationSwAdas: string; // Any
    linkSilSWAdas: string; // Link 
}

export interface Follow {
    numDDV: string; // XXX.XX
    dateCreationResimLoopRequest: Date; // YYYY/MM/DD 
    DatelastModif: Date; // YYYY/MM/DD 
    Dateprevu: Date; // YYYY/MM/DD 
    dateEndResimLoop: Date; // YYYY/MM/DD 
    stateResimLoopStatus: string; // Open, To launch, In progress, Finished, Cancelled, Failed
    stateADASStatus?: string; // OK, NOK 
    dateModifStatusBuckettemp?: Date; // YYYY/MM/DD 
    statusBuckettemp: string; // To validate, accepted, refused
    associateResimForm?: string; // Link
}

export interface Comments {
    comment?: string; // Any
    results?: string; // Any
}

export class User {
    first_name!: string; // example : Alain
    last_name!: string; // example : EENSCHOOTEN
    ipn!: string; // example : a051289
    isadmin!: boolean; // true, false 

    constructor(first_name: string, last_name: string, ipn: string, isadmin: boolean) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.ipn = ipn;
        this.isadmin = isadmin; 
    }
}
