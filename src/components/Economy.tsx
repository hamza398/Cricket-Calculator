import { useState } from "react";
import "../Scss/style.css";
const Economy = ()=> {
    const [rc,setRuns] = useState('0');
    const [ob, setOvers] = useState('0');
    const [economyRate,setEconomyRate] = useState(0);
    const handleClick = ()=>{
        const runs = parseInt(rc,10);
        const overs = parseInt(ob);
        if(overs!==0){
          const calculatedEconomyRate = runs/overs;
          setEconomyRate(parseFloat(calculatedEconomyRate.toFixed(2)))
        }
    }
  return(
    <>
      <div className="Ec">
      <h2>Economy Calculator</h2>
      <h5>ER = (Runs Conceded / Overs Bowled) x 6</h5>
        <label htmlFor="">
          <span>Runs</span>
            <input 
            type="number"
            id="rc"
            value={rc}
            onChange={(e)=>setRuns(e.target.value)} 
            />
        </label>
        <label htmlFor="">
          <span>Overs</span>
            <input 
            type="text"
            id="ob"
            value={ob}
            onChange={(e)=>setOvers(e.target.value)} 
            />
        </label>
        <button onClick={handleClick}>Calculate</button>
        <p> Economy : {economyRate}</p>
      </div>
      
    </>
  )
}

export default Economy;