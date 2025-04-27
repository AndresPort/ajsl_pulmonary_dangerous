import { NavLink } from "react-router";
import "./Header.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="logo-container">
        <a onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <h1 className="tittle_name">AJLS Pulmonary Dangers</h1>
      </div>
      <div className="nav-buttons">
        <nav className="nav-links">
          <a onClick={() => navigate("/")}>Inicio</a>
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
