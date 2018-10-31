import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../landing/landing';
import Dashboard from '../dashboard/dashboard';
import AuthRedirect from '../auth-redirect';

class App extends React.Component {
  render() {
    console.log('iamhere');
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path='*' Component={AuthRedirect}/>
            <Route exact path='/' Component={Landing}/>
            <Route exact path='/signup' Component={Landing}/>
            <Route exact path='/login' Component={Landing}/>
            <Route exact path='/dashboard' Component={Dashboard}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;