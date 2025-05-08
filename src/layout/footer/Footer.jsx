import "./Footer.css";
import correo from "../../assets/correo.png";
import informacion from "../../assets/informacion.png";

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="name">AJLS</h1>
      <p className="copyright">©Copyright AJLS Pulmonary Dangerous 2025</p>
      <div className="links">
          <a >Mapa del sitio</a>
          <a >Terminos y condiciones</a>
      </div>

      {/* <div className="nav-links">
        <a href="#">
          <img src={correo} alt="Correo" className="correo" />
        </a>
        <a href="#">
            <img src={informacion} alt="Informacion" className="informacion"/>
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;