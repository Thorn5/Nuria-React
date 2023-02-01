import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './elements/Navbar';
import Home from './views/Home';
import ReactNews from './views/ReactNews';

function App() {

  return (
    <div className="App">
      <>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route index element={<Home/>} />
            <Route path="react-news" element={<ReactNews />} />
          </Route>

        </Routes>
    </>
    </div>
  );
}

export default App;
