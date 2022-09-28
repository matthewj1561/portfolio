import DynamicText from "./quirks/DynamicText";

import classes from "./Greeting.module.css";

function Greeting() {
  return (
    <div className={classes.greetingContainer}>
      <p className={classes.greetingP}>Hi there! My name is</p>
      <h1>Matthew James</h1>
      <span className={classes.dynamicIntro}></span> <DynamicText />
    </div>
  );
}

export default Greeting;
