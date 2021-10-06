import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../image/logo2.png';
import './Nav.css';

function Nav() {
     function CloseModal(){
        document.getElementById("X").click()
    }
    
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
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        SignIn</button>
                        <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                        SignUp</button>
                </div>
            </nav>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Sign In</h5>
                        <button id="X" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="DrSec">
                            <p className="makeOneTxt text-center">SignIn as a Doctor</p>
                            <div className="forbtn mt-2 text-center">
                            <Link to="/SignIn" onClick={()=> CloseModal()} className="btn btn-primary text-center">Sign In</Link>
                            </div>
                        </div>
                        <div className="PatientSec">
                            <p className="signInTxt text-center">SignIn as a Patient</p>
                            <div className="forbtn mt-2 text-center">
                            <Link type="button" to="sign.html" className="btn btn-primary">Sign In</Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* mpdal---2 */}
            <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel1">Sign Up</h5>
                        <button id="X" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="DrSec">
                            <p className="makeOneTxt text-center">SignUp as a Doctor</p>
                            <div className="forbtn mt-2 text-center">
                            <Link type="button" to="#" className="btn btn-primary text-center">Sign Up</Link>
                            </div>
                        </div>
                        <div className="PatientSec">
                            <p className="signInTxt text-center">SignUp as a Patient</p>
                            <div className="forbtn mt-2 text-center">
                            <Link type="button" to="#" className="btn btn-primary">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}


export default Nav
