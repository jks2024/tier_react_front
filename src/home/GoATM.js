import React, {useState, useEffect} from 'react';
import imgArrow from '../images/left_s.png'
import imgWallet from '../images/wallet.png'
import { Link } from "react-router-dom";

const GoATM = () => {


    return(
    
        <div className="container">
            <div className="ATMmain">
            <Link to="/Home" className="backhome">
                <img src={imgArrow} alt="back" />
            </Link>
                <span className="ATMmaintypo">ATM</span>
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
            <div className="ATMRemittance">
                <span className="ATMRemittancetypo">Remittance Type</span>
                <input className="InputATMRemittance" placeholder="Enter the Remittance Type" />
            </div>
            <div className="Amount">
                <span className="Amounttypo">Amount</span>
                <input className="InputAmount" placeholder="Enter the Amount" />
            </div>
            <div className="ATMbutton">
                <button className="forbidbutton">CONFIRM</button>
            </div>
        </div>
    )

};

export default GoATM;