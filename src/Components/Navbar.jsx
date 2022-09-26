import { Link } from "react-router-dom"

const Navbar = () => {
    return ( 
<header>
    <nav>
        <h1>NorthGamers</h1> 
        <Link to="/">Home</Link>
        <Link to="/reviews">Reviews</Link>
        <p>Users</p>
        <p>Games</p>
    </nav>
</header>)
}

export default Navbar