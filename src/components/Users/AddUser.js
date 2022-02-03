import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const addUserHandler = (event) => {
    // preventdefault to prevent the behavior for this type of event, in this case that a request would be sent.
    event.preventDefault();
  };

  return (
    // Take Note of the className attribute, since this is a custom component, it can't use the real className attribut we normally use with built-in html elements. In this case it will work as props
    // So the next step is to go back to the Card.js component and make sure to accept the incoming className prop
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        {/* For accessibility add the "for" and "id" attributes to the lable and input respectfully, helps people with screen readers. but take note of how we write the for attribute, because for is a reserved js word and we're using JSX. This is how we connect the label to the input */}
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number"></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
