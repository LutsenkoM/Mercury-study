import React from 'react';
import { Route } from 'react-router-dom';
import './main.css'

//Components
import Registration from '../registration/Registration';
import Login from '../login/Login';

class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <Route path="/registration" component={Registration}/>
                <Route exact path="/" component={Login}/>
            </div>
        )
    }
}

export default Main;