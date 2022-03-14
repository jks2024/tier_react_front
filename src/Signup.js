import React, {useState, useEffect} from 'react';
import imgArrow from './images/left_b.png'
import { Link } from "react-router-dom";

const Signup = () =>{
    // 키보드 입력
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    const [inputConPw, setInputConPw] = useState("");
    const [inputFirstName, setInputFirstName] = useState("");
    const [inputLastName, setInputLastName] = useState("");
    const [inputPhone, setInputPhone] = useState("");

    // 오류 메시지
    const [idMessage, setIdMessage] = useState("");
    const [pwMessage, setPwMessage] = useState("");
    const [conPwMessage, setConPwMessage] = useState("");
    const [phoneMessage, setPhoneMessage] = useState("");

    // 유효성 검사
    const [isId, setIsId] = useState("");
    const [isPw, setIsPw] = useState("");
    const [isConPw, setIsConPw] = useState("");

    


    return(
    <div>
        <div className="container">
            <Link to="/" className="left_arrow">
                <img src={imgArrow} alt="left" />
            </Link>
            
            <div className="sign">
                <span>Sign Up</span>
            </div>
            <div className="item2">
                <input className="input" placeholder="아이디" value ={inputId} onChange={onChangId}/>
            </div>
            <div className="item2">
                <input className="input" placeholder="패스워드" value ={inputPw} onChange={onChangePw}/>
            </div>
            <div className="item2">
                <input className="input" placeholder="패스워드 확인"/>
            </div>
            <div className="item2">
                <input className="input" placeholder="성"/>
            </div>
            <div className="item2">
                <input className="input" placeholder="이름"/>
            </div>
            <div className="item2">
                <input className="input" placeholder="전화번호"/>
            </div>
        </div>
    </div>
    )
};

export default Signup;