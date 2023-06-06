// setup application
const app = require("./db/app")

// connect to db
const db = require("./db/connect")

// setup schema des produits
const Produit = require("./db/schema")

// Les routes pour récupérer et commander des produits
const getProduits = require("./controllers/products")

const orderProduits = require("./controllers/order")

// Démarrez le serveur Express
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});