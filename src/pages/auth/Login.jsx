import React from 'react';
import './Login.css';
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router";
import { useCallback } from "react";
import google from "../../assets/google.png";
import login from "../../assets/login.png";

const Login = () => {
  const { loginGoogleWithPopUp } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp()
      .then(() => navigate("/perfil"))
      .catch(() => navigate("/"));
  }, [loginGoogleWithPopUp, navigate]);

  return (
    <div className="login-container">
      <div className="left-section">
        <h1>Inicia ahora para disfrutar de toda la experiencia</h1>
        <p>Si ya tienes una cuenta ¡empieza ahora!</p>
        <img src={login} alt="login" className="brain-image" />
      </div>

      <div className="form-section">
        <h2>Bienvenido de nuevo</h2>
        <input type="email" placeholder="Ingresar correo" />
        <input type="password" placeholder="Contraseña" />
        <a href="#" className="forgot">¿Olvidaste tu contraseña?</a>
        <button className="login-btn">Iniciar sesión</button>
        <p className="separator">O continúa con</p>
        <button className="google-btn" onClick={handleLogin}>
          <img src={google} alt="google" />
        </button>
      </div>
    </div>
  );
};

export default Login;

