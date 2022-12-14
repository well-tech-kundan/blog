
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar">

                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/stores">Store</Link>
                    <Link to="/clubs">Clubs</Link>
                    <Link to="/events">Events</Link>
                </div>

        </nav>
    );
}

export default Navbar;