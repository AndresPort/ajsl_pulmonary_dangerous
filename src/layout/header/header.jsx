import { NavLink } from "react-router";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
      <h1>AJLS Pulmonary Dangers</h1>
    </div>
    <div className="nav-buttons">
    <nav className="nav-links">
      <a href="#">Inicio</a>
      <a href="#">Enfermedades</a>
      <a href="#">Quiz interactivo</a>
      <a href="#">Sobre nosotros</a>
    </nav>
    <div className="buttons">
      <button className="btn white">Ingresar</button>
      <button className="btn green">Registrarse</button>
    </div>
    </div>
  </header>
  );
};

export default Header;