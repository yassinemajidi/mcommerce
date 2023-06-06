const Produit = require("../db/schema")
const app = require("../db/app")

// Les routes pour récupérer les produits
app.get('/produits', async (req, res) => {
    try {
      const produits = await Produit.find({});
      res.status(200).json(produits);
    } catch (err) {
      res.status(500).send('Erreur lors de la récupération des produits');
    }
  });

module.exports = app
