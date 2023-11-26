import { useState } from "react";
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"
import {FcGlobe} from "react-icons/fc"
import "./Nav.css"

function Nav(props) {
    const [navbar, setNavBar] = useState(false)

    return (
        <nav>
            <FcGlobe size = {"50px"} />
           <h1>CarbonCalc</h1>
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