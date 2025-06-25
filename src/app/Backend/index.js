/******************************* Configuration de la connexion *******************************/

// Importation des modules
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Création de l'application
const app = express();
app.use(cors()); // Autorise les appels depuis Angular
app.use(express.json());

// Configure la connexion
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'resim_request',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});



/******************************* Méthodes de récupération des demandes resims *******************************/

// Récupérer toutes les demandes resims de la base de données
app.get('/api/requests', (req, res) => {
  db.query('SELECT * FROM request', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Récupérer les demandes resims selon le filtrage sélectionné
app.get('/api/requests', (req, res) => {
  const filters = req.query; // Récupère tous les paramètres de la requête
  let sql = 'SELECT * FROM request';
  const conditions = [];
  const values = [];

  // Construit dynamiquement les conditions WHERE
  Object.keys(filters).forEach(key => {
    conditions.push(`${key} = ?`);
    values.push(filters[key]);
  });

  // Ajoute les conditions à la requête SQL et manipule les chaînes de caractères si nécessaire
  if (conditions.length > 0) {
    sql += ' WHERE ' + conditions.join(' AND ');
  }

  db.query(sql, values, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.get('/api/requests', (req, res) => {
  const status = req.params.statusBuckettemp;
  let sql = `SELECT * FROM request WHERE statusBuckettemp = ${status}`;
  db.query(sql, (err, results) => {
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


/******************************* Méthodes de modifications des demandes resims *******************************/

// Modifier une demande resim selon l'id récupéré
app.patch('/api/requests/:id', (req, res) => {
  const requestId = req.params.id;
  const updatedData = req.body;

  if (!updatedData || Object.keys(updatedData).length === 0) {
    return res.status(400).json({ error: 'Aucune donnée à mettre à jour' });
  }

  console.log('Misa à jour ID :', requestId);
  console.log('Données reçues :', updatedData);

  // Générer dynamiquement les champs et les valeurs
  const fields = Object.keys(updatedData);
  const values = Object.values(updatedData);

  const setClause = fields.map(field => `${field} = ?`).join(', ');
  const sql = `UPDATE request SET ${setClause} WHERE id = ?`;

  // Ajouter l'ID à la fin des valeurs
  values.push(requestId);

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erreur SQL :', err);
      return res.status(500).send(err);
    }
    res.json({ message: 'Demande mise à jour avec succès', result });
  });
});



/******************************* Méthodes d'ajout des demandes resims *******************************/

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



/******************************* Méthodes de suppression des demandes resims *******************************/

// Supprimer une demande resim selon l'id récupéré
app.delete('/api/requests/:id', (req, res) => {
  console.log(req.params.id);
  const requestId = req.params.id;
  db.query('DELETE FROM request WHERE id = ?', [requestId], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({message: 'Request deleted successfully'});
  });
});




/******************************* Ecoute le serveur sur le port 3000 *******************************/

app.listen(3000, () => {
  console.log('Backend server starting on port 3000');
});


