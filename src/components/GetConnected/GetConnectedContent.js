import React from 'react'
import Col from 'react-bootstrap/Col';
import Heading4 from '../Headings/Heading4';
import Heading1 from '../Headings/Heading1';
function GetConnectedContent() {
  return (
    <Col lg={6} className="d-flex align-items-center">
        <div className="getconnect-content">
        <Heading4 className="aboutus" heading4Title="ABOUT US"/>
        <Heading1 className="connect-mainheading" heading4Title="Get Connected" />
        <p className='connect-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus .</p>
        <hr/>
        <ul >
            <li className='d-flex mb-3'>
                <img src="./images/checkmark.png" className='connect-check' alt="checkmark"/>
                <p className='align-self-center ms-2 connect-info'>Lorem ipsum dolor sit amet</p>
            </li>
            <li className='d-flex mb-3'>
                <img src="./images/checkmark.png" className='connect-check' alt="checkmark"/>
                <p className='align-self-center ms-2 connect-info'>Lorem ipsum dolor sit amet</p>
            </li>
            <li className='d-flex'>
                <img src="./images/checkmark.png" className='connect-check'alt="checkmark"/>
                <p className='align-self-center ms-2 connect-info'>Lorem ipsum dolor sit amet</p>
            </li>
        </ul>
        </div>
       
    </Col>
  )
}

export default GetConnectedContent