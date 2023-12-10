import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Doc_image from '../../utils/image/logo2.png';

import "./Signup_dr.css";

export default function Signup_dr(props) {
  const setalert=props.setalert
  const history=useHistory();
  const [N, setN] = useState(1);
  const [Signup, setSignup] = useState({
    email: "",
    address: "",
    born: "",
    firstName: "",
    lastName: "",
    contact: "",
    whatsapp: "",
    others: "",
    speciality: "",
    organisation: "",
  });
  const handelChange = (e) => {
    setSignup({ ...Signup, [e.target.name]: e.target.value });
  };

  const submitForm=(e)=>{
    e.preventDefault()
    console.log(Signup)
    history.push("/dashboard")
    setalert({type:"success!",msg:"Congrats sign up sucessful"})
    setTimeout(() => {
    setalert({type:null,msg:""})
      
    }, 4000);
  }

  function myfunction() {
    setN(N + 1);

    var s, p, b, f, l;
    s = "";
    console.log("value of n ", N);
    if (N === 1) {
      s = document.getElementById("email").value;

      if (s !== "") {
        document.getElementById("form1").style.display = "none";
        document.getElementById("form2").style.display = "block";
        document.getElementById("nxt").style.display = "none";

        return 0;
      } else {
        setN(N - 1);
        alert("Please fill the form");
      }
    } else if (N === 2) {
      b = document.getElementById("born").value;
      f = document.getElementById("firstName").value;
      l = document.getElementById("lastName").value;
      console.log(b, f, l);

      if (b !== "" && f !== "" && l !== "") {
        document.getElementById("form1").style.display = "none";

        document.getElementById("form2").style.display = "none";
        document.getElementById("form3").style.display = "block";
        document.getElementById("form4").style.display = "none";
        document.getElementById("form5").style.display = "none";

        return 0;
      } else {
        setN(N - 1);
        alert("Please fill the form");
      }
    } else if (N === 3) {
      var add = document.getElementById("address").value;
      var con = document.getElementById("contact").value;
      var whatsapp = document.getElementById("whatsapp").value;

      if (add !== "" && con !== "" && whatsapp !== "") {
        document.getElementById("form3").style.display = "none";
        document.getElementById("form4").style.display = "block";
        document.getElementById("form5").style.display = "none";
        document.getElementById("form2").style.display = "none";
        document.getElementById("form1").style.display = "none";

        return 0;
      } else {
        setN(N - 1);
        alert("Please fill the form");
      }
    } else if (N === 4) {
      var ass = document.getElementById("others").value;
      var orga = document.getElementById("organisation").value;
      var speci = document.getElementById("speciality").value;

      if (ass !== "" && orga !== "" && speci !== "") {
        document.getElementById("form1").style.display = "none";
        document.getElementById("form2").style.display = "none";
        document.getElementById("form3").style.display = "none";

        document.getElementById("form4").style.display = "none";
        document.getElementById("form5").style.display = "block";
        document.getElementById("nxtbtn").style.display = "none";

        return 0;
      } else {
        setN(N - 1);
        alert("Please fill the form");
      }
    } else if (N === 5) {
      var uplimg = document.getElementById("uploadimg").value;
      var cer = document.getElementById("certificate").value;

      if (uplimg !== "" && cer !== "") {
        document.getElementById("form5").style.display = "none";
        // submitForm()s
        return 0;
      } else {
        setN(N - 1);
        alert("Please fill the form");
      }
    }
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-4">
            <div className="dctrimgsec bg-primary">
              <img src={Doc_image} alt="doctorsignimgmodule" width="356" />
            </div>
          </div>
          <div className="col col-8 pl-5">
            <div className="fromwrapper">
              <form id="form1">
                <div className="form1">
                  <h2 className="heading text-center mt-2 mb-3">Sign Up</h2>
                  <div className="form-group text-center">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      //value={Signup.email}
                      className="form-control text-center"
                      id="email"
                      name="email"
                      aria-describedby="emailHelp"
                      onChange={handelChange}
                    ></input>
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="socialbtn">
                    <button className="btn btn-primary">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </button>
                    <button className="btn btn-warning">
                      <i className="fa fa-google" aria-hidden="true"></i>
                    </button>
                    <button className="btn btn-secondary">
                      <i className="fa fa-apple" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </form>

              {/* Form 2 */}

              <form id="form2">
                <h2 className="heading text-center mt-2 mb-3">Sign Up</h2>
                <div className="form-group text-center">
                  <label htmlfor="exampleInputEmail2">When you Born?</label>
                  <input
                    name="born"
                    type="email"
                    //value={Signup.born}
                    className="form-control text-center"
                    id="born"
                    aria-describedby="emailHelp"
                    onChange={handelChange}
                  ></input>
                  <label htmlfor="exampleInputEmail2">Frist Name</label>
                  <input
                    name="firstName"
                    type="email"
                    //value={Signup.firstName}
                    className="form-control text-center"
                    id="firstName"
                    aria-describedby="emailHelp"
                    onChange={handelChange}
                  ></input>
                  <label htmlfor="exampleInputEmail2">Last Name</label>
                  <input
                    name="lastName"
                    type="email"
                    //value={Signup.lastName}
                    className="form-control text-center"
                    id="lastName"
                    aria-describedby="emailHelp"
                    onChange={handelChange}
                  ></input>
                </div>
              </form>

              {/* Form 3 */}

              <form id="form3">
                <h2 className="heading text-center mt-2 mb-3">Sign Up</h2>
                <div className="form-group text-center">
                  <label htmlfor="exampleInputEmail3">Address</label>
                  <input
                    name="address"
                    type="text"
                    //value={Signup.address}
                    className="form-control text-center"
                    id="address"
                    aria-describedby="emailHelp"
                    onChange={handelChange}
                  ></input>
                  <label htmlfor="exampleInputEmail3">Contact Number</label>
                  <input
                    name="contact"
                    type="email"
                    //value={Signup.contact}
                    className="form-control text-center"
                    id="contact"
                    aria-describedby="emailHelp"
                    onChange={handelChange}
                  ></input>
                  <label htmlfor="exampleInputEmail3">Whatsapp Number</label>
                  <input
                    name="whatsapp"
                    type="email"
                    //value={Signup.whatsapp}
                    className="form-control text-center"
                    id="whatsapp"
                    aria-describedby="emailHelp"
                    onChange={handelChange}
                  ></input>
                </div>
              </form>

              {/* form 4 */}

              <form id="form4">
                <h2 className="heading text-center mt-2 mb-3">Sign Up</h2>
                <div className="form-group text-center">
                  <label htmlfor="exampleInputEmail4">SPECIALIZATION</label>
                  <input
                    name="speciality"
                    type="email"
                    //value={Signup.speciality}
                    className="form-control text-center"
                    id="speciality"
                    aria-describedby="emailHelp"
                    onChange={handelChange}
                  ></input>
                  <label htmlfor="exampleInputEmail4">
                    Are you member of other medical association?
                  </label>
                  <input
                    name="others"
                    type="email"
                    //value={Signup.others}
                    className="form-control text-center"
                    id="others"
                    aria-describedby="emailHelp"
                    onChange={handelChange}
                  ></input>
                  <label htmlfor="exampleInputEmail4">Organization Name</label>
                  <input
                    name="organisation"
                    type="email"
                    //value={Signup.organisation}
                    className="form-control text-center"
                    id="organisation"
                    aria-describedby="emailHelp"
                    onChange={handelChange}
                  ></input>
                </div>
              </form>
              <div>

             <div id="nxtbtn"classname="nextbtn">
                <button
                  onClick={myfunction}
                  className="btn btn-primary mt-2 mb-2"
                >
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </button>
              </div>
              <div id="nxt" className="caresec text-center">
                <div> 
                  <Link to="#">Can't Sign in</Link>
                </div>
                <div>
                  <Link to="#">Allready Have An Account</Link>
                </div>
              </div>
              
              </div>
              {/* form 5 */}

              <form id="form5">
                <h2 className="heading text-center mt-2 mb-3">Sign Up</h2>
                <div className="form-group text-center">
                  <label htmlfor="myFile">Upload IMAGE</label>
                  <input
                    name="uploadimg"
                    type="file"
                    id="uploadimg"
                    name="filename"
                  ></input>
                  {/* <input type="submit"></input> */}
                  <label htmlfor="myFile">Upload Certificate</label>
                  <input
                    name="certificate"
                    type="file"
                    id="certificate"
                    name="filename"
                  ></input>
                  <input name="submit" type="submit" onClick={submitForm}></input>
                </div>
              </form>
              {/* next btn */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
