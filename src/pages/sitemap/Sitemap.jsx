import "./Sitemap.css";

const SiteMap = () => {
  return (
    <div className="site-map-page">
      <section className="section">
        <div className="content">
          <div className="text-container">
            <h1>Mapa del Sitio</h1>
            <ul className="site-map">
              <li><a href="/">Inicio</a></li>
              <li>
                <span>Enfermedades</span>
                <ul>
                  <li><a href="/lungs-cancer">Cáncer de Pulmón</a></li>
                  <li><a href="/e-c-p">Enfermedad Crónica Pulmonar</a></li>
                  <li><a href="/pneumonia">Neumonía</a></li>
                  <li><a href="/tuberculosis">Tuberculosis</a></li>
                </ul>
              </li>
              <li><a href="/quiz">Quiz Interactivo</a></li>
              <li><a href="/about">Sobre Nosotros</a></li>
              <li><a href="/login">Ingresar</a></li>
              <li><a href="/register">Registrarse</a></li>
              <li><a href="/perfil">Perfil</a></li>
              <li><a href="/terms-and-conditions">Términos y Condiciones</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SiteMap;
