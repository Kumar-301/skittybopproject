import React from 'react'
import Col from 'react-bootstrap/Col';
import NewsletterInput from '../Inputs/NewsletterInput';
import Heading4 from '../../components/Headings/Heading4';
import TeritaryBtn from '../Buttons/TeritaryBtn';
import Figure from 'react-bootstrap/Figure';
function Newsletter() {
  return (
    <Col lg={4}>
    <Heading4 heading4Title="Newsletter" className="footer-subtitle mt-0"/>
   
    <p className='footer-text'>Be the first one to know  about discounts, offers and events. Unsubscribe whenever you like.</p>
   
    <div className='d-flex footer-form align-items-center '>
   
    <Figure className='ps-3 pt-4'>
      <Figure.Image className="white-mailbox" alt="171x180" src="./icons/whitemailbox.svg"/>
     </Figure>

    <NewsletterInput className="newsletter-input"/>
  
    <TeritaryBtn btnValue="SUBMIT"/> 
    </div>
   
   
  
    <Figure className="d-flex justify-content-end">
    <ul className='d-flex icons-box'>
        <li><Figure.Image className="footer-social-icons" alt="171x180" src="./icons/facebook.svg"/></li>
        <li><Figure.Image className="footer-social-icons" alt="171x180" src="./icons/twitter.svg"/></li>
        <li><Figure.Image className="footer-social-icons" alt="171x180" src="./icons/instagram.svg"/></li>
        <li><Figure.Image className="footer-social-icons" alt="171x180" src="./icons/linkedin.svg"/></li>
    </ul>
      
      
    </Figure>

</Col>
  )
}

export default Newsletter