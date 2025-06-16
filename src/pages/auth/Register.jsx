import React from 'react';
import './Register.css';
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router";
import { useCallback } from "react";
import google from "../../assets/google.png";
import register from "../../assets/register.png";

const Register = () => {
  const { loginGoogleWithPopUp } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp()
      .then(() => navigate("/perfil"))
      .catch(() => navigate("/"));
  }, [loginGoogleWithPopUp, navigate]);
  return (
    <div className="register-container">
      <div className="left-section">
        <h1>Únete a AJLS y empieza tu viaje creativo.</h1>
        <p>Crea tu cuenta para comenzar.</p>
        <img src={register} alt="brain" className="brain-img" />
      </div>

      <div className="form-section">
        <h2>Regístrate</h2>
        <input type="text" placeholder="Nombre completo" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button className="register-btn">Crear cuenta</button>
        <p className="separator">O continúa con</p>
        <button className="google-btn" onClick={handleLogin}>
          <img src={google} alt="google" />
        </button>
      </div>
    </div>
  );
};

export default Register;

