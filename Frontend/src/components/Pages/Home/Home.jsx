import React from "react";
import "./Home.css";
import poster from "../../utils/image/poster.webp";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import aboutI from '../../utils/image/about.png';
import Carosel from '../../utils/corosel/Carosel';
 
function Home() {
  return (
    <div className="Home">
      <div className="poster center ">
        <div className="poster_right right">
          <img src={poster} alt="poster" />
        </div>

        <div className="Home__title">
          <ArrowRightAltIcon className="arrow" /> Doctor At Your
          <br />
          <span className="white__line"></span>
          Footstep
        </div>
      </div>

      <div className="separator" style={{}}></div>
      <div className="doctor">
        <div className="doctor__title text-align-center main-title">
          <ArrowRightAltIcon className="arrow" />
          {"    "} Specialized Doctors
        </div>
        <div className="doctor__container container ">
          <div className="row"> 
              <Carosel/>
          </div>
        </div>
      </div>
      <div className="separator" style={{}}></div>

      <div className="about">
        <div className="about__iamge">
          <img src={aboutI} alt="" />
        </div>
        <div className="white">            
            <div className="white__container">
                <div className="white__arrow">
                  <ArrowRightAltIcon className="arrow" />
                </div>
                <div className="white__text">
                  <div className="white__line">
                    All About
                  </div>
                  Our Company
                </div>
            </div>
        </div>
        <div className="blue">
          <div className="blue__text">
            With 25 year of industry experience, <strong>Carson, Reeve, & Yates</strong> is a management consultancy 
            firm which helps leaders make sound business decisions.
          </div>
        </div>
      </div>
      <div className="separator" style={{}}></div>
      <div className="separator" style={{}}></div>
      <div className="separator" style={{}}></div>


    </div>
  );
}

export default Home;
