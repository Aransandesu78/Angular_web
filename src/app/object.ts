/*** Création des objets pour les composants angular ***/
import { registerDispatcher } from "@angular/core/primitives/event-dispatch";

  

/*** Création des classes ***/
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

export class Adas {
    PlatformVehicule: string[] = ['SWEET111', 'SWEET200', 'SWEET400', 'SWEET420'];
    projectVehicule: string[] = ['XFK', 'HHN', 'HCB'];
    ADASDrivingOwner: string[] = ['AEB', 'LSS', 'ISA', 'ACC'];
    TypeDriving: string[] = ['FEAS', 'DEV', 'CERTIF', 'SMP'];
    ADASApplicantOwner: string[] = ['AEB', 'LSS', 'ISA', 'ACC'];
}

export class Sensors {
    silSWFrCam?: string; // Any
    linkSilSWFrCam?: string; // Link 
    silSWFrRad?: string; // Any
    linkSilSWFrRad?: string; // Link 
    silSWSideRad?: string; // Any
    linkSilSWSideRad?: string; 
    silSWAdas?: string; // Any
    CalibrationSwAdas?: string; // Any
    linkSilSWAdas?: string; // Link
}
 
export class Follow {
    numDDV!: string; // XXX.XX
    dateCreationResimLoopRequest!: Date; // YYYY/MM/DD 
    DatelastModif!: Date; // YYYY/MM/DD 
    Dateprevu!: Date; // YYYY/MM/DD 
    dateEndResimLoop!: Date; // YYYY/MM/DD 
    stateResimLoopStatus:  string[] = ['Open', 'To launch', 'In progress', 'Finished', 'Cancelled', 'Failed']; // Open, To launch, In progress, Finished, Cancelled, Failed
    stateADASStatus: string[] = ['OK', 'NOK']; // OK, NOK 
    dateModifStatusBuckettemp!: Date; // YYYY/MM/DD 
    statusBuckettemp:  string[] = ['To validate', 'accepted', 'refused']; // To validate, accepted, refused
    associateResimForm?: string; // Link

    // Retourne la date de modification
    GetCurrentDate() {
        let date = new Date();
        return date;
    }
}

export class Comments {
    comment?: string; // Any
    results?: string; // Any
}


