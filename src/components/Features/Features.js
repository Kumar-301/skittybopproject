import React from 'react'
import FeatureCards from './FeatureCards'
import FeatureContent from './FeatureContent'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './feature.scss'
function Features() {
  return (
    <Container>
      <Row className="feature-section">
    <FeatureContent/>
    <FeatureCards/>
    </Row>
    </Container>
   
  )
}

export default Features;