const mongoose = require('mongoose');

// Connexion à MongoDB
const url = 'mongodb://host.docker.internal:27017/produits';
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB:'));
db.once('open', () => {
  console.log('Connecté à MongoDB');
});

module.exports = db