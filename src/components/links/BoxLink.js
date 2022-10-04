import { Link } from "react-router-dom";
import classes from "./BoxLink.module.css";

function RotateLink(props) {
  return (
    <Link to={props.location}>
      <button className={classes.glowOnHover} type="button">
        {props.text}
      </button>
    </Link>
  );
}

export default RotateLink;
