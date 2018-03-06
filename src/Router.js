import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Goals from './components/Goals'
import Timeline from './components/Timeline'
import Login from './components/Login'
import Leaderboard from './components/Leaderboard'
import Consequences from './components/Consequences'

import App from './App';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ App } />
                    <Route exact path='/login' component={ Login } />
                    <Route exact path='/goals' component={ Goals } />
                    <Route exact path='/timeline' component={ Timeline } />
                    <Route exact path='/leaderboard' component={ Leaderboard } />
                    <Route exact path='/consequences' component={ Consequences } />
                    <Redirect from='*' to='/login' />
                </Switch>
            </BrowserRouter>
        );
    }
};

export default Router;
