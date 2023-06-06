const Produit = require("../db/schema")
const app = require("../db/app")

app.post('/commander', async (req, res) => {
    const productId = req.body.productId;
    const quantity = req.body.quantity;
  
    try {
      const product = await Produit.findById(productId);
  
      if (!product) {
        res.status(404).send('Produit introuvable');
        return;
      }
  
      if (product.quantite < quantity) {
        res.status(400).send('Quantité insuffisante en stock');
        return;
      }
  
      product.quantite -= quantity;
      await product.save();
      res.status(200).send('Commande effectuée avec succès');
    } catch (err) {
      res.status(500).send('Erreur lors de la récupération du produit');
    }
  });

module.exports = app