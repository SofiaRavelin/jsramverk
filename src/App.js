import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Me from './components/me';
import Reports from './reports/reports';
import One from './reports/week/1';
import Two from './reports/week/2';
import Forms from './components/forms';
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
                        <Route path="/reports" component={Reports} />
                            <Route path="/reports/week/1" component={One} />
                            <Route path="/reports/week/2" component={Two} />
                        <Route path="/forms" component={Forms} />
                            <Forms />
                        <Route component={Error} exact/>
                        </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
