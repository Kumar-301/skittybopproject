import React from 'react'

import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

function FooterSection() {
  return (
  
   <>
    <Col lg={4}>
    <img src="./images/footerlogo.png" alt="footerlogo"/>
    <p className='footer-text'>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    
   
 <div className='d-flex mb-0'>
          <Figure className="d-flex align-items-center skitty-info">
      <Figure.Image className="footer-icons"
       
        alt="171x180"
        src="./icons/contact.svg"
      />
      <Figure.Caption className='ps-3'>
      <p className='footer-icon-text mb-0'>Have a question</p>
            <a href="tel:310-437-2766" className='contact-details'>310-437-2766</a>
      </Figure.Caption>
    </Figure>
    <Figure className="d-flex align-items-center">
      <Figure.Image className="footer-icons"
       
        alt="171x180"
        src="./icons/mailbox.svg"
      />
      <Figure.Caption className='ps-3'>
      <p className='footer-icon-text mb-0'>Contact us at</p>
      <a href="mailto:m.bluth@example.com" className='contact-details'>unreal@outlook.com</a>
            
      </Figure.Caption>
    </Figure>
    </div>
        </Col>
           <Col lg={4}></Col>
           </>
 
  )
}

export default FooterSection