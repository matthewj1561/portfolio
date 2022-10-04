import { useRef } from "react";
import classes from "./Edu.module.css";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

function Edu() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Education</h2>
            <hr />
          </div>
          <div className="row">
            <div className="col-lg-7">
              <p>Brigham Young University - Idaho</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <p>
                Bachelors in Software Engineering - Web Development Emphasis
              </p>
            </div>
            <div className="col-lg-5">
              <h6>Sept 2020 - July 2023</h6>
            </div>
          </div>
        </div>
      </div>

      <Tab.Container defaultActiveKey="#link1">
        <Row>
          <Col sm={6}>
            <ListGroup>
              <ListGroup.Item variant="dark" action href="#link1">
                Data Structures
              </ListGroup.Item>
              <ListGroup.Item variant="dark" action href="#link2">
                Object Oriented Programming
              </ListGroup.Item>
              <ListGroup.Item variant="dark" action href="#link3">
                Database Design and Dev
              </ListGroup.Item>
              <ListGroup.Item variant="dark" action href="#link4">
                Algorithm Design
              </ListGroup.Item>
              <ListGroup.Item variant="dark" action href="#link5">
                Front End Classes
              </ListGroup.Item>
              <ListGroup.Item variant="dark" action href="#link6">
                Back End Classes
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={6}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <div className="text-white">
                  A class in which I learned to understand and utilize basic
                  data structures. Python was the language of choice. The course
                  covered:
                  <ul>
                    <li>Arrays</li>
                    <li>Binary Trees</li>
                    <li>Queues</li>
                    <li>Stacks</li>
                    <li>Hashmaps</li>
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <div className="text-white">
                  A class in which I was introduced to classes and OOP concepts.
                  I was taught the four pillars of OOP. I created a 2d arcade
                  game with a small team for the end of course project.
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <div className="text-white">
                  A class in which I learned to design MySQL relational
                  databases in MySQL Workbench. I also gained further experience
                  in the MySQL language.
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <div className="text-white">
                  A class that taught me Big "O" notation, algorithmic
                  efficiency, and the value of writing quality code. We
                  programmed in Python.
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                <div className="text-white">
                  I've taken two fronted classes for web development. These
                  classes began with requiring students to create static
                  websites that scale well and adhere to basic web guidlines.
                  The second focused on dynamic, data-driven websites that grew
                  automatically.
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="#link6">
                <div className="text-white">
                  I've taken two backend courses in which I learned how to
                  store, create, and modify data through web apps. The first
                  course used PHP to simply teach basic concepts. The second
                  course used node, express, and mongodb to create a working
                  RESTful API.
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default Edu;
