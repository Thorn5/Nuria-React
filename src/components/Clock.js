import React, { useState, useEffect } from 'react';

const Clock = () => {
    
 const [clock, setClock] = useState(new Date().toLocaleTimeString());

 const tick = () => {
    setClock(new Date().toLocaleTimeString())
 };

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
        It is {clock}
    </div>
  )
}

export default Clock