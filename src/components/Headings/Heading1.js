import React from 'react'
import "../../scss/__helpers.scss";
function Heading1(props) {
  return (
   <h1 className={`${props.className}`}>{props.heading4Title}</h1>
  )
}

export default Heading1