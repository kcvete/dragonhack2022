import { useState, useEffect } from 'react';

import Login from './components/Login';
import firebase from './services/firebase';

import './App.css';
import Main from './layouts/main';



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  console.log(user);

  return (
    <div className="app">
      {user ? <Main user={user} /> : <Login />}
    </div>
  );
}

export default App;