import React, {useContext} from 'react';
import { CounterContext } from '../context/CounterProvider';

const Home = () => {

  const {incrementCounter, decrementCounter, counter} = useContext(CounterContext);

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={incrementCounter}>Increment</button>
      {counter}
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
};

export default Home;