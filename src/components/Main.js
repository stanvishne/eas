import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './common/About';

const Main = () => (
    <main className="eas-main">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </Switch>
    </main>
);

export default Main;
