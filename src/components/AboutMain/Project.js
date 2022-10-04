import classes from "./Project.module.css";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import RotateLink from "../links/BoxLink";
import { BsGithub, BsYoutube } from "react-icons/bs";

function Project(props) {
  const interval = Math.floor(Math.random() * 3000) + 2000;
  let youlink = null;
  if (props.youtubeLink) {
    youlink = (
      <a target="blank" href={props.youtubeLink}>
        <BsYoutube size={40} />
      </a>
    );
  }

  const skills = props.skills.map((skill) => {
    return (
      <Carousel.Item interval={interval}>
        <p className="btn btn-primary">{skill}</p>
      </Carousel.Item>
    );
  });

  return (
    <div className={`${classes.container} container`}>
      <div className="row">
        <div className="col-9">
          <h2 className={classes.title}>{props.title}</h2>
        </div>
        <div className={`${classes.links} col-3`}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <a className={classes.git} target="blank" href={props.gitLink}>
                  <BsGithub size={40} />
                </a>
              </div>
              <div className="col-md-6">{youlink}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <p className={classes.desc}>{props.description}</p>
        <Carousel indicators={false}>{skills}</Carousel>
      </div>
    </div>
  );
}

export default Project;
