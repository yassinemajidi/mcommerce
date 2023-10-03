import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ProductCard} from './elements/ProductCard'
import { Alert } from 'react-bootstrap';


// Récupérez les produits depuis le backend et affichez-les
function App() {
  // products hooks
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/produits')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des produits:', error);
      });
  }, []);

  //commander hooks
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');

  // dropdown hooks
  const [selectedNumbers, setSelectedNumbers] = useState({});

  function handleNumberChange(productId, number) {
    setSelectedNumbers(prevState => ({
      ...prevState,
      [productId]: number
    }));
  }

  return (
    <div className="Main mb-3">
      <h1 className="mx-auto d-table m-5">Application Mcommerce</h1>
      <Container>
        {showAlert && (
          <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
            {alertMessage}
          </Alert>
        )}
        <Row>
          {products.map(product => (
            <Col sm key={product._id}>
              {ProductCard(product, setAlertVariant, setAlertMessage, setShowAlert, setProducts, selectedNumbers[product._id] || 1, handleNumberChange)}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}




export default App;
