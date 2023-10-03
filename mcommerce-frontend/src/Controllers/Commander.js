import axios from 'axios';

export function Commander(productId, quantity,setAlertVariant, setAlertMessage, setShowAlert, setProducts) {
  axios.post('http://localhost:3001/commander', { productId, quantity })
    .then(response => {
      setAlertVariant('success');
      setAlertMessage('Commande effectuée avec succès');
      setShowAlert(true);

      axios.get('http://localhost:3001/produits')
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des produits:', error);
        });
    })
    .catch(error => {
      setAlertVariant('danger');
      setAlertMessage('Erreur lors de la commande');
      setShowAlert(true);

      console.error('Erreur lors de la commande:', error);
    });
}