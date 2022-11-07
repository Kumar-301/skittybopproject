import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './getconnected.scss';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';

function GetConnectedCards() {
  return (
    <Col lg={6}>
        <div className='getcards-section'>
        <Card className="getconnectcards">
        <Card.Title>100+ Verified Users</Card.Title>
      
      <Card.Body>
    <ul>
        <li >
        <Figure className='d-flex align-items-center'>
      <Figure.Image
        className='connected-images'
        alt="171x180"
        src="./images/theresa.png"
      />
      <Figure.Caption className='ps-3'>
        <h3>Theresa Webb</h3>
        <p>Mentor of Web Design</p>
      </Figure.Caption>
    </Figure>
        </li>
        <li >
        <Figure className='d-flex align-items-center'>
      <Figure.Image
        className='connected-images'
        alt="171x180"
        src="./images/albert.png"
      />
      <Figure.Caption className='ps-3'>
        <h3>Albert Flores</h3>
        <p>Mentor of Web Design</p>
      </Figure.Caption>
    </Figure>
        </li>
        <li >
        <Figure className='d-flex align-items-center'>
      <Figure.Image
        className='connected-images'
        alt="171x180"
        src="./images/robort.png"
      />
      <Figure.Caption className='ps-3'>
        <h3>Robert Fox</h3>
        <p>Mentor of UI/UX</p>
      </Figure.Caption>
    </Figure>
        </li>

    </ul>
    <Card.Link href="#">See More <img src='./icons/arrow.svg' className='ps-5'/></Card.Link>

      </Card.Body>
      <img src="/icons/rightmark.svg" className='rightmark' alt="rightmark"/>
   
        </Card>
        <Card className="connectcard d-flex align-items-center">
          
        <Card.Img src="./images/james.png" className='james-image' />
       
      <Card.Body className='text-center'>
        <Card.Title className="james-title">James Michael Tyler</Card.Title>
        <Card.Text>
        Full Stack Developer
        </Card.Text>
        <Button variant="primary" className="connect-button">CONNECT</Button>
      </Card.Body>

   
        </Card>

        </div>
       
    </Col>
  )
}

export default GetConnectedCards