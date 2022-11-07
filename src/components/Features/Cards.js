import React from 'react'
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
function Cards(props) {
  return (
    <Col lg={6}>
    <Card >
        <div className='image-card'>
    <Card.Img variant="top" src={props.imgPath} />
    </div>
    <Card.Body>
      <Card.Title>{props.headingText}</Card.Title>
      <Card.Text>
      {props.paraText}
      </Card.Text>
     
    </Card.Body>
  </Card>
  </Col>
  
  )
}

export default Cards