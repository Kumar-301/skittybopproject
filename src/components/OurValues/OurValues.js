import React from "react";
import { Col, Container, Row } from "react-bootstrap";
//import Circle from "../CircleAbsolute/Circle";
import Heading2 from "../Headings/Heading2";
import OurValuesAccordion from "./OurValuesAccordion";
import OurValuesImg from "./OurValuesImg";
import Heading4 from '../Headings/Heading4';
import Heading1 from '../Headings/Heading4';
import "./ourvalues.scss";
export default function OurValues() {
  return (
    <section>
      <Container fluid className="p-0">
        <Row className="g-0 our-values-section">
          <Col md="6">
            <OurValuesImg />
          </Col>
          <Col md="6" className="value-right-container">
          <Heading4 className="features" heading4Title="OUR VALUES"/>
          <Heading1 className="features-mainheading" heading4Title="The Value we Instill in our Product" />
          
            <OurValuesAccordion />
          </Col>
        </Row>
      </Container>
      {/* <Circle /> */}
    </section>
  );
}
