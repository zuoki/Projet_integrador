import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './Login.module.css'

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

    // Verificar si el correo electrónico es de Gmail y la contraseña tiene al menos 8 caracteres
    if (email.endsWith("@gmail.com") && password.length >= 8) {
      setEmail("");
      setPassword("");
      navigate("/Home"); // Redirigir al usuario a la página "/Home"
    } else {
      console.log("Credenciales inválidas");
    }
  };

  return (
    <div className={style.Login}>
      <div className={style.Form}>

      <p>Login</p>
      <form onSubmit={handleSubmit}>
        <div className={style.Gmail} >
          <label>Email:</label>
          <input  type="email" name="email" value={email} placeholder="@Gmail.com"onChange={handleEmailChange}/>
        </div>
        <div className={style.Password}>
          <label>Pass:</label>
          <input type="password" name="password"  value={password} placeholder="Password..." onChange={handlePasswordChange}/>
        </div>
        <button type="submit">Login</button>
      </form>
     </div>
    </div>
  );
};

export default Login;



