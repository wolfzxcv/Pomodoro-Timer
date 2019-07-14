import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Loading from './Loading';

const Analytics = lazy(() => import('../components/Analytics/Analytics'));
const AppBar = lazy(() => import('../components/AppBar/AppBar'));
const Ringtones = lazy(() => import('../components/Ringtones/Ringtones'));
const ToDoList = lazy(() => import('../components/ToDoList/ToDoList'));

const Routes = () => (
  <Suspense fallback={<Loading />}>
    <Router>
      <Box width='48vw' height='100vh' display='flex' flexDirection='column'>
        <AppBar />
        <Switch>
          <Route exact path='/' component={ToDoList} />
          <Route path='/analytics' component={Analytics} />
          <Route path='/ringtones' component={Ringtones} />
        </Switch>
      </Box>
    </Router>
  </Suspense>
);

export default Routes;
