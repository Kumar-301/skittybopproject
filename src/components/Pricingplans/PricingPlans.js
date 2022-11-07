import React from 'react'
import Container from 'react-bootstrap/Container';
import SecondaryBtn from '../Buttons/SecondaryBtn';
import Heading1 from '../Headings/Heading1';
import './pricingplans.scss';
function PricingPlans() {
  return (
    <Container>
        <div className='pricing-section'>
          <img src='./images/abstractlines.png' className='pricebg'/>
            <Heading1 heading4Title="For more details you can check our Pricing Plans" className="price-heading"/>
            <SecondaryBtn btnValue="View Pricing Plans" variant="secondary"/>
           <img src="./images/women.png" className='pricesection-women' alt="priceImg"/>  
        </div>
    </Container>
  )
}

export default PricingPlans;