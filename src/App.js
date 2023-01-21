import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './elements/Navbar';
import IssuesList from './views/Issues';
import IssueDetail from './views/IssueDetail';

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route index element={<Home/>} />
          </Route>
          <Route path="/issues" element={<Navbar/>}>
            <Route index element={<IssuesList />}/>
            <Route path='issue/:id' element={<IssueDetail />}/>
          </Route>
        </Routes>
    </>
  );
}

export default App;
