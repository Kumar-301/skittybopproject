import React from 'react'
import Container from 'react-bootstrap/Container';
import "./footer.scss";
import Copyright from './Copyright';
import Row from 'react-bootstrap/Row';

import FooterSection from './FooterSection';
import Newsletter from './Newsletter';
function Footer() {
  return (
      <footer>
        <Container>
          <Row>

         
        <FooterSection/>
   
      
      <Newsletter/>
      </Row>
      <hr/>
      <Copyright/> 
       </Container>
    </footer>
  )
}

export default Footer;