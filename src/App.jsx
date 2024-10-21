import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import WatchStore from './pages/WatchStore';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/relojes' element={<WatchStore />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
