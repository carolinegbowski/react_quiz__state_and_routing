import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import ListAdd from './ListAdd';

function Router() {
    return(
        <div>
            <Route path='/home' component={Home}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/listAdd' component={ListAdd}/>
        </div>
    )
}

export default Router;