import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Goals from './components/Goals'
import Timeline from './components/Timeline'

import App from './App';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ App } />
                    <Route exact path='/goals' component={ Goals } />
                    <Route exact path='/timeline' component={ Timeline } />
                    <Redirect from='*' to='/' />
                </Switch>
            </BrowserRouter>
        );
    }
};

export default Router;
