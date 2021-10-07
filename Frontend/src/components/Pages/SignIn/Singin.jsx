import React from 'react'
import { Link } from 'react-router-dom'
import './Signin.css'

 function Singin() {
     
    return (
        <div >
          <div className="container">
                <div className="row">
                    <div className="col col-4">
                        <div className="dctrimgsec bg-primary">
                            <img src="" alt="doctorsignimgmodule" />
                        </div>
                    </div>    
                    <div className="col col-8 pl-5">
                        <div className="fromwrapper">
                        <form id="Next">
                                <h2 className="heading text-center mt-2 mb-3">Sign In</h2>
                                <div className="form-group text-center">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="socialbtn">
                                    <button className="btn btn-primary"><i className="fa fa-facebook" aria-hidden="true"></i></button>
                                    <button className="btn btn-warning"><i className="fa fa-google" aria-hidden="true"></i></button>
                                    <button className="btn btn-secondary"><i className="fa fa-apple" aria-hidden="true"></i></button>
                                </div>
                            </form>
                            {/* -----------DOB AND NAME SECTION----------------
                            <form id="Next1">
                                <h2 className="heading text-center mt-2 mb-3">Sign In</h2>
                                <div className="form-group text-center">
                                <label for="exampleInputEmail2">When you Born?</label>
                                <input type="email" className="form-control text-center" id="exampleInputEmail2" aria-describedby="emailHelp"></input>
                                <label for="exampleInputEmail2">Frist Name</label>
                                <input type="email" className="form-control text-center" id="exampleInputEmail2" aria-describedby="emailHelp"></input>
                                <label for="exampleInputEmail2">Last Name</label>
                                <input type="email" className="form-control text-center" id="exampleInputEmail2" aria-describedby="emailHelp"></input>
                                </div>
                            </form>
                            ---------------ADDRESS AND CONTACT---------------
                            <form id="Next2">
                                <h2 className="heading text-center mt-2 mb-3">Sign In</h2>
                                <div className="form-group text-center">
                                <label for="exampleInputEmail3">Address</label>
                                <input type="email" className="form-control text-center" id="exampleInputEmail3" aria-describedby="emailHelp"></input>
                                <label for="exampleInputEmail3">Contact Number</label>
                                <input type="email" className="form-control text-center" id="exampleInputEmail3" aria-describedby="emailHelp"></input>
                                <label for="exampleInputEmail3">Whatsapp Number</label>
                                <input type="email" className="form-control text-center" id="exampleInputEmail3" aria-describedby="emailHelp"></input>
                                </div>
                            </form>
                             ---------About section------
                             <form id="Next3">
                                <h2 className="heading text-center mt-2 mb-3">Sign In</h2>
                                <div className="form-group text-center">
                                <label for="exampleInputEmail4">SPECIALIZATION</label>
                                <input type="email" className="form-control text-center" id="exampleInputEmail4" aria-describedby="emailHelp"></input>
                                <label for="exampleInputEmail4">Are you member of other medical association?</label>
                                <input type="email" className="form-control text-center" id="exampleInputEmail4" aria-describedby="emailHelp"></input>
                                <label for="exampleInputEmail4">Organization Name</label>
                                <input type="email" className="form-control text-center" id="exampleInputEmail4" aria-describedby="emailHelp"></input>
                                </div>
                            </form>
                            ----------------IMAGE UPLOAD SECTION-----------------
                            <form id="Next4">
                                <h2 className="heading text-center mt-2 mb-3">Sign In</h2>
                                <div className="form-group text-center">
                                <label for="myFile">Upload IMAGE</label>
                                <input type="file" id="myFile" name="filename"></input>
                                <input type="submit"></input>
                                <label for="myFile">Upload Certificate</label>
                                <input type="file" id="myFile" name="filename"></input>
                                <input type="submit"></input>
                                </div>
                            </form> */}

                        <div class="nextbtn">
                            <button onclick= "myfunction()" className="btn btn-primary mt-2 mb-2"><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                        </div>
                        <div className="caresec text-center">
                            <div>
                                <Link to="#">Can't Sign in</Link>
                            </div>
                            <div>
                                <Link to="#">Allready Have An Account</Link>
                            </div>
                        </div>
                    </div>  
                </div>   
            </div>
        </div>
    </div>
    )
}

export default Singin