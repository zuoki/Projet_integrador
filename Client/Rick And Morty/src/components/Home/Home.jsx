import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './Home.module.css'
import textoHome from './txtHome.png'
import curita from './curita.png'

const Home = () => {
  const navigate = useNavigate();
  const [isFixed, setIsFixed] = useState(false);
  const [isFixedC, setIsFixedC] = useState(false);

  const handleContainerClick = () => {
    setIsFixed(!isFixed);
  };

  const handleContainerClickC = () => {
    setIsFixedC(!isFixedC);
  };

  const handleLogout = (event) => {
    navigate("/");
  };

  const handleCardsPage = (event) => {
    navigate("/CardsPage");
  };

  const handleAbout = (event) => {
    navigate("/About");
  };

  return (
    <div className={style.HomeDiv}>
      <div className={style.HomeDifuminado}>
        <div
          className={`${style.TituloContainer} ${
            isFixed ? style.FixedContainer : ""
          }`}
          onClick={handleContainerClick}
        >
          <div className={style.TituloHome}></div>
        </div>
        <div className={style.HomePage}>
          <img className={style.txtH} src={textoHome} alt="" />
          <div className={style.tv}></div>
          <div className={style.tvInterference}></div>
          <div className={style.difu2}></div>
          <div className={style.pintTV}></div>
          <div
            className={`${style.portal} ${
              isFixedC ? style.portalVisible : ""
            }`}
          ></div>
          <img className={style.curita} src={curita} alt="" />
        </div>
        <div
          onClick={handleCardsPage}
          className={`${style.navoff} ${isFixedC ? style.navCards : ""}`}
        ></div>
        <button onClick={handleLogout} className={style.logout}>
          Log out
        </button>
        <div
          onClick={handleContainerClickC}
          className={`${style.ChomeC} ${
            isFixedC ? style.FixedContainerC : ""
          }`}
        >
          <div className={style.Chome}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

