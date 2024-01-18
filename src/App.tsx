import "./App.css";
import StrikeRate from "./components/Page";
import Economy from "./components/Economy";
import BattingAverage from "./components/Battingaverage";
import BowlingAverage from "./components/BowlingAverag";
function App() {
  return ( 
    <>
      <div className="Ana">
          <StrikeRate></StrikeRate>
          <Economy></Economy>
          <BattingAverage></BattingAverage>
          <BowlingAverage></BowlingAverage>
      </div>

    </>
  );
}

export default App;
