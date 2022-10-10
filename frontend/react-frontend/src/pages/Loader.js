
import { Link } from 'react-router-dom';
import logo from '../logo.gif';


const handleClick = () => {
    window.counter++;
    var element = document.getElementById("myDiv");
    if (window.counter > 0)
        element.style.display = "none";
};

const Loader = () => {
    return (
        <div className="loader">

            <div id="myDiv" className="App-link">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p />
                    <p />
                    <Link className="App-link" to="/" onClick={handleClick}>Welcome to a new dimension of Wellness</Link>
                </header>
            </div>
        </div>

    );
}

export default Loader;