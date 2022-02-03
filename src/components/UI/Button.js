import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
    // PAY ATTEMTION to the button attributes! we want to set the button type dynamically so we can easily reuse it anywhere, but we also want a fallback.
    // also note that the props names are the same as the default html attribute name, this is not a must but it's nice convension to make work more like the built in elements.
    // This is HOW you make a UI button that is reusable <3
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
        {props.children}
    </button>
  );
};

export default Button;
