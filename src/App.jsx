import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import WatchStore from './pages/WatchStore';
import Footer from './components/Footer';
import WhatsAppPopup from './components/WhatsAppPopup';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/relojes' element={<WatchStore />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <WhatsAppPopup />
      <Footer />
      <Outlet />
    </>
  );
}

export default App;
