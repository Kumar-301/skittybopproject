import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default function Logo() {
  return (
    <>
      <Navbar.Brand href="#home">
        <img src="./images/logo.png" alt="header-logo" />
      </Navbar.Brand>
    </>
  );
}
