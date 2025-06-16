import { useNavigate } from "react-router";
import "./Header.css";
import logo from "../../assets/logo.png";

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
      <nav className="nav-bar">
        <ul className="nav-links">
          <li><a onClick={() => navigate("/")}>Inicio</a></li>
          
          {/* Dropdown */}
          <li className="dropdown">
            <a>Enfermedades</a>
            <ul className="dropdown-menu">
              <li><a onClick={() => navigate("/lungs-cancer")}>Cáncer de pulmón</a></li>
              <li><a onClick={() => navigate("/e-c-p")}>Enfermedad cronica pulmonar</a></li>
              <li><a onClick={() => navigate("/pneumonia")}>Neumonía</a></li>
              <li><a onClick={() => navigate("/tuberculosis")}>Tuberculosis</a></li>
            </ul>
          </li>

          <li><a onClick={() => navigate("/quiz")}>Quiz interactivo</a></li>
          <li><a onClick={() => navigate("/about")}>Sobre nosotros </a></li>
        </ul>
        <div className="buttons">
          <button className="btn white" onClick={() => navigate("/login")}>Ingresar</button>
          <button className="btn green" onClick={() => navigate("/register")}>Registrarse</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
