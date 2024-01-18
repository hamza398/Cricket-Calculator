import { useState } from "react";
import "../Scss/style.css";
const BattingAverage = ()=> {
    const [rs,setRuns] = useState('0');
    const [inn, setInn] = useState('0');
    const [economyRate,setEconomyRate] = useState(0);
    const handleClick = ()=>{
        const runsScored = parseInt(rs,10);
        const totalInnings = parseInt(inn,10);
        if(runsScored!==0){
          const calculatedBattingAverage = runsScored/totalInnings;
          setEconomyRate(parseFloat(calculatedBattingAverage.toFixed(2)))
        }
    }
  return(
    <>
      <div className="BA">
      <h2>Batting Average</h2>
      <h5>Average = Total Runs Scored / Number of Innings</h5>
        <label htmlFor="">
          <span>Runs</span>
            <input 
            type="number"
            id="rs"
            value={rs}
            onChange={(e)=>setRuns(e.target.value)} 
            />
        </label>
        <label htmlFor="">
          <span>Innings</span>
            <input 
            type="text"
            id="inn"
            value={inn}
            onChange={(e)=>setInn(e.target.value)} 
            />
        </label>
        <button onClick={handleClick}>Calculate</button>
        <p> Batting Average : {economyRate}</p>
      </div>
      
    </>
  )
}

export default BattingAverage;