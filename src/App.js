import './App.css';
import Login from './Login'
import SignupS1 from './SignupS1'
import SignupS2 from './SignupS2'
import FindId from './FindId'
import GoHome from './Home'
import CraeteWallet from './CreateWallet';
import Fullmenu from './Fullmenu'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UserStore from './context/UserInfo'

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
        </Routes>
      </Router>
    </UserStore>
  );
}

export default App;
