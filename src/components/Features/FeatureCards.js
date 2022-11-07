import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './Cards'

let cardData = [
  {
    imgPath:"./images/volumelevel.png",
    headingText:"Lorem Ipsum",
    paraText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
  },
  {
    imgPath:"./images/wrightmark.png",
    headingText:"Lorem Ipsum",
    paraText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
  },
  {
    imgPath:"./images/googlemeet.png",
    headingText:"Lorem Ipsum",
    paraText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
  },
  {
    imgPath:"./images/speaker.png",
    headingText:"Lorem Ipsum",
    paraText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
  },
]

function FeatureCards() {
  return (
    <Col lg={6} >
      <Row className=''>
        {cardData.map((data)=>
        <Cards headingText={data.headingText} paraText={data.paraText} imgPath={data.imgPath}/>
        )}
  </Row>
  </Col>
  
  )
}

export default FeatureCards