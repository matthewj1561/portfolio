import classes from "./DynamicText.module.css";
import { useRef, useState, useEffect } from "react";

function DynamicText(props) {
  const [line, setLine] = useState("consoleUnderscore");
  const consoleRef = useRef();
  const textRef = useRef();

  // function([string1, string2],target id,[color1,color2])
  const words = ["Student", "Web Developer.", "RC Enthusiast", "Master Chef"];
  let colors = ["blue", "gold", "purple"];

  //   window.onload = function consoleText() {

  useEffect(() => {
    if (colors === undefined) colors = ["#fff"];
    var visible = true;
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = textRef.current;
    target.setAttribute("style", "color:" + colors[0]);
    window.setInterval(function () {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        window.setTimeout(function () {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute("style", "color:" + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);
    window.setInterval(function () {
      if (visible === true) {
        setLine(classes.consoleUnderscoreHidden);
        visible = false;
      } else {
        setLine(classes.consoleUnderscore);

        visible = true;
      }
    }, 500);
  }, []);
  //   };

  return (
    <div className={classes.consoleContainer}>
      <span className={classes.glow} id="text" ref={textRef}></span>

      <div className={line} id="console" ref={consoleRef}>
        &#95;
      </div>
    </div>
  );
}

export default DynamicText;
