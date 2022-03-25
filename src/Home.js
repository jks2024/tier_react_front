import React, {useState, useEffect} from 'react';
import alarmGo from './images/bell.png'
import menuGo from './images/etc_button.png'
import houseGo from './images/home_button.png'
import moreAdd from './images/more_see.png'
import threeCoin from './images/p_coin.png'
import qrGo from './images/qr_button.png'
import logoWhite from './images/tier_logo_white.png'
import imgBig from './images/n_logo.png'

const GoHome = () => {
    
    const onClickLinkage = () => {
        console.log("계좌 링크");
    }

    const onClickWallet = () => {
        console.log("지갑 연동");
    }

    const onClickAccount = () => {
        console.log("계좌 연동");
    }

    const onClickCard = () => {
        console.log("카드 연동");
    }

    const onClickAdd = () => {
        console.log("결제 수단 추가");
    }

    const onClickEvent = () => {
        console.log("이벤트 가기");
    }


    return(
        <div>
            <div className="container">
                <div className="mainhead">
                    <div className="logo2">
                        <img src={logoWhite} alt="White" />
                    </div>
                    <div className="bell">
                        <img src={alarmGo} alt="alarm" />
                    </div>
                </div>
                <div className="linkage" onClick={onClickLinkage}>
                    <img src={imgBig} className="nedlogo" alt="bigN" />
                    <label>
                        <span className="linktypo1">Wallet in my hand</span><br/>
                        <span className="linktypo2">Link to Nedbank account and make payments easier</span>
                    </label>
                </div>
                <div className="yourinfo">

                    <div className="wallet" onClick={onClickWallet}>
                        <label className="wallettypo1">
                            <label><span>WALLET</span>&nbsp;&nbsp;<span className="walletscore">0</span></label>
                            <span>R 0.00</span>
                        </label>
                        <br/>
                        <span className="wallettypo2">No Wallet registered</span>
                    </div>

                    <div className="account" onClick={onClickAccount}>
                        <label className="accounttypo1">
                            <label><span>ACCOUNT</span>&nbsp;&nbsp;<span className="accountscore">0</span></label>
                            <span>R 0.00</span>
                        </label>
                        <br/>
                        <span className="accounttypo2">No Account registered</span>
                    </div>

                    <div className="card" onClick={onClickCard}>
                        <label className="cardtypo1">
                            <label><span>CARD</span>&nbsp;&nbsp;<span className="cardscore">0</span></label>
                            <span>R 0.00</span>
                        </label>
                        <br/>
                        <span className="cardtypo2">No card registered</span>
                    </div>

                </div>    
                <div className="addpay" onClick={onClickAdd}>
                    <img src={moreAdd} className="addpayimg" alt="plus"/>
                    <span className="addpaytypo">Add payment method</span>
                </div>
                <div className="event" onClick={onClickEvent}>
                    <img src={threeCoin} className="eventimg" alt="coins"/>
                    <label>
                    <span className="eventtypo1">EVENT</span>
                    <br/><span className="eventtypo2">Check attendance and get free points! The accumulated points can be used like cash.</span>
                    </label>

                </div>
            </div>
        </div>
    )
};

export default GoHome;