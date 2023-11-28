import { useState } from "react";
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"
import {FcGlobe} from "react-icons/fc"
import "./Nav.css"

document.addEventListener('DOMContentLoaded', function() {
    // Select the elements
    var menu = document.querySelector('.menu');
    var button = document.querySelector('nav button');
  
    // Function to toggle the menu
    function toggleMenu(event) {
      // If the clicked element is not the menu and not the button, close the menu
      if (event.target !== menu && event.target !== button && menu.style.display === 'grid') {
        menu.style.display = 'none';
      }
    }
  
    // Event listener for the button to open the menu
    button.addEventListener('click', function(event) {
      menu.style.display = menu.style.display === 'grid' ? 'none' : 'grid';
      event.stopPropagation(); // Prevent the click from being immediately caught by the document listener
    });
  
    // Event listener for clicks outside the menu
    document.addEventListener('click', toggleMenu);
  });
  
function Nav(props) {
    const [navbar, setNavBar] = useState(false)

    return (
        <nav>
            <FcGlobe size = {"50px"} />
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