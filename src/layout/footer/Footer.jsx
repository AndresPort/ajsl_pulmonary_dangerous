import "./Footer.css";
import correo from "../../assets/correo.png";
import informacion from "../../assets/informacion.png";

const Footer = () => {
  return (
    <footer>
    <div className="footer">
        <h1>AJLS</h1>
    <div className="copyright">
            &copy; {new Date().getFullYear()}
    </div> 
    <div className="links">
        <a href="#">Mapa del sitio</a>
        <a href="#">Terminos y condiciones</a>
    </div>
        <div className="nav-buttons">
    <nav className="nav-links">
        <a href="#">
          <img src={correo} alt="Correo" className="correo" />
        </a>
        <a href="#">
            <img src={informacion} alt="Informacion" className="informacion"/>
        </a>
    </nav>
    </div>
    </div>
    </footer>
  );
};

export default Footer;