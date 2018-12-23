import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from "../App";

const Router = () => (
    <main>
        <Switch>
            <Route path='*' component={App}/>
            <Route exact path='/test' component={App}/>
            <Route exact path='/test/1' component={App}/>
            {/*<Route path='*' component={() => '404'}/>*/}
        </Switch>
    </main>
);

export default Router
