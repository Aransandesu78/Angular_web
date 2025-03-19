export interface Column {
    id: number;
    date: string;
    project: string;
    adas: string;
    ecu: string;
    radar: string;
    frCam: string;
    sideRad: string;
    database: string;
    nbDdv: number; 
    deadline: string;
    status: string;
    comments: string;
}

export interface Adas {
    PlatformVehicule: string;
    projectVehicule: string; 
    ADASDrivingOwner: string; 
    TypeDriving: string; 
    ADASApplicantOwner: string;
}

export interface Sensors {
    silSWFrCam: string;
    linkSilSWFrCam: string;
    silSWFrRad: string; 
    linkSilSWFrRad: string; 
    silSWSideRad: string; 
    linkSilSWSideRad: string; 
    silSWAdas: string; 
    CalibrationSwAdas: string; 
    linkSilSWAdas: string; 
}

export interface Follow {
    numDDV: string;
    dateCreationResimLoopRequest?: Date;
    DatelastModif?: Date;
    Dateprevu?: Date;
    dateEndResimLoop?: Date; 
    stateResimLoopStatus: string;
    stateADASStatus: string; 
}

export interface Comments {
    comment?: string;
    dateModifStatusBuckettemp?: Date;  
    statusBuckettemp: string;
    associateResimForm: string;
}
