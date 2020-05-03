import React from 'react'
import {connect} from 'react-redux';
import {ConnectedTaskList} from './TaskList';
export const Dashboard = ({groups}) => (
        <div>
       
       <div>
           
           {groups.map(group => (
               <ConnectedTaskList name={group.name} id= {group.id} key={group.id}/>          
           ))}
        </div>
        </div>
   
);

function mapStatesToProps(state) {
    return {
        groups: state.groups
    }

}
export const ConnectedDashboard = connect(mapStatesToProps)(Dashboard);
