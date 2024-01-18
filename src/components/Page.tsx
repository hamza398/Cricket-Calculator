import React, { useState } from "react";
import "../Scss/style.css";

const StrikeRate = () => {
  const [runs, setRuns] = useState("0");
  const [balls, setBalls] = useState("0");
  const [strikeRate, setStrikeRate] = useState(0);
  const handleClickEvent = () => {
    if (parseInt(balls, 10) !== 0) {
      const calculatedStrikeRate =
        (parseInt(runs, 10) / parseInt(balls, 10)) * 100;
      setStrikeRate(parseFloat(calculatedStrikeRate.toFixed(2)));
    } else {
      setStrikeRate(parseFloat(calculatedStrikeRate.toFixed(1)));
    }
  };

  return (
    <>
      <div className="Sr">
        <h2>SR Calculator</h2>
        <h5>SR = (Runs Scored / Balls Faced) x 100</h5>
        <label htmlFor="">
          <span>Runs</span>
          <input
            type="text"
            id="runs"
            value={runs}
            onChange={(e) => setRuns(e.target.value)}
          />
        </label>

        <label htmlFor="">
          <span>Balls</span>
          <input
            type="text"
            id="balls"
            value={balls}
            onChange={(e) => setBalls(e.target.value)}
          />
        </label>
        <button onClick={handleClickEvent}>Calculate</button>
        <p>Strike Rate: {strikeRate}</p>
      </div>
    </>
  );
};

export default StrikeRate;
