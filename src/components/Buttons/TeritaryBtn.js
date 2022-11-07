import React from 'react'
import { Button } from "react-bootstrap";
import "./btn.scss";
function TeritaryBtn(props) {
  return (
    <Button variant="success">{props.btnValue}</Button>
  )
  }

export default TeritaryBtn;