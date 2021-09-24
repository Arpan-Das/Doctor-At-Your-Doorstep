import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../image/logo2.png';
import './Nav.css';

function Nav() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                <Link className="navbar-brand " to="#">
                        <img src={logo2} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        {"  "}Dr. Sourav
                    </Link>

                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Find-Doctor">Find-Doctor</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Disabled</Link>
                            </li>
                        </ul>
                    </div>
                    <button type="button" class="btn btn-outline-success mx-1">Success</button>
                    <button type="button" class="btn btn-outline-primary mx-1">Success</button>
                </div>
                
            </nav>
        </div>
    )
}

export default Nav
