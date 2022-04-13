import React, {useState, useEffect} from 'react';
import imgArrow from '../images/left_s.png'
import imgWallet from '../images/wallet.png'
import { Link } from "react-router-dom";

const GoEFT = () => {


    return(
    
        <div className="container">
            <div className="EFTmain">
            <Link to="/Home" className="backhome">
                <img src={imgArrow} alt="back" />
            </Link>
                <span className="EFTmaintypo">EFT</span>
            </div>
            <div className="Withdrawal">
                <span className="Withdrawaltypo">Withdrawal</span>
                <div className="Withdrawalinfo">
                    <img src={imgWallet} className="imgWallet" alt="billfold" />
                    <span className="walletname">NEDBANK Wallet</span>
                    <span className="walletnumber">Wallet number</span><br/><br/>
                    <span className="bankbalance">Balance</span><br/>
                    <span className="balancesee">R 25,500.00</span><br/>
                </div>
            </div>
            <div className="Recipient">
                <span className="Recipienttypo">Recipient Reference</span>
                <input className="InputRecipient" placeholder="Enter the Recipient Reference" />
            </div>
            <div className="Own">
                <span className="Owntypo">Own Reference</span>
                <input className="InputOwn" placeholder="Enter the Own Reference" />
            </div>
            <div className="External">
                <span className="Externaltypo">External Unique Id</span>
                <input className="InputExternal" placeholder="Enter the External Unique Id" />
            </div>
            <div className="Amount">
                <span className="Amounttypo">Amount</span>
                <input className="InputAmount" placeholder="Enter the Amount" />
            </div>
            <div className="EFTbutton">
                <button className="forbidbutton">SEND</button>
            </div>
        </div>
    )

};

export default GoEFT;