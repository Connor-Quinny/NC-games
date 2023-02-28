import { Link } from "react-router-dom"
import ReviewCategories from "./ReviewCategories"

const Navbar = () => {

    return ( 
<header className="header">
 <Link to={'/reviews'}> <img src={require(`/Users/connorquinn/Desktop/Northcoders/frontend/nc-games/src/Icons/northgamers.png`)} className="logo"></img></Link>  
     <ReviewCategories />
</header>)
}

export default Navbar