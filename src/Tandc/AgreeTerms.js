import React, {useState, useEffect} from 'react';
import imgArrow from '../images/left_s.png'
import imgGrayarrow from '../images/right_gray.png'
import { Link } from "react-router-dom";

const AgreeTerms= () => {


    return(
    
        <div className="container">
            <div className="agreemain">
                <img src={imgArrow} className="gosign" alt="back" />
            </div>
            <div className="agreetypo">
                <span className="agreetypo1">Accept Terms and Conditions</span>
                <span className="agreetypo2">These are the Terms and Conditions for using TIER</span>
            </div>
            <div className="agreebox">
                <input className="agree" type="checkbox" />
                <span>Agree to all Terms and Conditions</span>
            </div>
            <div className="readterms">
                <label className="readtermstypo1"><img src={imgGrayarrow} className="goread" alt="goterms"/>
                <span>Terms & Conditions for the Tier App</span></label>
                
                <br/>
                <label className="readtermstypo2"><img src={imgGrayarrow} className="goread" alt="goterms"/>
                <span>terms and Conditions Content</span></label>
                
            </div>
            <div className="agreebutton">
                <button className="banbutton">CONFIRM</button>
            </div>
        </div>
    )

};

export default AgreeTerms;