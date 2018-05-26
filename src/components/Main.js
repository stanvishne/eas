import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './common/About';
import Report1 from './reports/Report1';
const Main = () => (
    <main className="eas-main">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/report1" component={Report1} />
        </Switch>
    </main>
);

export default Main;
