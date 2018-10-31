import React from 'react';
import { BroswerRouter, Route } from 'react-router-dom';
import Landing from '../landing/landing';
import Dashboard from '../dashboard/dashboard';
import AuthRedirect from '../auth-redirect/auth-redirect';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path='*' Component={}/>
            <Route path='/' Component={}/>
            <Route path='/signup' Component={}/>
            <Route path='/login' Component={}/>
            <Route path='/dashboard' Component={}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;