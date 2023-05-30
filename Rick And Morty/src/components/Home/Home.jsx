import React, { useState } from "react";
import style from './Home.module.css'

const Home=()=>{
  const [isFixed, setIsFixed] = useState(false);
  const [isFixedC, setIsFixedC] = useState(false);

  const handleContainerClick = () => {
    setIsFixed(!isFixed);
  };
  const handleContainerClickC = () => {
    setIsFixedC(!isFixedC);
  };

  return (
    <div className={style.HomeDiv}>
      <div className={style.HomeDifuminado}>
        <div
          className={`${style.TituloContainer} ${isFixed ? style.FixedContainer : ''}`}
          onClick={handleContainerClick}
        >
          <div className={style.TituloHome}></div>
        </div>
        <div className={style.HomePage}>
          <div className={style.tv}></div>
          <div className={style.tvInterference}></div>
          <div className={style.difu2}></div>
          <div className={style.pintTV}></div>
        </div>
        <div  onClick={handleContainerClickC}
        className={`${style.ChomeC} ${isFixedC ? style.FixedContainerC : ''}`}>
         <div className={style.Chome}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

