import { Container, Row, Col } from "react-bootstrap";
import classes from "./BioBody.module.css";
import RotateLink from "../links/BoxLink";
import Gallery from "./gallery/Gallery";

function BioBody() {
  return (
    <div>
      <RotateLink text="Home" location="/" />
      <Container>
        <Row>
          <Col>
            <h1>My Story</h1>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col xl={6}>
            <div className={classes.paragraphs}>
              <p>
                I was born on July 4th, 2002 in the rual community of Herald,
                California. I spent my early childhood in California, but moved
                to Wells, Nevada at the age of 8.
              </p>
              <p>
                Throughout highschool, I developed a love for music, and was
                part of the Nevada AllState choir for 2 consecutive years. I
                play the piano and saxaphone to this day.
              </p>
              <p>
                I was able to play varsity basketball all four years of High
                School, and adore every aspect of the sport.
              </p>
              <p>
                I've loved technology my entire life, but was only able to take
                one computer science course in High School (They only offered
                one). I loved that class, and knew immediately it was what I
                wanted to pursue in college.
              </p>
              <p>
                I recieved my High School Diploma from Wells High School, and
                started schooling at BYU - Idaho the following spring.
              </p>
              <p>
                I've been attending BYU - Idaho for 2 consecutive years now.
                I've been able to attend all three semesters each year, and have
                thus reached my senior semesters earlier than a traditional 4
                year degree.
              </p>
              <p>
                I was recently married to my beautiful wife Tarin, and we are
                enjoying every second of our married life.
              </p>
              <p>
                I am currently seeking internships starting in the winter or
                summer of 2023. I've dabbled in mobile development, embedded
                systems, and desketop development. Despite this, I find that Web
                Development is where I find the most fulfillment.
              </p>
            </div>
          </Col>
          <Col xl={6}>
            <Gallery />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BioBody;
