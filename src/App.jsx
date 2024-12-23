import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import WatchStore from './pages/WatchStore';
import Footer from './components/Footer';
import WhatsAppPopup from './components/WhatsAppPopup';
import Contact from './pages/Contact';
import Accesibility from './pages/Accesibility';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import CookiesBanner from './components/CookiesBanner';
import Search from './components/Search';


function App() {

  //TODO: review all alt attributes of all images for accessibility
  return (
    <>
      <NavBar />
      <Search />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/relojes' element={<WatchStore />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/accesibilidad' element={<Accesibility />} />
        <Route path='/legal' element={<Legal />} />
        <Route path='/privacidad' element={<Privacy />} />
        <Route path='/cookies' element={<Cookies />} />
      </Routes>
      <WhatsAppPopup />
      <CookiesBanner />
      <Footer />
      <Outlet />
    </>
  );
}

export default App;
