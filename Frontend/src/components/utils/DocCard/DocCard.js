import React from "react";

import './DocCard.css';

function DocCard(props) {
    const upper=(s)=>{
        return s.toUpperCase()
    }
  return (
    <div className="container  ">
      <div className="doctor__doc ">
        <div className="doc__image">
            <img src={props.pic} alt="" style={{"width":"100px","borderRadius":"50%"}}/>
        </div>
        <div className="doc__title" style={{borderBottom:"1px solid #0a1f4c"}}>
            <h3>{props.name}</h3>
            <hr />
            <h6>{props.qualification}</h6>
        </div>      
        
        <div className="doc__info" style={{borderTop:"1px solid #0a1f4c",marginTop:"5px", "text-transform": "uppercase"}}>
            {props.desc}
        </div>
      </div>
    </div>
  );
}

export default DocCard;
