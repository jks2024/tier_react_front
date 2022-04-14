import React, {useState, useEffect} from 'react';
import imgArrow from './images/left_s.png'
import imgGrayarrow from './images/right_gray.png'
import agreeOnetime from './images/check_not.png'
import { Link } from "react-router-dom";

const AgreeTerms= () => {


    return(
    
        <div className="container">
            <div className="agreemain">
                <img src={imgArrow} className="gosign" alt="back" />
            </div>
            <div className="agreetypo">
                <span className="agreetypo1">Accept Terms and Conditions</span><br/>
                <span className="agreetypo2">These are the Terms and Conditions for using TIER</span>
            </div>
            <div>

            </div>
            <div className="agreebutton">
                <button className="disagreebutton">CONFIRM</button>
            </div>
        </div>
    )

};

export default AgreeTerms;