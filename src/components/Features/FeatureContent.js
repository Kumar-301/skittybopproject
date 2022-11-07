import React from 'react'
import Heading4 from '../Headings/Heading4';
import Col from 'react-bootstrap/Col';
import Heading1 from '../Headings/Heading1';
function FeatureContent() {
  return (
  
    <Col lg={6} className="d-flex align-self-center">
      <div>
        <Heading4 className="features" heading4Title="OUR FEATURES"/>
        <Heading1 className="features-mainheading" heading4Title="Best &amp; Latest Features of Skittybop" />
        <p className='features-descrption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore incididunt ut labore.</p>
        </div>
    </Col>
   
   
  )
}

export default FeatureContent