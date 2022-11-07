import React from 'react'
import Form from 'react-bootstrap/Form';
import './input.scss';
import InputGroup from 'react-bootstrap/InputGroup';
function NewsletterInput(props) {
  return (
/*     <InputGroup className={props.className}>
    <Form.Control 
      placeholder="Enter your mail"
     
    />
  </InputGroup > */
  <input placeholder="Enter your mail" className={props.className} type="email"/>
  )
}

export default NewsletterInput;