import React, { useState, useEffect } from 'react';
import Input from './Input';

const Clock = () => {
    
 const [clock, setClock] = useState(new Date().toLocaleTimeString());
 const [value, setValue] = React.useState("");

 console.log('input value', value);

 const tick = () => {
    setClock(new Date().toLocaleTimeString())
 };

 const handleChange = (newValue) => {
    setValue(newValue);
}

 useEffect(() => {
    const myTimer = setInterval(tick, 1000)
    // setInterval(() => {
    //     setClock((new Date().toLocaleTimeString()));
    //   }, 1000);
    return () => clearInterval(myTimer)
  }, [])

  return (
    <div>
        <h2>Clock Function Component</h2>
        <p>It is {clock}</p>
        {/* Update the state of parent component in child component */}
        <h2>Check the console to see how the value is updated!</h2>
        <Input value={value} handleChange={handleChange} />
    </div>
  )
}

export default Clock