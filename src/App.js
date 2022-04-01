import './App.css';
import Login from './Login'
import SignupS1 from './SignupS1'
import SignupS2 from './SignupS2'
import FindId from './FindId'
import GoHome from './Home'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignupS1" element={<SignupS1 />} />
        <Route path="/SignupS2" element={<SignupS2 />} />
        <Route path="/FindId" element={<FindId />} />
        <Route path="/Home" element={<GoHome />} />
        </Routes>
    </Router>
  );
}

export default App;
