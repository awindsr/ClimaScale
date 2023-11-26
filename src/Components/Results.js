import { useContextProvider } from "./Provider.js";
import usa from "../assets/us-flag.png";
import japan from "../assets/japan-flag.png";
import columbia from "../assets/columbia-flag.png";
import bangladesh from "../assets/bangladesh-flag.png";
import down from "../assets/green-arrow.png";
import up from "../assets/red-arrow.png";
import "./Results.css";
import { Link } from "react-router-dom";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function Results() {
  const { result, setResult, categories } = useContextProvider();
  const compare = (result * 12) / 2000;

  return (
    <div className="results">
      <h2>
        TONS of CO2
        <br />
        <span>(per capita)</span>
      </h2>
      <div className="results-chart">
        <section className="monthly">
          <h4>Monthly</h4>
          <span>{(result / 2000).toFixed(2)}</span>
        </section>
        <section className="monthly">
          <h4>Annually</h4>
          <span style={compare > 13.68 ? { color: "red" } : { color: "green" }}>
            {compare.toFixed(2)}
          </span>
        </section>
      </div>
      <section className="flags">
        <span>
          <img src={usa} alt="flag" />
          <p>
            <span>USA (13.68)</span>
            <img
              className="arrow"
              src={compare > 13.68 ? up : down}
              alt="arrow"
            />
          </p>
        </span>
        <span>
          <img src={japan} alt="flag" />
          <p>
            <span>Japan (8.39) </span>
            <img
              className="arrow"
              src={compare > 8.39 ? up : down}
              alt="arrow"
            />
          </p>
        </span>
        <span>
          <img src={columbia} alt="flag" />
          <p>
            <span>Columbia (1.8) </span>
            <img
              className="arrow"
              src={compare > 1.8 ? up : down}
              alt="arrow"
            />
          </p>
        </span>
        <span>
          <img src={bangladesh} alt="flag" />
          <p>
            <span>Bangladesh (.64)</span>
            <img
              className="arrow"
              src={compare > 0.64 ? up : down}
              alt="arrow"
            />
          </p>
        </span>
      </section>
      <section className="result-links">
        <Link to="/">Re-Take the Quiz</Link>
        <Link to="/tips">
          Helpful Tips <HiOutlineLightBulb size={"17px"} />
        </Link>
      </section>

      <span className="disclaimer">**These values are estimates**</span>
    </div>
  );
}
