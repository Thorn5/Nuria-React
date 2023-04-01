import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './elements/Navbar';
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import FilmForm from './views/NewFilm';

function App() {

  return (
    <div className="App">
      <>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route index element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/new_film' element={<FilmForm/>} />
          </Route>
        </Routes>
    </>
    </div>
  );
}

export default App;
