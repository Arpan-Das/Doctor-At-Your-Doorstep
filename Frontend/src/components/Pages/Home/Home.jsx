import React from 'react';
import './Home.css';
import poster from '../../utils/image/poster.webp';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


function Home() {
    return (
        <div className="Home">
            <div className="poster center ">  

                <div className="poster_right right">                   
                    <img src={poster} alt="poster" />                   
                </div>

                <div className="Home__title">
                    <ArrowRightAltIcon className="arrow"/> Doctor At Your
                    <br />
                    <span className="white__line"></span>
                    Footstep
                </div>
            </div>

            <div className="separator" style={{}}></div>
            <div className="doctor">
                <div className="doctor__title text-align-center main-title">
                    <ArrowRightAltIcon className="arrow"/>{"    "} Specialized Doctors
                </div>
                <div className="doctor__container">
                    <div className="doctor__doc1">
                        <div className="doc__image"></div>
                        <div className="doc__title"></div>
                        <div className="doc__line"></div>
                        <div className="doc__info"></div>
                    </div>
                </div>
            </div>
            <div className="separator" style={{}}></div>
        </div>
    )
}

export default Home
