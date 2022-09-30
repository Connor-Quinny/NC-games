import { Link } from "react-router-dom"

const Navbar = () => {

    return ( 
<header className="flexbox-header">
    <h1 id="northGamers">NorthGamers</h1> 
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/reviews">Reviews</Link>
    </nav>
</header>)
}

export default Navbar