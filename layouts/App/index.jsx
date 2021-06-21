import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';

const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const SignUp2 = loadable(() => import('@pages/SignUp/SignUp2'));
const Discussion = loadable(() => import('@pages/Discussion'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/discussion" component={Discussion} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signup2" component={SignUp2} />
    </Switch>
  );
};

export default App;
