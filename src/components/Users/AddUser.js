import React, { useState, useRef } from "react";

// In this section we will use useRef! as an alternative to useStata
// Refs allow us to gain access to other DOM elements and work with them
// For this we will comment out evetything related to state (in the form inputs). because the instructor feels that there is some redundency ex updating the state with each keystroke, because we only need the data when we submit the form
// Refs are a bit simpler and are better if you just want to read the data
// Step one: set up the connection with html element using the ref attribute 
// Either sate or ref is good in this case.
// sate is generally for changing values
// Ref is generally for reading a logging values


// Controlled components Vs Uncontrolled components, this is usually more associated with form/input components
// If we access values with ref = uncontrolled component; because their internal sate/value is not controlled by react. relying on default behavior of element and we just fetch it and we get access to the native DOM
// If we're using sate = controlled component, controlling with react

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";

const AddUser = (props) => {

  // initialized to undefined
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // when the page loads there will be real DOM elements stored in the ref values above!

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");

  // Currenty set to "undefined" a falsy value
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    // preventdefault to prevent the behavior for this type of event, in this case that a request would be sent.
    event.preventDefault();

    // REFS!:
    console.log(nameInputRef); // check out the object in the console, The real DOM Node, it has a current prop that has data such as the value, 
    console.log(nameInputRef.current.value);

    // IMPORTANT NOTE FROM SECTION ABOUT REFS:
    // The variables in the conditionals are changed to use refs instead of state.
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    // Form Validation
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name or age (non-empty values).",
      });
      // the return will hault the execution
      return;
    }
    // the plus sign is to force conversion to number because enteredAge is a string
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge);

    // for resetting; but in order for this to work we have to two-way bind, using the value attribute in the input tags
    // setEnteredUsername("");
    // setEnteredAge("");

    // NEW RESETTING LOGIC; in this case we can manipulate the DOM but genrally discouraged to do so in most cases (w/o react) but this case it makes sense and is harmless. just resetting val.
    nameInputRef.current.value = '';
    ageInputRef.current.value= '';
  };

  // To record each key stroke!
  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

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
            // The 2 attribute below are related to state so we dont need anymore
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // The 2 attribute below are related to state so we dont need anymore
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
