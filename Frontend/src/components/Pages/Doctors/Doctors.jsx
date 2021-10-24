import React from 'react'
import Doc_Details from '../../utils/DoctorDetails/Doc_Details';
import './Doctors.css';


function Doctors() {
    return (
        <div className="doc_container">
            <h1>DOCTOR'S DETAILS</h1>
            <div className="doc_details">
                <div className="doc_profile text-md-center">
                  <img className="mt-3" src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" alt="doctorprofile" width="200px" height="200px"/>
                </div>
                <div className="doc_name text-md-center">
                  <h2><i>Dr. Sourav Chakraborty</i></h2>
                  <h5>MBBS,MD</h5>
                </div>
                <div className="row">
                    <div className="doctor_details col-md-5">
                        <h3>Sourav Chakraborty</h3>
                        <div className="row">
                            <div className="col-md-4">
                                <h4>Gender</h4>
                                <h4>Specialization</h4>
                                <h4>Education</h4>
                                <h4>Degree</h4>
                                <h4>Award</h4>
                                <h4 className="mt-4">Experience</h4>
                                <h4>Attaching Hospital</h4><br></br>
                                <h4 className="mt-4">Phone No.</h4>
                            </div>
                            <div className="col-md-1">
                                <h4> - </h4>
                                <h4> - </h4>
                                <h4> - </h4>
                                <h4> - </h4>
                                <h4> - </h4>
                                <h4 className="mt-4"> - </h4>
                                <h4 className="mt-3"> - </h4><br></br>
                                <h4 className="mt-5"> - </h4>
                            </div>
                            <div className="col-md-2 mt-1">
                                <h5><i>Male</i></h5>
                                <h5 className="mt-2"><i>Dermatologist</i></h5>
                                <h5 className="mt-3"><i>MBBS(cal),MD(cal)</i></h5>
                                <h5 className="mt-3"><i>MBBS,MD</i></h5>
                                <h5><i>Gold Medalist</i></h5>
                                <h5><i>4 yrs</i></h5>
                                <h5><i>Medical College And Hospital</i></h5>
                                <h5 className="mt-4"><i>9007072130</i></h5>
                            </div>
                        </div>
                        <div className="mt-3">
                           <h4>Patient Viewed in last 2 months - <i>151</i></h4>
                        </div>
                        {/*<h4>Gender - <i>Male</i></h4>
                        <h4>Age - <i>21</i></h4>
                        <h4>Specialization - <i>Dermatologist</i></h4>
                        <h4>Education - <i>MBBS(cal),MD(cal)</i></h4>
                        <h4>Degree - <i>MBBS,MD</i></h4>
                        <h4>Experience - <i>4 years</i></h4>
                        <h4>Attaching Hospital - <i>Medical College And Hospital</i></h4>
                        <h4>Patient Viewed in last 2 months - <i>151</i></h4>*/}
                    </div>

                    <div className="col-md-3 mt-3">
                        <h4>Add reviews</h4>
                        <form>
                            <label>Rate The Doctor</label><br></br>
                            <input type="number"></input><br></br>
                            <label>Review Title</label><br></br>
                            <input type="text"></input><br></br>
                            <label>Review Text</label><br></br>
                            <input type="textarea"></input><br></br>
                            <input type="submit" className="btn btn-warning mt-3"></input>

                        </form>
                    </div>

                    <div className="col-md-4 mt-3">
                        <h4>61 Reviews | Avg Rating - 3.5</h4>
                        <div className="review_details mt-5"> 
                            <p>Good - 4/5<span className="doctor_review" style={{float: 'right'}}>Reviewed By - <b>Sudipta Chatterjee</b></span></p>
                            <p>Good Doctor for Dermatologist I have ever Seen. So I recommend this doctor for skin diseases</p>
                            <p>Date - 23/10/21</p>
                            <hr></hr>
                            <p>Bad - 1/5<span style={{float: 'right'}}>Reviewed By - <b>Arpan Das</b></span></p>
                            <p>I am not Satisfied and i am very disappointed.</p>
                            <p>Date - 20/10/21</p>
                            <hr></hr>
                        </div>
                    </div>
                </div>
                <div className="doc_appounment text-md-center mt-5">
                    <button className="btn btn-warning">Book An Appoinment</button>
                </div>
            </div>
            
            

        </div>
    )
}

export default Doctors

