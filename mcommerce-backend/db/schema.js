const mongoose = require('mongoose');

// Schéma et modèle Mongoose pour les produits
const produitSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    image: String,
    nom: String,
    description: String,
    prix: Number,
    quantite: Number
  });
const Produit = mongoose.model('Produit', produitSchema);

module.exports = Produit