import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="admin-header">
                <div className="logo">Mercury</div>
                <ul className="tabs-btns">
                    <li><NavLink to="/registration" activeClassName={'active-link'}>Registration</NavLink></li>
                    <li><NavLink exact to="/" activeClassName={'active-link'}>Login</NavLink></li>
                </ul>
            </header>
        )
    }
}

export default Header;