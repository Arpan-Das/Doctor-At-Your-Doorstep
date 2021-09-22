import React from "react";
import "./Home.css";
import poster from "../../utils/image/poster.webp";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DocCard from "../../DocCard/DocCard";
import docpic from "../../utils/image/Doc_Pic/doc1.jpg";
 
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
            <DocCard
              pic={docpic}
              name={"Dr. ABC"}
              qualification={"Neurologist,MBBS"}
              desc={"deals with the problem of brain and nerve"}
            />
            <DocCard
              pic={docpic}
              name={"Dr. ABC"}
              qualification={"Neurologist,MBBS"}
              desc={"deals with the problem of brain and nerve"}
            />
            <DocCard
              pic={docpic}
              name={"Dr. ABC"}
              qualification={"Neurologist,MBBS"}
              desc={"deals with the problem of brain and nerve"}
            />
          </div>
        </div>
      </div>
      <div className="separator" style={{}}></div>

      <div className="about">
        <div className="white">
            
            <div className="white__text">

            </div>
        </div>
        <div className="blue"></div>
      </div>

    </div>
  );
}

export default Home;
