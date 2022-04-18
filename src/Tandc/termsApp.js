import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import imgArrow from '../images/left_s.png';


const ReadApp = () => {



    return(
        <div className="container">
            <div className="agreemain" >
                <Link to="/AgreeTerms">
                    <img src={imgArrow} className="backagree" alt="back" />
                </Link>
            </div>
            <div></div>
        </div>
    )
};

export default ReadApp;