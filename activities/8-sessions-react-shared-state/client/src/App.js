import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Logout from './pages/Logout';
import {useAuth} from './utils/customHooks';

function App() {

  const [, setUser] = useAuth();

  const runOnce = true;
  useEffect(() => {
        axios
        .get("/api/sessions/start", {
          withCredentials: true
        })
        .then(resp => {
          if (resp.data.isLoggedIn) {
            setUser({ isLoggedIn: true });
          } else {
            setUser({ isLoggedIn: false });
          }
        })
        .catch(err => {
          console.log(err);
        });
  }, 
  // By passing an empty array of dependencies as the second parameter, this ensures that `useEffect` only runs once
  [runOnce]); 
  

  return (
    <Router>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Homepage} />
          <Route path="/dashboard" exact={true} component={Dashboard} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/logout" exact={true} component={Logout} />
        </Switch>
    </Router>
  );
}

export default App;
