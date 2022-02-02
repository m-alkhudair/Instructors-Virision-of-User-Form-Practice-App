import React from "react";

import Card from "../UI/Card";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    // preventdefault to prevent the behavior for this type of event, in this case that a request would be sent.
    event.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        {/* For accessibility add the "for" and "id" attributes to the lable and input respectfully, helps people with screen readers. but take note of how we write the for attribute, because for is a reserved js word and we're using JSX. This is how we connect the label to the input */}
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
