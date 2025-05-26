// Importation des modules
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Création de l'application
const app = express();
app.use(cors()); // Autorise les appels depuis Angular
app.use(express.json());

// Configure la connexion
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // ou ton mdp
  database: 'resim_request',
});

// Connexion à la base de données
db.connect(err => {
  if (err) throw err;
  console.log('Connecté à la base de données MySQL');
});

// Récupérer toutes les demandes resims de la base de données
app.get('/api/requests', (req, res) => {
  db.query('SELECT * FROM request', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Récupérer les demandes resims à partir de leur identifiant
app.get('/api/requests/:id', (req, res) => {
  const requestId = req.params.id;
  db.query(`SELECT * FROM request WHERE id = ${requestId}`, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Modifier une demande resim selon l'id récupéré
app.put('/api/requests/:id', (req, res) => {
  const requestId = req.params.id;
  const updatedData = req.body;
  const sql = `UPDATE request SET ${updatedData} WHERE id = ${requestId}`;
  db.query(sql, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Demande mise à jour avec succès', result });
  });
});

// Ajouter une demande resim
app.post('/api/requests', (req, res) => {
  const requestData = req.body;
  console.log('Request body', req.body);
  const sql = `
    INSERT INTO request (
      PlatformVehicule, projectVehicule, ADASDrivingOwner, TypeDriving,
      ADASApplicantOwner, silSWFrCam, linkSilSWFrCam, silSWFrRad, linkSilSWFrRad,
      silSWSideRad, linkSilSWSideRad, silSWAdas, linkSilSWAdas, Comments,
      num_DDV, stateResimLoopStatus, associateResimForm
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    requestData.PlatformVehicule,
    requestData.projectVehicule,
    requestData.ADASDrivingOwner,
    requestData.TypeDriving,
    requestData.ADASApplicantOwner,
    requestData.silSWFrCam,
    requestData.linkSilSWFrCam,
    requestData.silSWFrRad,
    requestData.linkSilSWFrRad,
    requestData.silSWSideRad,
    requestData.linkSilSWSideRad,
    requestData.silSWAdas,
    requestData.linkSilSWAdas,
    requestData.Comments,
    requestData.numDDV, 
    requestData.stateResimLoopStatus,
    requestData.associateResimForm
  ];

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Request created successfully', id: result.insertId });
  });
});


// Supprimer une demande resim selon l'id récupéré
app.delete('/api/requests/:id', (req, res) => {
  const requestId = req.params.id;
  db.query('DELETE FROM request WHERE id = ?', [requestId], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({message: 'Request deleted successfully'});
  });
});

// Ecoute le serveur sur le port 3000 
app.listen(3000, () => {
  console.log('Backend server starting on port 3000');
});


