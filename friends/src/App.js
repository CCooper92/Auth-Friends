import React from 'react';
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import FriendsList from './components/FriendsList'
import { axiosWithAuth } from './utils/axiosWithAuth';


function App() {
  const history = useHistory();
  
  const logout = () => {
    axiosWithAuth()
    .post('api/logout')
    .then(() => {
      localStorage.removeItem('token');
      history.push('/login')
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to='/protected'>Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path='/protected' component={FriendsList} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
