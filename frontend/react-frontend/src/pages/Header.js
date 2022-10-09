
import Home from './Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">


            <Router>
                <Routes>
                    <Route exact path="/home" component={Home} >
                    </Route>
                </Routes>
            </Router>
        </div>

    );
}

export default Header;