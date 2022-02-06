// No JSX here, just to return the childern
// This is to avoid "<div> soup"
// Find it being used in AddUser

const Wrapper = props => {
    return props.children;
};

export default Wrapper;