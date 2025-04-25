/* Importation des modules */
const express = require('express');
const db = require('./db'); // import la connexion avec la base de données
const app = express();

// Création du port d'écoute 
const PORT = 3080;
const route = '/api/request/';

/* Création des requêtes SQL à envoyer à la base de données */
// Récupère toutes les données au serveur
app.get(route, (req, res) => {
  db.query('SELECT * FROM request', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Envoie les données au serveur
app.post(route, (req, res) => {

  /* Déclaration des variables à utiliser pour les requêtes SQL */
  const {
    PlatformVehicule,
    projectVehicule,
    ADASDrivingOwner,
    TypeDriving,
    ADASApplicantOwner,
    silSWFrCam,
    linkSilSWFrCam,
    silSWFrRad,
    linkSilSWFrRad,
    silSWSideRad,
    linkSilSWSideRad,
    silSWAdas,
    CalibrationSwAdas,
    linkSilSWAdas,
    Comments,
    num_DDV,
    stateResimLoopStatus,
    stateADASStatus,
    dateCreationResimLoopRequest,
    dateEndResimLoop,
    dateModifStatusBuckettemp,
    statusBuckettemp,
    associateResimForm
  } = req.body;

  const sql = `
    INSERT INTO request (
      PlatformVehicule, projectVehicule, ADASDrivingOwner, TypeDriving, ADASApplicantOwner,
      silSWFrCam, linkSilSWFrCam, silSWFrRad, linkSilSWFrRad,
      silSWSideRad, linkSilSWSideRad, silSWAdas, CalibrationSwAdas, linkSilSWAdas,
      Comments, num_DDV, stateResimLoopStatus, stateADASStatus,
      dateCreationResimLoopRequest, dateEndResimLoop, dateModifStatusBuckettemp,
      statusBuckettemp, associateResimForm
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    PlatformVehicule, projectVehicule, ADASDrivingOwner, TypeDriving, ADASApplicantOwner,
    silSWFrCam, linkSilSWFrCam, silSWFrRad, linkSilSWFrRad,
    silSWSideRad, linkSilSWSideRad, silSWAdas, CalibrationSwAdas, linkSilSWAdas,
    Comments, num_DDV, stateResimLoopStatus, stateADASStatus,
    dateCreationResimLoopRequest, dateEndResimLoop, dateModifStatusBuckettemp,
    statusBuckettemp, associateResimForm
  ];

  db.query(sql, values, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Request successfully sent', id: result.insertId });
  });
});

// Ecoute le port 3080 du serveur pour se connecter
app.listen(PORT, () => {
  console.log(`Server listened on http://localhost:${PORT}${route}`);
});
