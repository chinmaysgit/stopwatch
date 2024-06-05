import {useState, useEffect} from 'react'
function Stopwatch() {

  const [time, setTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [msg, setMsg] = useState("");
  function startAndStop(){
    if(msg){
      setMsg("");
    }
    setIsStarted(!isStarted);
  }
  function reset(){
    if(isStarted){
      setMsg("First pause, then reset");
    }else{
    setTime(0);
    setMsg("");
    }
  }
  useEffect(() => {
    let id;
    if(isStarted)
    id = setInterval(() => setTime(pre => pre+10),10);
  
    return () => {
      clearInterval(id);
    }
  }, [isStarted])

  let hr = Math.floor(time/3600000);
  let min = Math.floor((time % 3600000) / 60000);
  let sec = Math.floor((time % 60000) / 1000);
  return (
    <>
      <h2 style={{color: "red"}}>{msg}</h2>
      <div className="container">
        <div className="timer">
          <span className="hr time">{hr < 10 ? "0"+hr : hr}</span>
          <span className="min time">{min < 10 ? "0"+min : min}</span>
          <span className="sec time">{sec < 10 ? "0"+sec : sec}</span>
          <span className="mSec">{time < 10 ? "0"+time%100 : time%100}</span>
        </div>
        <div className="btns">
          <button style={{backgroundColor: isStarted ? "#ff4949" : "rgb(0, 119, 255)"}} onClick={() => startAndStop()}>{isStarted ? "Pause" : "Start"}</button>
          <button onClick={() => reset()}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default Stopwatch;
