import React from "react";
import "../../scss/__helpers.scss";

export default function Heading2(props) {
  return <h4 className={`${props.className}`}>{props.heading4Title}</h4>;
}
