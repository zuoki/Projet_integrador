import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import CardsPage from './components/CardPage/CardsPage';
import About from './components/About/About';
import Home from './components/home/home';
import Details from './components/CardPage/Cards/Details/Details';
import Error from './components/Error/Error';
import Nav from './components/Nav/Nav'
import Favorites from './components/CardPage/Favorites/favorites';
import Login from './components/Login/Login';

function App() {
  const { pathname } = useLocation();

  return (
    <div>
     {pathname === '/' ? null : <Nav />}
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/CardsPage" element={<CardsPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Details/:detail" element={<Details />} />
        <Route path="/Fav" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;



