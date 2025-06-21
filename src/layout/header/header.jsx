import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "/firebase.config.js"; 
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

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

          {/* Dropdown enfermedades */}
          <li className="dropdown">
            <a>Enfermedades</a>
            <ul className="dropdown-menu">
              <li><a onClick={() => navigate("/lungs-cancer")}>Cáncer de pulmón</a></li>
              <li><a onClick={() => navigate("/e-c-p")}>Enfermedad crónica pulmonar</a></li>
              <li><a onClick={() => navigate("/pneumonia")}>Neumonía</a></li>
              <li><a onClick={() => navigate("/tuberculosis")}>Tuberculosis</a></li>
            </ul>
          </li>

          {user && <li><a onClick={() => navigate("/quiz")}>Quiz interactivo</a></li>}
          <li><a onClick={() => navigate("/about")}>Sobre nosotros</a></li>
        </ul>

        <div className="buttons">
          {user ? (
            <>
              <button className="btn white" onClick={() => navigate("/perfil")}>Perfil</button>
              <button className="btn red" onClick={handleLogout}>Cerrar sesión</button>
            </>
          ) : (
            <>
              <button className="btn white" onClick={() => navigate("/login")}>Ingresar</button>
              <button className="btn green" onClick={() => navigate("/register")}>Registrarse</button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
