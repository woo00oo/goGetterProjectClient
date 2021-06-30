import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';

const Main = loadable(() => import('@pages/Main'));
const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const SignUp2 = loadable(() => import('@pages/SignUp/SignUp2'));
const MyBookRecord = loadable(() => import('@pages/MyBookRecord'));
const BRWrite = loadable(() => import('@pages/MyBookRecord/BRWrite'));
const BRContent = loadable(() => import('@pages/MyBookRecord/BRContent'));
const Discussion = loadable(() => import('@pages/Discussion'));
const DCContent = loadable(() => import('@pages/Discussion/DCContent'));
const DCWrite = loadable(() => import('@pages/Discussion/DCWrite'));
const MyPageProfile = loadable(() => import('@pages/MyPage/Profile'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/main" />
      <Route path="/main" component={Main} />
      <Route path="/login" component={LogIn} />
      <Route path="/mybookrecord/content" component={BRContent} />
      <Route path="/mybookrecord/write" component={BRWrite} />
      <Route path="/mybookrecord" component={MyBookRecord} />
      <Route path="/discussion/write" component={DCWrite} />
      <Route path="/discussion/content/:id" component={DCContent} />
      <Route path="/discussion" component={Discussion} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signup2" component={SignUp2} />
      <Route path="/mypage/profile" component={MyPageProfile} />
    </Switch>
  );
};

export default App;
