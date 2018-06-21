import React, { Component } from 'react';
import './login.css'
class Login extends Component {
    render() {
        return (
            <div className="login-wrap offset-2 col-md-8">
                <h2>Welcome back! </h2>
                <div class="login-input"><i class="fa fa-user" aria-hidden="true"></i><input type="text" placeholder="Username"/></div>
                <div class="login-input"><i class="fa fa-unlock-alt" aria-hidden="true"></i><input type="password" placeholder="Password"/></div>
                <button type="submit">Enter</button>
            </div>
        );
    }
}

export default Login;
