import React, { Component } from 'react';
//import { NavLink } from 'react-router-dom';

import '../style/navigation.css';
import App from '../App';

const Navigation = () => {
        return (
        <nav>
            <ul className="nav-links">
                <li><a href="/" path="/me">Hem</a></li>
                <li><a href="/reports" path="./reports">Redovisningar</a>
                    <ul>
                        <li><a href="/reports/week/1" path="./reports/week/1">Vecka 1</a></li>
                        <li><a href="/reports/week/2" path="./reports/week/2">Vecka 2</a></li>
                    </ul>
                </li>
                <li><a href="./forms">Sign UP</a></li>
            </ul>
        </nav>
        );
};

export default Navigation;
