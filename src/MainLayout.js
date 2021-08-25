import React, { Component } from 'react'
import Router from './Router'


export default class MainLayout extends Component  {
    render =()=> {
        return (
            <div className="wrapper">
            
                <Router>
                       </Router>       
             
            </div>
        )
    }
}

