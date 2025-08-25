'use client';
import React, {useState, useEffect} from 'react'
import './clock.css'


const DigitalClockApp = (props) => {

  const [time, setTime] = useState(new Date());
  const clockType = props.type;

  useEffect(() => {
      const intervalId = setInterval(() => { setTime(new Date()) }, 1000)

      return () => {
        clearInterval(intervalId);
      }
  }, []);

  function formatTime(timeType){
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    //convert from military time
      hours = hours % 12 || 12;

    return <>
    {/* `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`; */}
        <h1>Current Time:</h1>
        <div className='clock-container-inner'>
            <div className="singleClock">
                <p className="digits">{padZero(hours)}</p> 
                <p className="Sep">:</p>
                <p className="digits">{padZero(minutes)}</p>
                <p className="Sep">:</p>
                <p className="digits">{padZero(seconds)}</p>
                <p className="meridiem">{meridiem}</p>
            </div>
        </div>
    </>
  }


  function countdownToMidnight(){
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    const targetDate = new Date(props.targetDateTime); // Get target date from props
    const targetDateTime = targetDate.getTime();

    // const timeLeft = midnight - now;
    const timeLeft = targetDateTime - now;

    // math for timer
    const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
    const hours = Math.floor(timeLeft / 1000 / 60 / 60 ) % 24;
    const minutes = Math.floor(timeLeft / 1000 / 60 ) % 60;
    const seconds = Math.floor(timeLeft / 1000 ) % 60; 

    // math for percentages
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate(); // Get total days in month
    const daysPer = Math.floor((days / daysInMonth) * 100);  
    const hoursPer = Math.floor((hours / 24) * 100);
    const minutesPer = Math.floor((minutes / 60) * 100);
    const secondsPer = Math.floor((seconds / 60) * 100);

    // return `${padZero(days)}:${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    if(timeLeft < 0){
        return <>
            <div className='clock-container-over'>
                <h2>The wait is over</h2>
                <h3>Day Camp Is Open!</h3>
                {/* <div className="singleClock">
                    <p className="digits">00</p> 
                    <p className="Sep">:</p>
                    <p className="digits">00</p>
                    <p className="Sep">:</p>
                    <p className="digits">00</p>
                </div> */}
            </div>
        </>
    }else{
        return <>
                {/* <h1>{"Time Until: "+targetDate.toDateString()}</h1> */}
                <div className='clock-container-inner'>
                    <div className="clockFeatureText">
                        <h2>Hurry, Enroll Today!</h2>
                        <h3>Day Camp Opens In</h3>
                    </div>
                    <ul className="clock">
                        <li className="days">
                            <div className="progressbar" suppressHydrationWarning={true} role="progressbar" aria-valuenow={daysPer} aria-timenow={padZero(days)} aria-live="polite" style={{'--progress': daysPer+"%"}}>
                                <span>This <em>really awesome feature</em> requires JS</span>
                            </div>
                            <div className="clock-numbers">
                                <span className="output" suppressHydrationWarning={true}>{padZero(days)}</span> 
                                <span className="definer">Days</span>
                            </div>                     
                        </li>
                            <li className="Sep">:</li>
                        <li className="hours">
                            <div className="progressbar" role="progressbar" suppressHydrationWarning={true} aria-valuenow={hoursPer} aria-timenow={padZero(hours)} aria-live="polite" style={{'--progress': hoursPer+"%"}}>
                            <span>This <em>really awesome feature</em> requires JS</span>
                            </div>
                            <div className="clock-numbers">
                                <span className="output" suppressHydrationWarning={true}>{padZero(hours)}</span> 
                                <span className="definer">Hours</span>
                            </div>
                        </li>
                            <li className="Sep">:</li>
                        <li className="minutes">
                            <div className="progressbar" role="progressbar" suppressHydrationWarning={true} aria-valuenow={minutesPer} aria-timenow={padZero(minutes)} aria-live="polite" style={{'--progress': minutesPer+"%"}}>
                            <span>This <em>really awesome feature</em> requires JS!</span>
                            </div>
                            <div className="clock-numbers">
                                <span className="output" suppressHydrationWarning={true}>{padZero(minutes)}</span> 
                                <span className="definer">Minutes</span>
                            </div>          
                        </li>
                            <li className="Sep">:</li>
                        <li className="seconds">
                            <div className="progressbar" role="progressbar" suppressHydrationWarning={true} aria-valuenow={secondsPer} aria-timenow={padZero(seconds)} aria-live="polite" style={{'--progress': secondsPer+"%"}}>
                            <span>This <em>really awesome feature</em> requires JS</span>
                            </div>
                            <div className="clock-numbers">
                                <span className="output" suppressHydrationWarning={true}>{padZero(seconds)}</span> 
                                <span className="definer">Seconds</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </>
    }

    
  }

  function padZero(num){
    return (num < 10 ? "0" : "")+num;

  }

  return (
    <>
      <div className="clock-container">   
        <div className="triangleTopper"></div>     
        {clockType == "1" ? formatTime() : countdownToMidnight()}
      </div>
    </>
  )
}

export default DigitalClockApp