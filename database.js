const mysql = require('mysql2');
require('dotenv').config(); // Si tu utilises un fichier .env pour stocker tes infos de connexion

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost', 
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'mypassword',
    database: process.env.DB_NAME || 'sae402',
    port: process.env.DB_PORT || 3306,
});

db.connect((err) => {
    if (err) {
        // Gestion des erreurs spécifiques
        if (err.code === 'ER_BAD_DB_ERROR') {
            console.error("❌ Erreur : La base de données spécifiée n'existe pas. Vérifiez le nom de la base de données dans votre fichier .env ou créez-la dans MySQL.");
        } else if (err.code === 'ER_ACCESS_DENIED_ERROR') {
            console.error("❌ Erreur : Accès refusé. Vérifiez le nom d'utilisateur et le mot de passe dans votre fichier .env.");
        } else if (err.code === 'ENOTFOUND') {
            console.error("❌ Erreur : Hôte MySQL introuvable. Vérifiez l'adresse de l'hôte (DB_HOST) dans votre fichier .env.");
        } else if (err.code === 'ECONNREFUSED') {
            console.error("❌ Erreur : Connexion refusée. Assurez-vous que le serveur MySQL est en cours d'exécution et que le port est correct.");
        } else {
            console.error("❌ Erreur inconnue lors de la connexion à la base de données :", err);
        }
        return;
    }
    console.log('✅ Connecté à la base de données');
});

module.exports = db;