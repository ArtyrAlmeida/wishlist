import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Artur's Wishlist</Link>
            </div>
        </nav>
    )
}

export default Navbar;