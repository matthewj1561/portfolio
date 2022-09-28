import personalShot from "../../images/Pro_pic_edited.jpg";
import classes from "./HomeBody.module.css";
import Greeting from "./Greeting";
import RotateLink from "../links/BoxLink.js";

function Body() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <Greeting />
          <div className="row m-5">
            <div className="col-sm-6">
              <RotateLink text="About" location="/aboutMe" />
            </div>
            <div className="col-sm-6">
              <RotateLink text="Contact" location="/contact" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            className={classes.proShot}
            src={personalShot}
            alt="A picture of Matthew James"
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
