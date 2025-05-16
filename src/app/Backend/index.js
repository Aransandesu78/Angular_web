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

// Route pour récupérer toutes les demandes resims
app.get('/api/requests', (req, res) => {
  db.query('SELECT * FROM request', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Route pour récupérer les demandes resims en fonction de l'ID
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


app.listen(3000, () => {
  console.log('Serveur backend démarré sur le port 3000');
});
