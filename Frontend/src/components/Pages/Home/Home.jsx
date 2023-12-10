import React from "react";
import "./Home.css";
import poster from "../../utils/image/poster.webp";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import aboutI from "../../utils/image/about.png";
import service1 from "../../utils/image/service.png";
import Carosel from "../../utils/corosel/Carosel";

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
          Door-Step
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
            <Carosel />
          </div>
        </div>
      </div>
      <div className="separator" style={{}}></div>

      {/* <div className="about">
        <div className="about__iamge">
          <img src={aboutI} alt="" />
        </div>

        <div className="white">
          <div className="white__container">
            <div className="white__arrow">
              <ArrowRightAltIcon className="arrow" />
            </div>
            <div className="white__text">
              <div className="white__line">All About</div>
              Our Company
            </div>
          </div>
        </div>

        <div className="blue">
          <div className="blue__text">
            With 25 year of industry experience,{" "}
            <strong>Carson, Reeve, & Yates</strong> is a management consultancy
            firm which helps leaders make sound business decisions.
          </div>
        </div>

      </div> */}

      <div className="separator" style={{}}></div>

      <div className="about2">
        <div className="container about2__container" >
          <div className="about2__iamge">
            <img src={aboutI} alt="" />
          </div>
          <div className="about2__right">
            <div className="about2__white">
              <div className="white2__arrow">
                <ArrowRightAltIcon className="arrow" />
              </div>
              <div className="white2__text">
                <div className="white2__line">All About</div>
                Our Company
              </div>
            </div>
            <div className="about2__blue">
              <div className="blue2__text">
                With 25 year of industry experience,{" "}
                <strong>Carson, Reeve, & Yates</strong> is a management consultancy
                firm which helps leaders make sound business decisions.
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="separator" style={{}}></div> */}

      <div className="services">
        <div className="service__container container">
          <div className="service_left">
            <div className="service_txt">
              <section>
                <div className="title1 flex">
                  <h2 className="service_no">01</h2>
                  <div className="service__title">
                    <h3>Text Preparation</h3>
                    <h5>We prepare to everithing need you</h5>
                  </div>
                </div>
              </section>
              <section>
                <div className="title2 flex">
                  <h2 className="service_no">02</h2>
                  <div className="service__title">
                    <h3>Text Preparation</h3>
                    <h5>We prepare to everithing need you</h5>
                  </div>
                </div>
              </section>
              <section>
                <div className="title3 flex">
                  <h2 className="service_no">03</h2>
                  <div className="service__title">
                    <h3>Text Preparation</h3>
                    <h5>We prepare to everithing need you</h5>
                  </div>
                </div>
              </section>
              <div className="service_button">
                <button>Learn More</button>
              </div>
            </div>
          </div>
          <div className="service_right">
            <div className="ourServicees">
              <h1>
                Our Services
              </h1>
            </div>
            <div className="serviceImage">
              <img
                src={service1}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="separator" style={{}}></div>

    </div>
  );
}

export default Home;
