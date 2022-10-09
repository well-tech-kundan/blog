
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.gif';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Stores from './pages/Stores';
import Clubs from './pages/Clubs';
import Events from './pages/Events';

let counter = 0;

const handleClick = () => {
  counter++;
  console.log("counter", counter);
  var element = document.getElementById("myDiv");
  element.style.display = "none";
};
function App() {
  return (
    <div className="App">
      <Router>
        <div  id="myDiv" className="App-link">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p />
            <p />
            <Link className="App-link" to="/home" onClick={handleClick}>Welcome to a new dimension of Wellness</Link>
          </header>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
