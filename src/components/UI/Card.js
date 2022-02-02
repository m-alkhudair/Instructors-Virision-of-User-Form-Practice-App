import React from "react";

import classes from './Card.module.css';

const Card = (props) => {
  // Take note of the special children prop!. this is to make components that wrap other components "children"
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
    // Take note of props.className! this came from the AddUser.js in the written <Card> component.
};

export default Card;
