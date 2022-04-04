import React, {useState, useEffect} from 'react';
import imgArrow from './images/left_b.png'
import { Link } from "react-router-dom";

const Signup = () =>{
    // 키보드 입력
    const [inputFirstName, setInputFirstName] = useState("");
    const [inputLastName, setInputLastName] = useState("");
    const [inputPhone, setInputPhone] = useState("");

    // 오류 메시지
    const [phoneMessage, setPhoneMessage] = useState("");

    // 유효성 검사
    const onChangeFirstName = (e) => {
        setInputFirstName(e.target.value);
    }

    const onChangeLastName = (e) => {
        setInputLastName(e.target.value);
    } 

    const onChangePhone = (e) => {
        const regex = /^[0-9\b -]{0,13}$/;
        if (regex.test(e.target.value)) {
            setInputPhone(e.target.value);
        }
    }
    const onClickLogin = () => {
        console.log("SMS 인증 하기");
        
    }

    return(
    <div>
        <div className="container">
            <Link to="/" className="left_arrow">
                <img src={imgArrow} alt="left" />
            </Link>

            <div className="item2">
                <input className="input" placeholder="성" value ={inputFirstName} onChange={onChangeFirstName}/>
            </div>
            <div className="item2">
                <input className="input" placeholder="이름" value ={inputLastName} onChange={onChangeLastName}/>
            </div>
            <div className="item2">
                <input className="input" placeholder="전화번호" value ={inputPhone} onChange={onChangePhone}/> 
            </div>
            <div className="item2">
                <button className="enable_button" onClick={onClickLogin}>NEXT</button>
            </div>
        </div>
    </div>
    )
};

export default Signup;