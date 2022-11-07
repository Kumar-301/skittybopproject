import React from "react";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import SecondaryBtn from "../Buttons/SecondaryBtn";
import Logo from "./Logo";
import "./navbar.scss";

function navbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="d-flex justify-content-between align-items-center">
        <Logo />
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 d-flex align-items-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Who are we</Nav.Link>
            <Nav.Link href="#action2">Skittybop</Nav.Link>
            <Nav.Link href="#action3">Blogs</Nav.Link>
            <Nav.Link href="#action4">Developer</Nav.Link>
            <Nav.Link href="#action5">Pricing</Nav.Link>
            <SecondaryBtn btnValue="Talk to an expert" variant="secondary"/>
            <PrimaryBtn btnValue="Sign In" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;
