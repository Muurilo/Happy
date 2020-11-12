import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateOrphanage from './pages/CreateOrphanage';
import Landing from './pages/Landing';
import Done from './pages/Done';
import Login from './pages/Login';
import Orphanage from './pages/Orphanage';
import OrphanagesMap from './pages/OrphanagesMap';
import RecoverPassword from './pages/RecoverPassword';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/done" component={Done} />
        <Route path="/orphanages/:id" component={Orphanage} />
        <Route path="/login" component={Login} />
        <Route path="/recover" component={RecoverPassword} />
      </Switch>
    </BrowserRouter>
  );
}
