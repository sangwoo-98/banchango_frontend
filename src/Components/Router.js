import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Main from '../Routes/Main';
import Login from '../Routes/Login';

const RouterComponent = () => (
    <Router>
        <>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Redirect path="*" to="/" />
            </Switch>
        </>
    </Router>
);

export default RouterComponent;