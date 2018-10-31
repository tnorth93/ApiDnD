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
            <Route path='*' Component={AuthRedirect}/>
            <Route path='/' Component={Landing}/>
            <Route path='/signup' Component={Landing}/>
            <Route path='/login' Component={Landing}/>
            <Route path='/dashboard' Component={Dashboard}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;