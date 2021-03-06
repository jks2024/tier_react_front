import React, {useState, useEffect} from 'react';
import EnnovaApi from '../api/ennovaApi';
import Modal from '../utill/modal.js';

const Fullmenu = () => {

    const localId = window.localStorage.getItem("userId");
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");

    // 팝업
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
        window.location.replace("/");
    };
    
    useEffect(() => {
        const getData = async() => {
            let result = await EnnovaApi.userInfoGet(localId);
            if (result.data.Code == "00") {
                setFirst(result.data.Body.Result[0].FirstName);
                setLast(result.data.Body.Result[0].LastName);
            }
        }
        getData()
    });

    const onClickInvite = () => {
        console.log("친구 초대하기");
    }

    const onClickMyinfo = () => {
        console.log("마이 인포 가기");
        window.location.replace("/MyInfo");
    }

    const onClickPassword = () => {
        console.log("비밀번호 변경");
    }

    const onClickPIN = () => {
        console.log("핀번호 변경");
    }

    const onClickNotifi = () => {
        console.log("알림 가기");
    }


    const onClickPermiss = () => {
        console.log("승인");
    }

    const onClickLegal = () => {
        console.log("법률정보");
    }

    const onClickDelete = () => {
        console.log("계정 탈퇴");
    }

    const onClickSignout = () => {
        console.log("로그아웃");
        setModalOpen(true);
    }





    return(
        <div className="container">
            <div className="fullmain">
                <span className="fulltypo">Hi, {first} {last}!</span>
                <div className="invite" onClick={onClickInvite}>
                    <span className="invitetypo">Invite your friends to TIER and get points!</span>
                </div>
            </div>
            <div className="fullmyinfo">
                <span className="myinfotypo">My Information</span>
                <ul className="myinfolist">
                    <div className="infobox1">
                        <li onClick={onClickMyinfo}>My Information</li>
                        <li onClick={onClickPassword}>Change Password</li>
                        <li onClick={onClickPIN}>Change PIN Number</li>
                    </div>
                    <div className="infobox2">
                        <li onClick={onClickNotifi}>Notification</li>
                        <li onClick={onClickPermiss}>Permissions</li>
                        <li onClick={onClickLegal}>Legal Information</li>
                    </div>
                    <div className="infobox3">
                        <li onClick={onClickDelete}>Delete Account</li>
                        <li onClick={onClickSignout}>Sign Out</li>
                        <Modal open={modalOpen} close={closeModal} header="안내창">로그아웃 되었습니다.</Modal>
                    </div>
                </ul>
            </div>
        </div>
    )

}

export default Fullmenu;