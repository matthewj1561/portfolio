// import personalShot from "images/Pro_pic_edited.jpg";
import classes from "./HomeBody.module.css";
import Greeting from "./Greeting";
import RotateLink from "../links/BoxLink.js";

function Body() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-6">
          <Greeting />
          <div className={`${classes.links} row `}>
            <div className="col-sm-6">
              <RotateLink text="About" location="/aboutMe" />
            </div>
            <div className="col-sm-6">
              <RotateLink text="Contact" location="/contact" />
            </div>
            <div className="col-lg-12">
              <RotateLink text="Bio" location="/bio"></RotateLink>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            className={classes.proShot}
            src="/images/Pro_pic_edited.jpg"
            alt="A picture of Matthew James"
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
