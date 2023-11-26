import React from "react";
import { useNavigate } from "react-router-dom";
import { useContextProvider } from "./Provider.js";
import "./General.css";

import { useState } from "react";

export default function General() {
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
    navigate("/results");
  };

  return (
    <div className="general" style={{ fontFamily: "monospace" }}>
      <h1 className="general_title">General Consumption</h1>

      <form className="general_form" onSubmit={handleSubmit}>
        <h3 className="general_q"> What kind of items do you go for?</h3>
        <label htmlFor="plastic-bag">
          <input
            type="checkbox"
            id="plastic-bag"
            value={categories["general consumption"]["Single-use plastic bag"]}
            onChange={handleChecked}
          />
          Single Use Plastic Bag
        </label>
        <label htmlFor="reusable-bag">
          <input
            type="checkbox"
            id="reusable-bag"
            value={categories["general consumption"]["Reusable bag"]}
            onChange={handleChecked}
          />
          Reusable bag
        </label>

        <label htmlFor="paper-bag">
          <input
            type="checkbox"
            id="paper-bag"
            value={categories["general consumption"]["Paper bag"]}
            onChange={handleChecked}
          />
          Paper Bag
        </label>

        <label htmlFor="plastic-water-bottle">
          <input
            type="checkbox"
            id="plastic-water-bottle"
            value={categories["general consumption"]["Plastic water bottle"]}
            onChange={handleChecked}
          />
          Plastic water bottle
        </label>
        <label htmlFor="aluminum-can">
          <input
            type="checkbox"
            id="aluminum-can"
            value={categories["general consumption"]["Aluminum can"]}
            onChange={handleChecked}
          />
          Aluminum Can
        </label>
        <label htmlFor="smartphone">
          <input
            type="checkbox"
            id="smartphone"
            value={categories["general consumption"]["Smartphone"]}
            onChange={handleChecked}
          />
          Smartphone
        </label>
        <label htmlFor="laptop">
          <input
            type="checkbox"
            id="laptop"
            value={categories["general consumption"]["Laptop"]}
            onChange={handleChecked}
          />
          Laptop
        </label>
        <label htmlFor="desktop">
          <input
            type="checkbox"
            id="desktop"
            value={categories["general consumption"]["Desktop computer"]}
            onChange={handleChecked}
          />
          Desktop Computer
        </label>
        <label htmlFor="led-light-bulb">
          <input
            type="checkbox"
            id="led-light-bulb"
            value={categories["general consumption"]["LED light bulb"]}
            onChange={handleChecked}
          />
          LED light bulb
        </label>
        <label htmlFor="incandescent-light-bulb">
          <input
            type="checkbox"
            id="incandescent-light-bulb"
            value={categories["general consumption"]["Incandescent light bulb"]}
            onChange={handleChecked}
          />
          Incandescent light bulb
        </label>
        <button className="next" onClick={handleSubmit}>
          Finish!
        </button>
      </form>
    </div>
  );
}
