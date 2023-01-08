import React, { useState, useEffect } from 'react';
import SwitchButton from './SwitchButton';

function LightBulb() {

    const [ isOn, setIsOn ] = useState(false);
    const [ count, setCount ] = useState(0);
    const [greeting, setGreeting ] = useState(false);

    const switchOn = () => {
        setIsOn(!isOn)
        setCount(count + 1)
    }

    const greet = () => {
        setGreeting(greeting);
        alert("greeting")
    }

    useEffect(() => {
        if(isOn) {
            const timeId = setTimeout(() => setIsOn(false), 5000)
            return () => clearTimeout(timeId);
        }
        
    }, [isOn])
    

  return (
    <>
    <ul>
        <li>In this component (turn it into a class, or leave it as a function), create a state that will keep track of whether the lightbulb is turned on or not</li>
        <li>Put an onClick handler on the turn me on button that will change the lightbulb's state from on to off</li>
        <li>Using the state as a toggler, conditionaly change the className of the lightbulb's holding div from "block" to "block night"</li>
        <li>Let's think about the planet and not be wasteful. Make sure that the lightbulb turns itself off after 5 seconds</li>
        <li>Using another state, keep track of how many times the light bulb has been turned on. After 10 times, tell the user he used his daily electricity limit and should light a candle instead.</li>
    </ul>
      <SwitchButton state={isOn} handleClick={switchOn} />
      <SwitchButton state={greeting} handleClick={greet} />

      <button onClick={switchOn}>Turn me {isOn ? "off" : "on"}</button>
      <button onClick={(e) =>  isOn ? setIsOn(false) : setIsOn(true)}>Turn me on</button>
      <button onClick={(e) =>  setIsOn(!isOn)}>Turn me on</button>
      {count > 10 ? (
        <p>You used your daily electricity limit and should light a candle instead</p>
      ) : null}
      <div className={isOn ? "block night" : "block"}>
        <div className="container">
          <div className="bulb-light">
            <div id="light" />

            <div id="bulb">
              <div className="bulb-top">
                <div className="reflection" />
              </div>
              <div className="bulb-middle-1" />
              <div className="bulb-middle-2" />
              <div className="bulb-middle-3" />
              <div className="bulb-bottom" />
            </div>

            <div id="base">
              <div className="screw-top" />
              <div className="screw-a" />
              <div className="screw-b" />
              <div className="screw-a" />
              <div className="screw-b" />
              <div className="screw-a" />
              <div className="screw-b" />
              <div className="screw-c" />
              <div className="screw-d" />
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default LightBulb;




