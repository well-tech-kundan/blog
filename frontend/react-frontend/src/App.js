
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Stores from './pages/Stores';
import Clubs from './pages/Clubs';
import Events from './pages/Events';
import Loader from './pages/Loader';

//this couter will check if loader has been run or not
window.counter = 0;


function App() {
  return (
    <div className="App">
      <Router>
        <Loader />
        <Routes>
          <Route index element={<Home />} />
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
