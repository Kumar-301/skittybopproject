import React from 'react'
//import './footer.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Copyright() {
  return (
   
      <Row className='copyright-section'>
        <Col lg={6} className="d-flex justify-content-between home-details">
            <a href="#about">About us</a>
            <a href="#How it Works">How it Works</a>
            <a href="#Privacy policy">Privacy policy</a>
            <a href="#Contact Us">Contact Us</a>
            <a href="#Terms of Use">Terms of Use</a>
        </Col>
        <Col lg={3}></Col>
        <Col lg={3} className="d-flex justify-content-end">
            <p className='home-details'>&copy; 2000-2021, All Rights Reserved</p>
        </Col>
      </Row>

  
  )
}

export default Copyright