import React from "react";
import { Accordion } from "react-bootstrap";
import "./ourvalues.scss";

export default function OurValuesAccordion() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <span>High Quality Video & Audio Calling</span>
        </Accordion.Header>
        <Accordion.Body>
          Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat aute irure dolor
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <span>Nested Timelines</span>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <span>Adjustment Tracks</span>
        </Accordion.Header>
        <Accordion.Body>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
