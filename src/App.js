import React, { useState, Fragment } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  // Lifting the sate up (above the two components we're working with)
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    // When state update depends on a previous state, we have to use a function inside the setting function 
    setUsersList(prevUsersList => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}]
    })
  }

  return (
    // we added Fragment directly as a name import, prev was React.Fragment
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </Fragment>
  );
}

export default App;
