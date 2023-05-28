import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.endsWith("@gmail.com") && password.length >= 8) {
      setEmail("");
      setPassword("");
      navigate("/Home"); 
    } else {
      alert("Credenciales inválidas");
    }
  };
  
  return (
    <div className={style.Login}>
      <div className={style.Form}>
      <div className={style.Ciudadela}/>
      <div className={style.CiudadelaLogo}/>\
        <form onSubmit={handleSubmit}>
          <div className={style.Gmail}>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="@Gmail.com"
              onChange={handleEmailChange}
              className={style.Input}
            />
          </div>
          <div className={style.Password}>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password..."
              onChange={handlePasswordChange}
              className={style.Input}
            />
          </div>
          <button type="submit" className={style.Button}>Login</button>
          <img className={style.CuritaLog} src="http://clipart-library.com/img/1178511.png" alt="loginc" />
      <div className={style.loginD}></div>
        </form>
      </div>
    </div>
  );
};

export default Login;




