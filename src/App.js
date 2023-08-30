import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact={true}>
            <Dashboard></Dashboard>
          </Route> 
          <Route path="/login">
            <Login></Login>
          </Route> 
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
