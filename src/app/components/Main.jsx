import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store';
import {ConnectedDashboard}  from './Dashboards';
import {Router, Route} from 'react-router-dom';
import {history} from '../store/history';
import {ConnectedNavigation} from './Navigation';
import {ConnectedTaskDetail} from './TaskDetails';
import { ConnectedTaskList } from './TaskList';
export const Main = () => (
    <Router history={history}>
        <Provider store = {store}>
            <div>
                <ConnectedNavigation/> 
                <Route 
                    exact 
                    path="/dashboard" 
                    render={()=> (<ConnectedDashboard/>)}>
                </Route>
                <Route
                    exact
                    path="/Task/:id"
                    render={({match})=>(<ConnectedTaskDetail match={match}/>)}
                >
                </Route>   
                
            </div>
        </Provider>
    </Router>
)