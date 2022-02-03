import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    // preventdefault to prevent the behavior for this type of event, in this case that a request would be sent.
    event.preventDefault();

    // Form Validation
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    // the plus sign is to force conversion to number because enteredAge is a string
    if (+enteredAge < 1) {
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);

    // for resetting; but in order for this to work we have to two-way bind, using the value attribute in the input tags
    setEnteredUsername("");
    setEnteredAge("");
  };

  // To record each key stroke!
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    // Take Note of the className attribute, since this is a custom component, it can't use the real className attribut we normally use with built-in html elements. In this case it will work as props
    // So the next step is to go back to the Card.js component and make sure to accept the incoming className prop
    <div>
      <ErrorModal title="An error occured!" message="Something went wrong" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          {/* For accessibility add the "for" and "id" attributes to the lable and input respectfully, helps people with screen readers. but take note of how we write the for attribute, because for is a reserved js word and we're using JSX. This is how we connect the label to the input */}
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
