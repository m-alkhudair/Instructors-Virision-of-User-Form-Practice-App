import React from "react";

const Card = (props) => {
  // Take note of the special children prop!. this is to make components that wrap other components "children"
  return <div>{props.children}</div>;
};

export default Card;
