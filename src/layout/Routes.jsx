import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Loading from './Loading';

const AppBar = lazy(() => import('../components/AppBar/AppBar'));
const Ringtone = lazy(() => import('../components/Ringtone/Ringtone'));
const ToDoList = lazy(() => import('../components/ToDoList/ToDoList'));

const Routes = () => (
  <Suspense fallback={<Loading />}>
    <Router>
      <Box width='57vw' height='100vh' display='flex' flexDirection='column'>
        <AppBar />
        <Switch>
          <Route exact path='/Pomodoro-Timer/' component={ToDoList} />
          <Route path='/Pomodoro-Timer/ringtone' component={Ringtone} />
        </Switch>
      </Box>
    </Router>
  </Suspense>
);

export default Routes;
