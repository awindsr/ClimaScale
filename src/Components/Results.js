import React from 'react';
import { useContextProvider } from './Provider.js';
import usa from '../assets/us-flag.png';
import japan from '../assets/japan-flag.png';
import india from '../assets/india-flag.png';
import bangladesh from '../assets/bangladesh-flag.png';
import down from '../assets/green-arrow.png';
import up from '../assets/red-arrow.png';
import './Results.css';
import { Link } from 'react-router-dom';
import { HiOutlineLightBulb } from 'react-icons/hi';

function saveDataToServer(monthlyValue, annualValue) {
  // Construct the data object to send
  const data = {
    monthly: monthlyValue,
    annual: annualValue
  };

  // Use fetch to send the data to the server
  fetch('/api/save-data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}


export default function Results() {
  const { result, setResult, categories } = useContextProvider();
  const monthlyValue = (result / 2000).toFixed(2);
  const compare = (result * 12) / 2000;
  const annualValue = compare.toFixed(2);

  const handleSubmit = () => {
    saveDataToServer(monthlyValue, annualValue);
  };

  const saveDataToServer = (monthly, annual) => {
    const data = {
      monthly,
      annual
    };

    fetch('/api/save-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

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
          <span>{monthlyValue}</span>
        </section>
        <section className="monthly">
          <h4>Annually</h4>
          <span style={compare > 13.68 ? { color: 'red' } : { color: 'green' }}>
            {annualValue}
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
          <img src={india} alt="flag" />
          <p>
            <span>India (1.91) </span>
            <img
              className="arrow"
              src={compare > 1.91 ? up : down}
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
          Helpful Tips <HiOutlineLightBulb size={'17px'} />
        </Link>
      </section>
      
      {/* <button onClick={handleSubmit}>Submit Results</button> */}
      
      <span className="disclaimer">**These values are estimates**</span>
    </div>
  );
}
