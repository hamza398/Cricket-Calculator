import { useState } from "react";
import "../Scss/style.css";
const BowlingAverage = ()=> {
    const [wt,setWickets] = useState('0');
    const [rc, setRuns] = useState('0');
    const [economyRate,setEconomyRate] = useState(0);
    const handleClick = ()=>{
        const runs = parseInt(wt,10);
        const overs = parseInt(rc);
        if(overs!==0){
          const calculatedBowlingAverage = runs/overs;
          setEconomyRate(parseFloat(calculatedBowlingAverage.toFixed(2)))
        }
    }
  return(
    <>
      <div className="Ba">
      <h2>Bowling Average</h2>
      <h5> Bowling Avg = Total Wickets Taken / Runs Conceded
</h5>
        <label htmlFor="">
          <span>Runs</span>
            <input 
            type="number"
            id="wt"
            value={wt}
            onChange={(e)=>setWickets(e.target.value)} 
            />
        </label>
        <label htmlFor="">
          <span>Wickets</span>
            <input 
            type="text"
            id="rc"
            value={rc}
            onChange={(e)=>setRuns(e.target.value)} 
            />
        </label>
        <button onClick={handleClick}>Calculate</button>
        <p> Bowling Average : {economyRate}</p>
      </div>
      
    </>
  )
}

export default BowlingAverage;