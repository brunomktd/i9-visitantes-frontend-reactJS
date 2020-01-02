import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Report from './pages/Report';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/reports" exact component={Report} />
    </Switch>
  );
}
