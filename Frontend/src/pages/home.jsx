import React from "react";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { row1, row2, row3, row4, ListAnswer1, ListAnswer2 } from "../faqData";
import '../css/home.css';

function Home() {
  const navigate = useNavigate();

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
                <Col lg={4} key={i} >
                  <Accordion>
                    <div className="item">
                      <Accordion.Item eventKey={i} ></Accordion.Item>
                      <Accordion.Header className="itemHeader">{item.question}</Accordion.Header>
                      <Accordion.Body className={i === 1 ? "boldAnswer1" : ""}>
                        {
                          i === 0 ?
                            <ListAnswer1 /> :
                            item.answer
                        }
                      </Accordion.Body>
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
                <Col lg={4} key={i + 100}>
                  <Accordion >
                    <div className="item">
                      <Accordion.Item eventKey={i} ></Accordion.Item>
                      <Accordion.Header bsPrefix="itemHeader">{item.question}</Accordion.Header>
                      <Accordion.Body>
                        {
                          i === 2 ?
                          <ListAnswer2 /> :
                          item.answer
                        }
                      </Accordion.Body>
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
                <Col lg={4} key={i + 200}>
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
                <Col lg={4} key={i + 300}>
                  <Accordion>
                    <div className="item">
                      <Accordion.Item eventKey={i} ></Accordion.Item>
                      <Accordion.Header>{item.question}</Accordion.Header>
                      <Accordion.Body>
                        {
                          i < 1 || 1 < i ?
                            <p>
                              {item.answer[0]}
                              <br />
                              <a target="_blank" href={item.answer[1]}>{item.answer[1]}</a>
                            </p> :
                            <p>{item.answer}</p>
                        }
                      </Accordion.Body>
                    </div>
                  </Accordion>
                </Col>
              )
            })
          }
        </Row>
      </Container>
      <Container className="buttonContainer m-5">
        <button onClick={() => (navigate("/help#"))} className="helpBtn">Get Help</button>
      </Container>
    </Container>
  );
};

export default Home;