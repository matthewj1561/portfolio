import { Link } from "react-router-dom";
import classes from "./BoxLink.module.css";

function RotateLink(props) {
  const spanClasses = "square individual";
  const aClasses = "ninth before after";
  return (
    <Link to={props.location}>
      <div className={classes.wrapper}>
        <span className={`${classes.square} ${classes.individual}`}>
          <a
            className={`${classes.ninth} ${classes.before} ${classes.after}`}
            href="#"
          >
            {props.text}
          </a>
        </span>
      </div>
    </Link>
  );
}

export default RotateLink;
