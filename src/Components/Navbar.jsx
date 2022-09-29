import { Link } from "react-router-dom"

const Navbar = () => {

    return ( 
<header class="flexbox-header">
    <nav class="navbar">
        <h1 id="northGamers">NorthGamers</h1> 
        <Link to="/">Home</Link>
        <Link to="/reviews">Reviews</Link>
    </nav>
</header>)
}

export default Navbar