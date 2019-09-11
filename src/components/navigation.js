import React, { Component } from 'react';
//import { NavLink } from 'react-router-dom';

import '../style/navigation.css';
import App from '../App';

const Navigation = () => {
        return (
        <nav>
            <ul className="nav-links">
                <li><a href="/" path="/me">Home</a></li>
                <li><a href="../reports/week/1">Reports</a></li>
            </ul>
        </nav>
        );
};

export default Navigation;
