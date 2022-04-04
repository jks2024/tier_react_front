import React, {useState, useEffect} from 'react';
import imgArrow from './images/left_s.png'
import { Link } from "react-router-dom";

const CraeteWallet = () => {


    return(
    
        <div className="container">
            <div className="createmain">
            <Link to="/Home" className="backhome">
                <img src={imgArrow} alt="back" />
            </Link>
                <span className="createmaintypo">CREATE WALLET</span>
            </div>
            <div className="income">
                <span className="incometypo">Income Type</span><br/>
                <select className="incomeselect">
                    <optgroup>
                        <option>Please select a Income Type</option>
                    </optgroup>
                </select>
            </div>
            <div className="industry">
                <span className="industrytypo">Industry Type</span><br/>
                <select className="industryselect">
                    <optgroup>
                        <option>Please select a type of business</option>
                    </optgroup>
                </select>
            </div>
            <div className="occupation">
                <span className="occupationtypo">Occupation Type</span><br/>
                <select className="occupationselect">
                    <optgroup>
                        <option>Please choose your occupation type</option>
                    </optgroup>
                </select>
            </div>
            <div className="createbutton">
                <button className="forbidbutton">CONFIRM</button>
            </div>
        </div>
    )

};

export default CraeteWallet;