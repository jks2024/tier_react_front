import React, {useState, useEffect} from 'react';
import imgArrow from '../images/left_s.png'
import imgWallet from '../images/wallet.png'
import { Link } from "react-router-dom";

const GoPeer = () => {


    return(
    
        <div className="container">
            <div className="Peermain">
            <Link to="/Home" className="backhome">
                <img src={imgArrow} alt="back" />
            </Link>
                <span className="Peermaintypo">PEER TO PEER</span>
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
            <div className="PeerRemittance">
                <span className="PeerRemittancetypo">Remittance Type</span><br/>
                <select className="PeerRemittanceselect" >
                    <optgroup>
                        <option>Please select a Remittance Type</option>
                        <option>Wallet ID</option>
                        <option>Phone Number</option>
                    </optgroup>
                </select>
            </div>
            <div className="WalletID">
                <span className="WalletIDtypo">Wallet ID</span>
                <input className="InputWalletID" placeholder="Enter the Remittance Type" />
            </div>
            <div className="PeerAmount">
                <span className="PeerAmounttypo">Amount</span>
                <input className="InputPeerAmount" placeholder="Enter the Amount" />
            </div>
            <div className="ATMbutton">
                <button className="forbidbutton">CONFIRM</button>
            </div>
        </div>
    )

};

export default GoPeer;