import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useContextProvider } from "./Provider.js";
import "./HomeConsumption.css";

export default function HomeConsumption() {
  const { result, setResult, categories } = useContextProvider();
  const navigate = useNavigate();

  const [selection, setSelection] = useState([]);

  const handleChecked = (e) => {
    if (selection.includes(e.target.value)) {
      let filtered = selection.filter((el) => el !== e.target.value);
      setSelection(filtered);
    } else {
      setSelection([...selection, e.target.value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let sum = selection.reduce((acc, el) => (acc += Number(el)), 0);
    setResult(result + sum);
    navigate("/general");
  };

  return (
    <>
      <div className="homeConsumption">
        <h2 className="home_q">In your home, what do you use?</h2>
        <h4 className="home_sub">Select all that apply!</h4>
        <form className="home_form" onSubmit={handleSubmit}>
          <h4 className="home_sub_q">Electricity Source?</h4>
          <label htmlFor="electricity (coal)">
            <input
              type="checkbox"
              id="electricity (coal)"
              value={categories.home["Electricity (coal)"]}
              onChange={handleChecked}
            />
            Coal
          </label>
          <label htmlFor="electricity (natural gas)">
            <input
              type="checkbox"
              id="electricity (natural gas)"
              value={categories.home["Electricity (natural gas)"]}
              onChange={handleChecked}
            />
            Natural Gas
          </label>
          <label htmlFor="electricity (renewable)">
            <input
              type="checkbox"
              id="electricity (renewable)"
              value={categories.home["Electricity (renewable)"]}
              onChange={handleChecked}
            />
            Renewable
          </label>
          <hr></hr>
          <hr></hr>
          <h4 className="home_sub_q">Heating Source?</h4>
          <label htmlFor="natural gas (heating)">
            <input
              type="checkbox"
              id="natural gas (heating)"
              value={categories.home["Natural gas (heating)"]}
              onChange={handleChecked}
            />
            Natural gas
          </label>
          <label htmlFor="oil (heating)">
            <input
              type="checkbox"
              id="oil (heating)"
              value={categories.home["Oil (heating)"]}
              onChange={handleChecked}
            />
            Oil
          </label>
          <label htmlFor="propane (heating)">
            <input
              type="checkbox"
              id="propane (heating)"
              value={categories.home["Propane (heating)"]}
              onChange={handleChecked}
            />
            Propane
          </label>
          <button className="next" onClick={handleChecked}>
            Next!
          </button>
        </form>
      </div>
    </>
  );
}
