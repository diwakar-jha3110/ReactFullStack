import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../app/components/Dashboards'
import {Main} from '../app/components/Main';
import {store} from './store';
 //console.log(store.getState());

 ReactDOM.render(
     <Main/>,
     document.getElementById('app')
 );
 
 
