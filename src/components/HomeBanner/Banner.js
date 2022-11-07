
import Container from 'react-bootstrap/Container';

import React from 'react'
import "../../scss/__helpers.scss";
import Carousel from 'react-bootstrap/Carousel';
import './banner.scss';
import Heading1 from '../Headings/Heading1';
import SecondaryBtn from '../Buttons/SecondaryBtn';
function Banner() {
  return (
   
    <Container>
    <Carousel>
      <Carousel.Item>
        <div className='d-flex'>
        <div  className="align-self-center">
          <Heading1 heading4Title="Cutting Edge Livestreaming Video" className="banner-heading"/>
          <p className="banner-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore incididunt ut labore.</p>
          <SecondaryBtn btnValue="Join Free Now" variant="primary"/>
        </div>
        <img
          className=""
          src="./images/collageImage.png"
          alt="First slide"
        />
        
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex'>
      
        <div  className="align-self-center">
          <Heading1 heading4Title="Cutting Edge Livestreaming Video" className="banner-heading"/>
          <p className="banner-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore incididunt ut labore.</p>
            <SecondaryBtn btnValue="Join Free Now" variant="primary"/>
        </div>
        <img
         className=""
         src="./images/collageImage.png"
          alt="First slide"
        />
        
      
</div>
       
      </Carousel.Item>
      <Carousel.Item >
      <div className='d-flex'>
        <div  className="align-self-center">
            <Heading1 heading4Title="Cutting Edge Livestreaming Video" className="banner-heading"/>
          
          <p className="banner-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore incididunt ut labore.</p>
          <SecondaryBtn btnValue="Join Free Now" variant="primary"/>
        </div>
        <img
          className=""
          src="./images/collageImage.png"
          alt="First slide"
        />
        
        </div>
      
        

       
      </Carousel.Item>
    </Carousel>
  
  </Container>





    
    
   
  );
}

export default Banner;
