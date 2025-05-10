import { Fragment } from "react";
import "./Home.css";
import CircularLights from "../../Components/circularLights";
import Button from "../../Components/button";
import { Route } from "react-router";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, SoftShadows } from "@react-three/drei";
import Lights from "./Lights/Lights";
import HealthyLungSemiVisible from "./models-3d/HealthyLungSemiVisible";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  return (
    //principal text section
    <Fragment>

      <div className="popupHome" open>
        <CircularLights number="3" />
        <CircularLights number="4" />
        <h2 className="popupHome__tittle">Bienvenido</h2>
        <p> Texto de bienvenida</p>
        <button className="popupHome__BtnClose"> Cerrar </button>
      </div>

      <div className="principalTextSection">
        <h1 className="principalTextSection__tittle">
          Aprende sobre horribles enfermedades pulmonares y como evitarlas
        </h1>
        <p className="principalTextSection__paragraph">
          Los pulmones son esenciales para nuestra vida, pero a menudo olvidamos
          su verdadero valor. Este proyecto, creado con fines educativos para la
          comunidad Yumbeña, te sumergirá en información sobre cuatro
          enfermedades graves que pueden surgir al exponer nuestros pulmones a
          daños irreversibles. ¡Cuidar de ellos es cuidar de tu vida!
        </p>
      </div>

      <div className="model_container">
        <Canvas camera={{ position: [0, 0, 1.3] }} shadows={true}>
          <SoftShadows size={40} samples={20} focus={0.8} />
          <Lights />
          <OrbitControls target={[0, 0, 0]} />
          <HealthyLungSemiVisible scale={0.01} />
        </Canvas>
      </div>

      <div className="callToActionSection">
        <h1 className="callToActionSection__tittle">
          Presiona a continuación para conocer sobre las enfermedades más
          comunes y peligrosas para los pulmones
        </h1>

        <div className="callToActionButtons__btnContainer">
          <Button
            className="callToActionButtons__btnPneumonia"
            text="Neumonía"
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
            onClick={() => navigate("/lungs-cancer")}
          />

          <Button
            className="callToActionButtons__btnECP"
            text="Enfermedad Crónica Pulmonar"
            onClick={() => navigate("/e-c-p")}
          />
        </div>
      </div>
      <CircularLights number="1" />
      <CircularLights number="2" />
    </Fragment>
  );
}

export default Home;
