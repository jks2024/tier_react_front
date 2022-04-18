import React, {useState, useEffect} from 'react';
import imgArrow from '../images/left_s.png';
import { Link } from "react-router-dom";

const FindId = () => {
    return (
        <div className="container">
            <div className="findIDmain">
                <Link to="/"><img src={imgArrow} alt="back" className="backlogin" /></Link>
            </div>
        </div>
    )
};

export default FindId;