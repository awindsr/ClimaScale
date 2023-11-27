import { Link } from "react-router-dom";
import { FcGlobe } from "react-icons/fc";
import homePage from "../assets/carbon-home.gif";
import "./Home.css";

function Home(props) {
  return (
    <div className="home">
      <button className="start">
        <Link to="/transportation">Start the Analysis</Link>
      </button>

      <a
        href="https://www.conservation.org/stories/what-is-a-carbon-footprint"
        target="_blank"
        rel="noreferrer"
        id="carbon-footprint"
      >
        What is Carbon Footprint?
      </a>
    </div>
  );
}

export default Home;
