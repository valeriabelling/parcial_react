import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <NavLink to="/tareas" className="navbar-brand">
                React CRUD & Routing
            </NavLink>

            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink to="tareas" className="nav-link">
                        Tareas
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="nueva-tarea" className="nav-link">
                        Nueva Tarea
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
)

export default Header;