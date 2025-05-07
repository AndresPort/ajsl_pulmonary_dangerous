import React from "react";
import "./About.css";
import logo from "/src/assets/logo.png";
import univalleLogo from "/src/assets/univalle-logo.png";
import contactIcon from "/src/assets/contact.png";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h1>¿Quiénes somos?</h1>
        <div className="about-content">
          <div className="mission-project">
            <div>
              <h2>Nuestra Misión</h2>
              <p>
                Nuestra misión es promover la educación en salud respiratoria a
                través de una plataforma interactiva que utiliza tecnología y
                contenido dinámico. Queremos hacer que la información sobre los
                pulmones y sus enfermedades sea más accesible, visual y dinámico
                para todos.
              </p>
              <h2>Nuestro Proyecto</h2>
              <p>
                Somos un equipo de cuatro estudiantes de la Universidad del Valle,
                y nuestro proyecto es una página web innovadora que utiliza
                modelos 3D para explicar la anatomía de los pulmones y las
                enfermedades relacionadas. Nuestro objetivo es ofrecer una
                herramienta educativa que facilite la comprensión de este órgano
                vital y fomente la concienciación sobre la importancia de cuidar
                la salud respiratoria.
              </p>
            </div>
            <img src={logo} alt="AJLS Logo" className="about-logo" />
          </div>
          <div className="team-history">
            <img src={univalleLogo} alt="Universidad del Valle Logo" className="univalle-logo" />
            <div>
              <div className="team">
                <h2>Nuestro Equipo</h2>
                <ul>
                  <li>Andrés Felipe Portillo</li>
                  <li>John Deiby Tabares</li>
                  <li>Luis Eduardo Urbano</li>
                  <li>Samuel Alexis Lozano</li>
                </ul>
              </div>
              <div className="history">
                <h2>Nuestra Historia</h2>
                <p>
                  Este proyecto nació como parte de nuestra formación académica en
                  la Universidad del Valle. Motivados por nuestra pasión por la
                  tecnología y la salud, decidimos crear una plataforma que vaya
                  más allá de lo tradicional, utilizando modelos 3D para hacer el
                  aprendizaje más interactivo y efectivo.
                </p>
              </div>
            </div>
          </div>
          <div className="acknowledgments">
            <div>
              <h2>Agradecimientos</h2>
              <p>
                Agradecemos a la Universidad del Valle por su apoyo y por brindarnos
                las herramientas necesarias para llevar a cabo este proyecto.
                También extendemos nuestro agradecimiento a todos los profesores y
                compañeros que nos han inspirado y guiado en este proceso.
              </p>
              <p>
                Si tienes preguntas, sugerencias o deseas colaborar con nosotros,
                no dudes en contactarnos. ¡Siempre estamos abiertos a nuevas ideas
                y oportunidades!
              </p>
            </div>
            <img src={contactIcon} alt="Contact Icon" className="contact-icon" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
