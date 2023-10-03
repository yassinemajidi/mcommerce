import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import { Commander } from '../Controllers/Commander';



export function ProductCard(product, setAlertVariant, setAlertMessage, setShowAlert, setProducts, selectedNumber, handleNumberChange) {
    return (       
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"img/"+product.image} alt={product.nom}/>
                <Card.Body>
                    <Card.Title>{product.nom}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{product.prix}€ - {product.quantite} en stock</Card.Subtitle>
                    <Card.Text>
                    {product.description}
                    </Card.Text>
                    <Row>
                    <Col>
                        <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            {selectedNumber}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {Array.from({length:10},(v,k)=>k+1).map(num => (
                                <Dropdown.Item key={num} onClick={() => handleNumberChange(product._id, num)}>
                                    {num}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col>
                        <Button variant="warning" onClick={() => Commander(product._id, selectedNumber, setAlertVariant, setAlertMessage, setShowAlert, setProducts)}>acheter</Button>
                    </Col>
                    </Row>
                </Card.Body>
            </Card>
    );
}
