import React from "react";
import ReactDOM from "react-dom";

// Reusable building blocks <3
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

// Here we will use a React Portal!
// First step is to set it up in index.html
// We need to so this for the error modal to make the code more semantic and meaningfull particularly for accessibility!
// Also in the case of larger application, where it could become deeply nested otherwise

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        {/* we can use onClick here because our custom button component forwards whatever we passed to the native onClick prop */}
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  // the content of the modal is dynamic for resuability
  // Take note of the structure
  return (
    <React.Fragment>
      {/* This div below is for the backdrop, you can write div as self-closing here */}
      {/* Also look at the styles we're using in css for the backdrop! */}
      {/* <div className={classes.backdrop} onClick={props.onConfirm} /> */}
      {/* backdrop div was moved above */}

      {/* <Card /> was cut from here and pasted in the new component above */}

      {/* Pay attention to how we are forwardingt he props! we're for them in side the componenets, for example we're looking for props.onConfirm inside of the Backdrop component */}
      {/* We are forwarding the function we're getting on the onConfirm prop to the onClick prop in the Backdrop component */}

      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
