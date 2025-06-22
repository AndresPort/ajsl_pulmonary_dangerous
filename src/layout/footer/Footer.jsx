import "./Footer.css";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <h1 className="name">AJLS</h1>
      <p className="copyright">©Copyright AJLS Pulmonary Dangerous 2025</p>
      <div className="links">
          <a onClick={() => navigate("sitemap")}>Mapa del sitio</a>
          <a onClick={() => navigate("terms-and-conditions")}>Terminos y condiciones</a>
      </div>
    </footer>
  );
};

export default Footer;
