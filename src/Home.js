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
                <div className="linkage">
                    <img src={imgBig} className="nedlogo" alt="bigN" />
                    <label>
                        <span className="linktypo1">Wallet in my hand</span><br/>
                        <span className="linktypo2">Link to Nedbank account and make payments easier</span>
                    </label>
                </div>
                <div className="yourinfo">
                    <label className="infotypo1"><span>WALLET</span>
                    <span>R 0.00</span></label><br/>
                    <span className="infotypo2">No Wallet registered</span><br/>
                    
                    <label className="infotypo1"><span>ACCOUNT</span>
                    <span>R 0.00</span></label><br/>
                    <span className="infotypo2">No Account registered</span><br/>
                    
                    <label className="infotypo1"><span>CARD</span>
                    <span>R 0.00</span></label><br/>
                    <span className="infotypo2">No card registered</span>
                </div>
                <div className="addpay">
                    <img src={moreAdd} className="addpayimg" alt="plus"/>
                    <span className="addpaytypo">Add payment method</span>
                </div>
                <div className="event">
                    <img src={threeCoin} className="eventimg" alt="coins"/>
                    <span className="eventtypo1">EVENT</span>
                    <span className="eventtypo2">Check attendance and get free points! The accumulated points can be used like cash.</span>
                </div>
                
            </div>
        </div>
    )
};

export default GoHome;