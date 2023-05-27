import React, { useState } from "react";
import style from './Nav.module.css';
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredA, setIsHoveredA] = useState(false);

  const handleHoverA = () => {
    setIsHoveredA(true);
  };

  const handleLeaveA = () => {
    setIsHoveredA(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={style.Nav}>
      <img className={style.Img} src="https://pocketmortys.net/images/tournament_1_en.png" alt="rick" />
      <hr />
      <img
        className={`${style.ImgHome} ${isHovered ? style.tambaleo : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src="https://img-04.stickers.cloud/packs/344b8e94-859b-4407-8266-be505720c5a0/webp/857dc8c9-285d-4ac8-ac6c-8e8017cfc974.webp"
        alt=""
      />
      <button className={style.PHome}>
        <NavLink className={`${style.NavLink} ${isHovered ? style.NavLinkAnimation : ""}`} to='/Home'>Home</NavLink>
      </button>
      <hr className={style.hr2} />
      <img
        className={style.ImgCards}
        src="https://img-04.stickers.cloud/packs/344b8e94-859b-4407-8266-be505720c5a0/webp/a8610374-dbb1-4eb4-9d46-e42735eea955.webp"
        alt=""
      />
      <button className={style.PCards}>
        <NavLink className={`${style.NavLink} ${isHovered ? style.NavLinkAnimation : ""}`} to='/CardsPage'>Cards</NavLink>
      </button>
      <hr className={style.hr3} />
      <button className={style.PAbout}>
        <NavLink className={`${style.NavLink} ${isHovered ? style.NavLinkAnimation : ""}`} to='/About'>About</NavLink>
      </button>
      <img
        className={style.ImgAbout}
        src="https://img-04.stickers.cloud/packs/344b8e94-859b-4407-8266-be505720c5a0/webp/d83a97fb-9176-44fc-a7bd-763c6f84a091.webp"
        alt=""
      />
      <button className={`${style.PFav} button`}>
        <NavLink
          className={`${style.NavLink} ${isHoveredA ? style.NavLinkAnimation : ''}`}
          to="/Fav"
          onMouseEnter={handleHoverA}
          onMouseLeave={handleLeaveA}
        >
          Fav
        </NavLink>
      </button>
      <div className={style.Difuminado}></div>
      <img className={style.Curita1} src="http://clipart-library.com/img/1178511.png" alt="" />
      <img className={style.Curita2} src="http://clipart-library.com/img/1178511.png" alt="" />
      <img className={style.Curita3} src="http://clipart-library.com/img/1178511.png" alt="" />
    </div>
  );
}

export default Nav;
