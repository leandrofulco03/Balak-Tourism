import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css';

function Item(item) {
  return (
    <div>
      <Card style={{ width: '15rem' }} className='mx-1 my-2'>
      <Card.Img variant="top" src={item.image} />
      <Card.Body className='d-flex justify-content-center align-items-center flex-column text-center'>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to={`/destino/${item.id}`}><Button className='btn_primary'>Ver más</Button></Link>
      </Card.Body>
    </Card>
    </div>
    
  )
}

export default Item;