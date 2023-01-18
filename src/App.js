import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Contact from './views/Contact';
import About from './views/About';
import Navbar from './elements/Navbar';
import Posts from './views/Posts';
import Post from './views/Post';

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route index element={<Home/>} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="/posts" element={<Navbar/>}>
            <Route index element={<Posts/>}  />
            <Route path='post/:id' element={<Post />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
