import './App.css';
import GetDataFetch from './components/GetDataFetch';
import GetDataXHR from './components/GetDataXHR';

function App() {

  return (
    <div className="App">
      <h1>API + FETCH</h1>
      <GetDataXHR />
      <GetDataFetch />
    </div>
  );
}

export default App;
