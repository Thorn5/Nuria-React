import './App.css';
import Click from './components/Click';
import ClickClassBased from './components/ClickClassBased';
import Clock from './components/Clock';
import ClockClassBased from './components/ClockClassBased';
// import NewComponent from './components/NewComponent';
// import Text from './components/Text';

function App() {

  return (
    <div className="App">
      <h1>React useState</h1>
      <ClockClassBased />
      <ClickClassBased />
      <Click />
      <Clock />
      {/* <Text />
      <NewComponent /> */}
    </div>
  );
}

export default App;
