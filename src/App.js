import './App.css';
import Login from './Login'
import Signup from './Signup'
import FindId from './FindId'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/FindId" element={<FindId />} />
        </Routes>
    </Router>
  );
}

export default App;
