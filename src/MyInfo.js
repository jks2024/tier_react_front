import React, { useEffect } from 'react';
import imgArrow from './images/left_s.png'
import EnnovaApi from './api/ennovaApi';

const Myinfo = () => {
    const getId = window.localStorage.getItem("userId");
    
    useEffect(() => {
        const getData = async() => {
            let result = await EnnovaApi.userInfoGet(getId);
            console.log(result.data);
        }
        getData()
    });

    return(
        <div className="container">
            <div className="myinfohead">
                <img src={imgArrow} alt="back" className="backmenu" />
                <span className="myinfotypo">MY INFORMATION</span>
            </div>
            <div className="myinfoId">
                <span className="infoIdtypo1">ID</span>
                <span className="infoIdtypo2">tieradmin</span>
            </div>
            <div className="myinfofirstname">
                <span className="myinfofirstname1">First Name</span>
                <span className="myinfofirstname2">JINAH</span>
            </div>
            <div className="myinfolastname">
                <span className="myinfolastname1">Last Name</span>
                <span className="myinfolastname2">CHAE</span>
            </div>
            <div className="myinfophone">
                <span className="myinfophone1">Phone<br/>Number</span>
                <span className="myinfophone2">10-1234-1234</span>
            </div>
        </div>
    )

};

export default Myinfo;