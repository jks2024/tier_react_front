import React, { useState } from 'react';
import imgArrow from '../images/left_b.png'
import { Link } from "react-router-dom";
import EnnovaApi from '../api/ennovaApi';
import Modal from '../modal.js';

const SignupS1 = () =>{
    // 키보드 입력
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    const [inputConPw, setInputConPw] = useState("");

    // 오류 메시지
    const [idMessage, setIdMessage] = useState("");
    const [pwMessage, setPwMessage] = useState("");
    const [conPwMessage, setConPwMessage] = useState("");

    // 유효성 검사
    const [isId, setIsId] = useState("");
    const [isPw, setIsPw] = useState("");
    const [isConPw, setIsConPw] = useState("");
    // 팝업
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    const onChangId = (e) => {
        setInputId(e.target.value)
        if (e.target.value.length < 5 || e.target.value.length > 12) {
            setIdMessage("5자리 이상 12자리 미만으로 입력해 주세요.");
            setIsId(false);    
        } else {
            setIdMessage("올바른 형식 입니다.");
            setIsId(true);
        }
    }
    const onChangePw = (e) => {
        //const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
        const passwordCurrent = e.target.value ;
        setInputPw(passwordCurrent)
        if (!passwordRegex.test(passwordCurrent)) {
            setPwMessage('숫자+영문자 조합으로 8자리 이상 입력해주세요!')
            setIsPw(false)
        } else {
            setPwMessage('안전한 비밀번호에요 : )')
            setIsPw(true);
        }        
    }

    const onChangeConPw = (e) => {
        const passwordCurrent = e.target.value ;
        setInputConPw(passwordCurrent)
        if (passwordCurrent !== inputPw) {
            setConPwMessage('비밀 번호가 일치하지 않습니다.')
            setIsConPw(false)
        } else {
            setConPwMessage('비밀 번호가 일치 합니다. )')
            setIsConPw(true);
        }      
    }
    const onClickLogin = async() => {
        console.log("Click 회원가입");
        let result = await EnnovaApi.userInfoCheckId(inputId);
        if (result.data.Code == "00") {
            console.log("가입된 아이디가 없습니다. 다음 단계 진행 합니다.")
            window.location.replace("/SignupS2");
        } else {
            console.log("아이디 및 패스워드를 재확인해 주세요.")
            setModalOpen(true);
        } 
    }

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
            <div className="hint">
                    {inputId.length > 0 && <span className={`message ${isId ? 'success' : 'error'}`}>{idMessage}</span>}
            </div>
            <div className="item2">
                <input className="input" placeholder="패스워드" value ={inputPw} onChange={onChangePw}/>
            </div>
            <div className="hint">
                    {inputPw.length > 0 && (
                    <span className={`message ${isPw ? 'success' : 'error'}`}>{pwMessage}</span>)}
            </div>
            <div className="item2">
                <input className="input" placeholder="패스워드 확인" value ={inputConPw} onChange={onChangeConPw}/>
            </div>
            <div className="hint">
                    {inputPw.length > 0 && (
                    <span className={`message ${isConPw ? 'success' : 'error'}`}>{conPwMessage}</span>)}
            </div>

            <div className="item2">
                {(isId && isPw && isConPw) ? 
                <button className="enable_button" onClick={onClickLogin}>NEXT</button> :
                <button className="disable_button" onClick={onClickLogin}>NEXT</button>}
                <Modal open={modalOpen} close={closeModal} header="오류">중복된 아이디 입니다.</Modal>
            </div>
        </div>
    </div>
    )
};

export default SignupS1;