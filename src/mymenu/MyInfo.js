import React, { useState, useEffect } from 'react';
import imgArrow from '../images/left_s.png'
import EnnovaApi from '../api/ennovaApi';
import { Link } from "react-router-dom";

const Myinfo = () => {
    const localId = window.localStorage.getItem("userId");
    const [id, setId] = useState("");
    const [phone, setPhone] = useState("");
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    
    useEffect(() => {
        const getData = async() => {
            let result = await EnnovaApi.userInfoGet(localId);
            if (result.data.Code == "00") {
                setId(result.data.Body.Result[0].ID);
                setPhone(result.data.Body.Result[0].PhoneNumber);
                setFirst(result.data.Body.Result[0].FirstName);
                setLast(result.data.Body.Result[0].LastName);
            }
        }
        getData()
    });

    return(
        <div className="container">
            <div className="myinfohead">
                <Link to="/Fullmenu"><img src={imgArrow} alt="back" className="backmenu" /></Link>
                <span className="myinfotypo">MY INFORMATION</span>
            </div>
            <div className="myinfoId">
                <span className="infoIdtypo1">ID</span>
                <span className="infoIdtypo2">{id}</span>
            </div>
            <div className="myinfofirstname">
                <span className="myinfofirstname1">First Name</span>
                <span className="myinfofirstname2">{first}</span>
            </div>
            <div className="myinfolastname">
                <span className="myinfolastname1">Last Name</span>
                <span className="myinfolastname2">{last}</span>
            </div>
            <div className="myinfophone">
                <span className="myinfophone1">Phone<br/>Number</span>
                <span className="myinfophone2">{phone}</span>
            </div>
        </div>
    )
};

export default Myinfo;