import { Fragment } from "react";
import "./Home.css";
import CircularLights from "../../Components/circularLights";
import Button from "../../Components/button";
import { Route } from "react-router";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  return (
    //principal text section
    <Fragment>
      <div className="principalTextSection">
        <h1 className="principalTextSection__tittle">
          Aprende sobre horribles enfermedades pulmonares y como evitarlas
        </h1>
        <p className="principalTextSection__paragraph">
          Los pulmones son un organo tan importante que muchas veces pasamos por
          alto su importancia, a continuación se mostrará de manera inmersiva
          información sobre 4 enfermedades potencialmente peligrosas o mortales
          que podrían generarse en el caso de exponerse a multiples situaciones
          que puedan generarle daños al pulmon incluso de manera irreversible,
          el proyecto por fines educativos y para promover el cuidado de los
          pulmones en la comunidad Yumbeña encuestada.
        </p>
      </div>

      <img
        src="https://i.pinimg.com/736x/78/51/50/785150636d707cb0a20112acfc7fa77c.jpg"
        className="lungImage"
      />

      <div className="callToActionSection">
        <h1 className="callToActionSection__tittle">
          Presiona a continuación para conocer sobre las enfermedades más
          comunes y peligrosas para los pulmones
        </h1>

        <div className="callToActionButtons__btnContainer">
          <Button
            className="callToActionButtons__btnPneumonia"
            text="Neumonia"
            onClick={() => navigate("/Pneumonia")}
          />

          <Button
            className="callToActionButtons__btnTuberculosis"
            text="Tuberculosis"
            onClick={() => navigate("/Tuberculosis")}
          />

          <Button
            className="callToActionButtons__btnLungsCancer"
            text="Cancer de pulmon"
            onClick={() => navigate("/LungsCancer")}
          />

          <Button
            className="callToActionButtons__btnECP"
            text="Enfermedad cronica pulmonar"
            onClick={() => navigate("/e-c-p")}
          />
        </div>
      </div>
      <CircularLights />
      <CircularLights />
    </Fragment>
  );
}

export default Home;
