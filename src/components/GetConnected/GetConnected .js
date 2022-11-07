import React from 'react'
import { Container,Row } from 'react-bootstrap';
import './getconnected.scss';
import GetConnectedCards from '../GetConnected/GetConnectedCards';
import GetConnectedContent from '../GetConnected/GetConnectedContent';
function GetConnected () {
  return (
    <Container>
        <Row className='p-5 getconnectpart'>
        <GetConnectedCards/>
        <GetConnectedContent/>
        </Row>
   </Container>
  )
}

export default GetConnected;