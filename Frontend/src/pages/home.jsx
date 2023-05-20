import React from "react";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import { row1, row2, row3, row4 } from "../faqData";
import '../css/home.css';

//textmetrics
function Home() {

  return (
    <Container className='wrapper'>
      <Container className="imgContainer">
        <img className="img" src="/images/housing.png" />
      </Container>
      <Container className="accordion">
        <Row>
          {
            row1.map((item, i) => {
              return (
                <Col lg={4} >
                  <Accordion>
                    <div className="item">
                      <Accordion.Item eventKey={i} ></Accordion.Item>
                      <Accordion.Header className="itemHeader">{item.question}</Accordion.Header>
                      <Accordion.Body>{item.answer}</Accordion.Body>
                    </div>
                  </Accordion>
                </Col>
              )
            })
          }
        </Row>
        <Row>
          {
            row2.map((item, i) => {
              return (
                <Col lg={4}>
                  <Accordion >
                    <div className="item">
                      <Accordion.Item eventKey={i} ></Accordion.Item>
                      <Accordion.Header bsPrefix="itemHeader">{item.question}</Accordion.Header>
                      <Accordion.Body>{item.answer}</Accordion.Body>
                    </div>
                  </Accordion>
                </Col>
              )
            })
          }
        </Row>
        <Row>
          {
            row3.map((item, i) => {
              return (
                <Col lg={4}>
                  <Accordion>
                    <div className="item">
                      <Accordion.Item eventKey={i} ></Accordion.Item>
                      <Accordion.Header>{item.question}</Accordion.Header>
                      <Accordion.Body>{item.answer}</Accordion.Body>
                    </div>
                  </Accordion>
                </Col>
              )
            })
          }
        </Row>
        <Row>
          {
            row4.map((item, i) => {
              return (
                <Col lg={4}>
                  <Accordion>
                    <div className="item">
                      <Accordion.Item eventKey={i} ></Accordion.Item>
                      <Accordion.Header>{item.question}</Accordion.Header>
                      <Accordion.Body>{item.answer}</Accordion.Body>
                    </div>
                  </Accordion>
                </Col>
              )
            })
          }
        </Row>
      </Container>
      <Container className="buttonContainer mt-4">
        <Button variant="danger">Get Help</Button>
      </Container>
    </Container>
  );
};

export default Home;