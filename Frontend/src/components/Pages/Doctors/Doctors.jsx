import React from 'react'
import Doc_Details from '../../utils/DoctorDetails/Doc_Details';
import './Doctors.css';


function Doctors() {
    return (
        <div className="doc_container">
            <h1>DOCTORS DETAILS</h1>
            <div className="doc_details">
                <Doc_Details/>
            </div>

        </div>
    )
}

export default Doctors

