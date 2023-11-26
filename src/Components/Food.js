import React from "react";

import { SiHappycow } from "react-icons/si";
import {
  TbPig,
  TbFish,
  TbCheese,
  TbMilk,
  TbEggs,
  TbCarrot,
  TbBrandApple,
} from "react-icons/tb";
import { GiChicken, GiWheat, GiFarmer, GiRiver } from "react-icons/gi";
import { BiBowlRice } from "react-icons/bi";

import { useNavigate } from "react-router-dom";

import { useContextProvider } from "./Provider.js";
import { useState } from "react";

import "./Food.css";

export default function Food() {
  const navigate = useNavigate();

  const { result, setResult, categories } = useContextProvider();

  const [options, setOptions] = useState([]);

  const handleOptionChange = (e) => {
    if (options.includes(e.target.value)) {
      const remove = options.filter((el) => el !== e.target.value);
      setOptions(remove);
    } else {
      setOptions([...options, e.target.value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let val = 0;
    for (let i = 0; i < options.length; i++) {
      val += Number(options[i]);
    }
    setResult(result + val);
    navigate("/home");
  };

  console.log(categories);
  console.log(options);
  return (
    <div className="food" style={{ fontFamily: "monospace" }}>
      <h2>What food items do you consume?</h2>
      <h4>
        <em>Select all that apply!</em>
      </h4>

      <form>
        <div className="food-selections">
          <label htmlFor="chicken">
            <input
              type="checkbox"
              id="chicken"
              value={categories.food["Chicken"]}
              onChange={handleOptionChange}
            />{" "}
            Chicken
            <section>
              <GiChicken size="50" />
            </section>
          </label>

          <label htmlFor="pork">
            <input
              type="checkbox"
              id="pork"
              value={categories.food["Pork"]}
              onChange={handleOptionChange}
            />{" "}
            Pork
            <section>
              <TbPig size="50" />
            </section>
          </label>

          <label htmlFor="fish (wild)">
            <input
              type="checkbox"
              id="fish (wild)"
              value={categories.food["Fish (wild)"]}
              onChange={handleOptionChange}
            />{" "}
            Wild Fish
            <section>
              <GiRiver size="50" />
              <TbFish size="50" />
            </section>
          </label>

          <label htmlFor="fish (farmed)">
            <input
              type="checkbox"
              id="fish (farmed)"
              value={categories.food["Fish (farmed)"]}
              onChange={handleOptionChange}
            />{" "}
            Farmed Fish
            <section>
              <GiFarmer size="50" />
              <TbFish size="50" />
            </section>
          </label>

          <label htmlFor="beef">
            <input
              type="checkbox"
              id="beef"
              value={categories.food["Beef"]}
              onChange={handleOptionChange}
            />{" "}
            Beef
            <section>
              <SiHappycow size="50" />
            </section>
          </label>

          <label htmlFor="dairy (cheese)">
            <input
              type="checkbox"
              id="dairy (cheese)"
              value={categories.food["Dairy (cheese)"]}
              onChange={handleOptionChange}
            />{" "}
            Cheese
            <section>
              <TbCheese size="50" />
            </section>
          </label>

          <label htmlFor="dairy (milk)">
            <input
              type="checkbox"
              id="dairy (milk)"
              value={categories.food["Dairy (milk)"]}
              onChange={handleOptionChange}
            />{" "}
            Milk
            <section>
              <TbMilk size="50" />
            </section>
          </label>

          <label htmlFor="eggs">
            <input
              type="checkbox"
              id="eggs"
              value={categories.food["Eggs"]}
              onChange={handleOptionChange}
            />{" "}
            Eggs
            <section>
              <TbEggs size="50" />
            </section>
          </label>

          <label htmlFor="rice">
            <input
              type="checkbox"
              id="rice"
              value={categories.food["Rice"]}
              onChange={handleOptionChange}
            />{" "}
            Rice
            <section>
              <BiBowlRice size="50" />
            </section>
          </label>

          <label htmlFor="wheat">
            <input
              type="checkbox"
              id="wheat"
              value={categories.food["Wheat"]}
              onChange={handleOptionChange}
            />{" "}
            Wheat
            <section>
              <GiWheat size="50" />
            </section>
          </label>

          <label htmlFor="vegetables">
            <input
              type="checkbox"
              id="vegetables"
              value={categories.food["Vegetables"]}
              onChange={handleOptionChange}
            />{" "}
            Veggies
            <section>
              <TbCarrot size="50" />
            </section>
          </label>

          <label htmlFor="fruits">
            <input
              type="checkbox"
              id="fruits"
              value={categories.food["Fruits"]}
              onChange={handleOptionChange}
            />{" "}
            Fruits
            <section>
              <TbBrandApple size="50" />
            </section>
          </label>
        </div>

        <div className="food-image-container">
          <div className="food-image"></div>
        </div>
        <p>Tip: Lower your Carbon 👣 by eating locally sourced food!</p>

        <button className="next" onClick={handleSubmit}>
          Next!
        </button>
      </form>
    </div>
  );
}
