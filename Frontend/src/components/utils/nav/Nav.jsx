import React from 'react';
import logo2 from '../image/logo2.png';
import './Nav.css';

function Nav() {
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    <a class="navbar-brand " href="#">
                        <img src={logo2} alt="" width="30" height="24" class="d-inline-block align-text-top" />
                        {"  "}Dr. Sourav
                    </a>

                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="Services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="Find-Doctor">Find-Doctor</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
