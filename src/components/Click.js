import React, { useState, useEffect } from 'react';

const Click = () => {
  // Declare a new state variable, which we'll call "count"
  const [countMoney, setCountMoney] = useState(0);
  const [countDays, setCountDays] = useState(1);

  //mimic componentDidMount
  useEffect(() => {
    console.log('hello useeffect');
  }, [])

  //componentWillUpdate
  useEffect(() => {
    console.log('hello countMoney and countdays');
  }, [countMoney, countDays])

  return (
    <div>
      <h2>UseState</h2>
      <p>You clicked {countMoney} times</p>
      {countMoney > 0 ? "I have money!" : null}
      <button onClick={() => setCountMoney(countMoney + 1)}>
        Increase
      </button>

      <button onClick={() => setCountMoney(countMoney - 1)}>
        Decrease
      </button>

      <button onClick={() => setCountDays(countDays + 1)}>
        Click me
      </button>

      <p>It is day {countDays}</p>
    </div>
  );
}

export default Click