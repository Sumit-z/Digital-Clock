import ClockHeading from "./components/ClockHeading";
import ClockInfo from "./components/ClockInfo";
import ClockTime from "./components/ClockTime";
import ClockDate from "./components/ClockDate";
import './App.css'
function App() {
  return (
    <center>
    <div className="clock-container">
      <ClockHeading/>
      <ClockInfo/>
      <ClockTime/>
      <ClockDate/>
      
    </div>
    </center>
  )
}

export default App
