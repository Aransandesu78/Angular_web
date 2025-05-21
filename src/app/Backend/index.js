// index.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); // Autorise les appels depuis Angular
app.use(express.json());

// Connexion MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // ou ton mdp
  database: 'resim_request',
});

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
app.put('api/requests/:id', (req, res) => {
  const requestId = req.params.id;
  const updatedData = req.body;
  const sql = `UPDATE request SET ? WHERE id = ?`;
  db.query(sql, [updatedData, requestId], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Demande mise à jour avec succès', result });
  });
});

// Ajouter une demande resim
app.post('api/requests/:id', (req,res) => {
  // Constante pour la création des colonnes de la table SQL requests
  const requestData = req.body; // Récupère l'objet JSON de la demande Resim
  const sql = 'INSERT INTO request SET ?';
  db.query(sql, requestData, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({message: 'Request created successfully', id: result.insertId});
  });
});

// Supprimer une demande resim selon l'id récupéré
app.delete('api/requests/:id', (req, res) => {
  const requestId = req.params.id;
  db.query('DELETE FROM request WHERE id = ?', [requestId], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({message: 'Request deleted successfully'});
  });
});

app.listen(3000, () => {
  console.log('Backend server starting on port 3000');
});


