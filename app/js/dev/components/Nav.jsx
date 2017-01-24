import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer App</li>
                        <li>
                            <IndexLink activeClassName="active-link" to="/">Timer</IndexLink>
                        </li>
                        <li>
                            <Link activeClassName="active-link" to="/countdown">Countdown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">Created by <a href="somelink">Some Author</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}