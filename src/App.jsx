import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import WatchStore from './pages/WatchStore';
import Footer from './components/Footer';
import WhatsAppPopup from './components/WhatsAppPopup';
import Contact from './pages/Contact';
import Accesibility from './pages/Accesibility';

function App() {

  //TODO: review all alt attributes of all images for accessibility
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/relojes' element={<WatchStore />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/accesibilidad' element={<Accesibility />} />
      </Routes>
      <WhatsAppPopup />
      <Footer />
      <Outlet />
    </>
  );
}

export default App;
