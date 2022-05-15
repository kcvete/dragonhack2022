import { useState, useEffect } from 'react';

import Login from './components/Login';
import firebase from './services/firebase';

import './App.css';
import Main from './layouts/main';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
    </div>
  );
}

export default App;