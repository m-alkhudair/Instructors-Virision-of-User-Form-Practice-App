import React from "react";

// Reusable building blocks <3
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  // the content of the modal is dynamic for resuability
  // Take note of the structure
  return (
    <div>
      {/* This div below is for the backdrop, you can write div as self-closing here */}
      {/* Also look at the styles we're using in css for the backdrop! */}
      <div className={classes.backdrop} />

      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
