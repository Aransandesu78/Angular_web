// import mysql
const mysql = require('mysql2');

// Configure la connexion
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // ou le mot de passe que tu as mis
  database: 'resim_request'
});

// Connexion à la base de données
db.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});

// Exporter le module db pour l'utiliser dans le fichier server.js
module.exports = db;
