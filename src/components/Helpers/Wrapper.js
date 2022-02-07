// No JSX here, just to return the childern
// This is to avoid "<div> soup"
// Find it being used in AddUser

const Wrapper = props => {
    return props.children;
};

export default Wrapper;

// Later in the course we were introduced to built in react wrappers called "fragments"
// in some build configuration like this one we could also use empty tags <> JSX </>, but doesnt always work.
// We are using React.Fragment in App.js