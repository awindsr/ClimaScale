import { useState } from "react";
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"
import {FcGlobe} from "react-icons/fc"
import logo from '../assets/logo.png';
import "./Nav.css"

function Nav(props) {
    const [navbar, setNavBar] = useState(false)

    return (
        <nav>
            <div className="logocontainer" id="logocontainer">
                <img id="logo" src={logo} alt="flag"/>
            </div>
           <h1>ClimaScale</h1>
           <button
           onClick = {() => setNavBar(!navbar) }>
            <GiHamburgerMenu size = {"30px"} />
           </button>

           {
            navbar &&
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/tips">Tips</Link>
            </div>
           }
        </nav>
    );
}

export default Nav;