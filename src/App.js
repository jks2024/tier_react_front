import './App.css';
import Login from './Login';
import SignupS1 from './signup/SignupS1';
import SignupS2 from './signup/SignupS2';
import FindId from './signup/FindId';
import GoHome from './home/Home';
import CraeteWallet from './home/CreateWallet';
import GoEFT from './home/GoEFT'
import GoATM from './home/GoATM'
import GoPeer from './home/GoPeer'
import Fullmenu from './mymenu/Fullmenu';
import MyInfo from './mymenu/MyInfo';
import AgreeTerms from './AgreeTerms'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UserStore from './context/UserInfo';

function App() {
  return (
    <UserStore>
      <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/SignupS1" element={<SignupS1 />} />
            <Route path="/SignupS2" element={<SignupS2 />} />
            <Route path="/FindId" element={<FindId />} />
            <Route path="/Home" element={<GoHome />} />
            <Route path='/CreateWallet' element={<CraeteWallet />} />
            <Route path='/Fullmenu' element={<Fullmenu />} />
            <Route path='/MyInfo' element={<MyInfo />} />
            <Route path='/GoEFT' element={<GoEFT />} />
            <Route path='/GoATM' element={<GoATM />} />
            <Route path='/GoPeer' element={<GoPeer />} />
            <Route path='/AgreeTerms' element={<AgreeTerms />} />
        </Routes>
      </Router>
    </UserStore>
  );
}

export default App;
