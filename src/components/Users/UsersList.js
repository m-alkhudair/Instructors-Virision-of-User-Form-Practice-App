import React from "react";

import classes from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    //   The className attribute that we specified earlier in Card.js, now we're using it everytime we write a Card component
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} Years Old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
