import React from "react";
import { Button } from "react-bootstrap";
import "./btn.scss";

export default function SecondaryBtn(props) {
  return (
    <>
      <Button variant={props.variant}>{props.btnValue}</Button>
    </>
  );
}
