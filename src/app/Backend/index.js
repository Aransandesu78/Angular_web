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

// Route exemple pour récupérer des données
app.get('/api/requests', (req, res) => {
  db.query('SELECT * FROM request', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Serveur backend démarré sur le port 3000');
});
