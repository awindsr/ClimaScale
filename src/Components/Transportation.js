import { AiFillCar, AiOutlineCar } from "react-icons/ai";
import { MdOutlineDirectionsBike } from "react-icons/md";
import {
  BsAirplaneEngines,
  BsAirplaneFill,
  BsTrainLightrailFront,
  BsFlag,
} from "react-icons/bs";
import { BiGasPump, BiWorld } from "react-icons/bi";
import { GiElectric } from "react-icons/gi";
import { TbBrandTailwind } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContextProvider } from "./Provider.js";

import "./Transportation.css";

export default function Transportation() {
  const [checked, setChecked] = useState({
    gas_car: false,
    elec_car: false,
    bicycle: false,
    dom_flight: false,
    int_flight: false,
    mass_transit: false,
  });

  const { result, setResult, categories } = useContextProvider();

  const navigate = useNavigate();

  const iconSize = 40;

  const handleCheck = (e) => {
    setChecked({ ...checked, [e.target.id]: !checked[e.target.id] });
  };

  const calculateCarbFootprint = () => {
    let totalCarbFoorprint = 0;

    for (let el in checked) {
      if (checked[el]) {
        totalCarbFoorprint += categories.transportation[el];
      }
    }

    setResult(result + totalCarbFoorprint);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateCarbFootprint();
    navigate("/food");
  };

  return (
    <form onSubmit={handleSubmit} className="transpo-form">
      <h2>What methods of Transportation do you use?</h2>
      <h4>
        <em>Select all that apply!</em>
      </h4>

      <div className="selections">
        <label htmlFor="gas_car">
          <input
            type="checkbox"
            id="gas_car"
            value={checked.gas_car}
            onChange={handleCheck}
          />{" "}
          Gas
          <section>
            <AiOutlineCar size={iconSize} />
            <BiGasPump size={iconSize} />
          </section>
        </label>

        <label htmlFor="elec_car">
          <input
            type="checkbox"
            id="elec_car"
            value={checked.elec}
            onChange={handleCheck}
          />{" "}
          Electric
          <section>
            <AiFillCar size={iconSize} />
            <GiElectric size={iconSize} />
          </section>
        </label>

        <label htmlFor="bicycle">
          <input
            type="checkbox"
            id="bicycle"
            value={checked.bike}
            onChange={handleCheck}
          />{" "}
          Bicycle
          <section>
            <TbBrandTailwind size={iconSize} />
            <MdOutlineDirectionsBike size={iconSize} />
          </section>
        </label>

        <label htmlFor="mass_transit">
          <input
            type="checkbox"
            id="mass_transit"
            value={checked.mass_transit}
            onChange={handleCheck}
          />{" "}
          Mass Transit
          <section>
            <BsTrainLightrailFront size={iconSize} />
            <IoIosPeople size={iconSize} />
          </section>
        </label>

        <label htmlFor="dom_flight">
          <input
            type="checkbox"
            id="dom_flight"
            value={checked.dom_flight}
            onChange={handleCheck}
          />{" "}
          Domestic
          <section>
            <BsAirplaneEngines size={iconSize} />
            <BsFlag size={iconSize} />
          </section>
        </label>

        <label htmlFor="int_flight">
          <input
            type="checkbox"
            id="int_flight"
            value={checked.int_flight}
            onChange={handleCheck}
          />{" "}
          International
          <section>
            <BsAirplaneFill size={iconSize} />
            <BiWorld size={iconSize} />
          </section>
        </label>
      </div>

      <div className="transpo-image-container">
        <div className="transpo-image"></div>
      </div>
      <p>Tip: Lower your Carbon 👣 by walking or biking to work!</p>

      <button className="next" type="sumbit">
        Next!
      </button>
    </form>
  );
}
