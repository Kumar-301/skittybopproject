import React from "react";
import { Button } from "react-bootstrap";
import "./btn.scss";

export default function PrimaryBtn(props) {
  return (
    <>
      <Button variant="primary">{props.btnValue}</Button>
    </>
  );
}
