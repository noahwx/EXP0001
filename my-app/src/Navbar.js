import { NavLink } from "react-router-dom";
import Logo from './Logo.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="./pages/Home"><img src={Logo} className="navlogo"/></NavLink>
            <div className="navlinks">
                <NavLink to="/" className="navlink">Home</NavLink>
                <NavLink to="./pages/About" className="navlink">About</NavLink>
                <NavLink to="./pages/Projects" className="navlink">Projects</NavLink>
            </div>
        </nav>
    );
}
 
export default Navbar;