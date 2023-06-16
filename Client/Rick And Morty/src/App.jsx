import { Route, Routes, useLocation } from 'react-router-dom';
import CardsPage from './components/CardPage/CardsPage';
import About from './components/About/About';
import Home from './components/home/home';
import Details from './components/CardPage/Cards/Details/Details';
import Error from './components/Error/Error';
import Nav from './components/Nav/Nav';
import Favorites from './components/CardPage/Favorites/favorites';
import Login from './components/Login/Login';
import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/loading/load';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
      setIsLoading(true);
    };
  }, [pathname]);

  return (
    <div>
      {isLoading ? (
      <LoadingScreen/>
      ) : (
        <div>
          {pathname === '/' ? null : pathname === '/Home' ? null : <Nav />}
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
      )}
    </div>
  );
}

export default App;




