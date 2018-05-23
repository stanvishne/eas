import React from 'react';
import { Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Container from './components/container';

export default () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={Container} />
            </div>
        </Router>
    );
};
