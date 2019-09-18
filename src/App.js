import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Me from './components/me';
import One from './reports/week/1';
import Error from './components/error';
import Navigation from './components/navigation';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Me} exact/>
                        <Route path="/reports/week/1" component={One}/>
                        <Route component={Error} exact/>
                        </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;