import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  // Currenty set to "undefined" a falsy value
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    // preventdefault to prevent the behavior for this type of event, in this case that a request would be sent.
    event.preventDefault();

    // Form Validation
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name or age (non-empty values).",
      });
      // the return will hault the execution
      return;
    }
    // the plus sign is to force conversion to number because enteredAge is a string
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0).",
      });
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

  // To rest the error to a falsy value (null or undefined..etc)
  const errorHandler = () => {
    setError(null);
  };

  return (
    // Take Note of the className attribute, since this is a custom component, it can't use the real className attribut we normally use with built-in html elements. In this case it will work as props
    // So the next step is to go back to the Card.js component and make sure to accept the incoming className prop
    <Wrapper>
      {/* if 'error' is truthy (i.e has a value rather than undefined or null) it will render */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </Wrapper>
  );
};

export default AddUser;
