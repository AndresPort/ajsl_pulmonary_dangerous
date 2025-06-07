import { useRef, useEffect, useState } from 'react';
import "./e-c-p.css";
import { Canvas } from '@react-three/fiber';
import SaneLungs from './models-3d/SaneLungs';
import Lights from './lights/Lights';
import Floor from './models-3d/Floor';
import Controls from './controls/Controls';
import Button from "./models-3d/html-3d/Button";
import Smoker from './models-3d/Smoker';
import Staging from './staging/Staging';
import CityLights from './lights/CityLights';
import Title from './texts/Title';
import Nurse from './models-3d/Nurse';
import Chair from './models-3d/Chair';
import StagingLobby from './staging/StagingLobby';
import Recipient from './models-3d/Recipient';
import SmokerController from './controls/SmokerController';
import Smoker2 from './models-3d/Smoker2';
import Button2 from './models-3d/html-3d/Button2';
import LobbyLight from './lights/LobbyLights';




const ECP = () => {
    const sintomasRef = useRef(null);
    const tratamientoRef = useRef(null);
    const prevencionRef = useRef(null);
    const refSmoker2 = useRef();

    return (
        <div className="ecp-page">
            <section className="section" id="intro">
                <div className="content">
                    <div className="model-container">
                        <Canvas camera={{ position: [0, 1, 4] }} shadows={true}>
                            <Controls />
                            <Lights />
                            <SaneLungs scale={5} />
                            <Floor />
                        </Canvas>
                    </div>
                    <div className="text-container">
                        <h1>¿Que es la Enfermedad Crónica Pulmonar?</h1>
                        <p>
                            La enfermedad crónica pulmonar o tambien llamada
                            Enfermedad pulmonar obstructiva crónica (EPOC)
                            se trata de una enfermedad pulmonar común causando
                            dificultades a la hora de respirar
                            <p>
                                Hay dos formas principales de la enfermedad:
                            </p>
                            <li>
                                <a>
                                    La primera se trata de la Bronquitis crónica,
                                    la cual implica una tos prolongada con moco.
                                </a>
                            </li>
                            <li>
                                <a>
                                    Mientras que la segunda es la Enfisema,
                                    el cual implica un daño a los pulmones con el tiempo.
                                </a>
                            </li>
                            Los pacientes con esta enfermedad suelen optar por
                            tener una combinación de ambas infecciones.
                        </p>
                    </div>
                </div>
            </section>
            <section className="section" ref={sintomasRef} id="sintomas">
                <div className="content">
                    <div className="model-container">
                        <Canvas camera={{ position: [0, 2, 7.85] }} shadows={true}>
                            <CityLights />
                            <Smoker scale={3} position={[1, 1, 1]} />
                            <Floor />
                            <Button />
                            <Staging />
                            <Controls />
                        </Canvas>
                    </div>
                    <div className="text-container">
                        <h2>Síntomas</h2>
                        <p>
                            Los síntomas pueden incluir cualquiera de los siguientes:
                            <li>
                                <a>
                                    Tos con o sin flema
                                </a>
                            </li>
                            <li>
                                <a>
                                    Fátiga
                                </a>
                                <li>Infecciones respiratorias frecuentes</li>
                                <li>
                                    Dificultad respiratoria (
                                    <a>
                                        disnea
                                    </a>
                                    ) que empeora con actividad leve
                                </li>
                                <li>Dificultad para tomar aire</li>
                                <li>
                                    <a>
                                        Sibilancias
                                    </a>
                                </li>
                                <a>
                                    Dado que los síntomas se presentan lentamente, es
                                    posible que muchas personas no sepan que tienen ECP
                                </a>
                            </li>
                        </p>
                    </div>
                </div>
            </section>
            <section className="section" ref={tratamientoRef} id="tratamiento">
                <div className="content">
                    <div className="model-container">
                        <Canvas camera={{ position: [0, 2, 7.85] }} shadows={true}>
                            <Title title={"Presiona r para volver a la posicion inicial"}/>
                            <LobbyLight />
                            <Smoker2 ref={refSmoker2} scale={3} position={[1, -0.85, 3.5]} />
                            <SmokerController targetRef={refSmoker2} modelId="smoker2" />
                            <Nurse scale={3} position={[-1, -0.20, -2.5]} />
                            <Chair scale={4} position={[-1,-0.85,-2.5]}  />
                            <Recipient />
                            <StagingLobby />
                            <Button2 />
                            <Controls />
                        </Canvas>
                    </div>
                    <div className="text-container">
                        <h2>Tratamiento</h2>
                        <p>
                            Actualmente no hay ninguna posible cura para la ECP, mas sin embargo,
                            hay muchas medidas para poder aliviar los síntomas y asi impedir que
                            la enfermedad pueda empeorar.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default ECP;