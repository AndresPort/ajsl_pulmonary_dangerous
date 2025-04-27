import React, { useRef } from 'react';
import "./e-c-p.css";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SaneLungs from './models-3d/SaneLungs';
import Lights from './lights/Lights';
import Floor from './models-3d/Floor';
import Controls from './controls/Controls';

const ECP = () => {
    const sintomasRef = useRef(null);
    const tratamientoRef = useRef(null);
    const prevencionRef = useRef(null);
    
    return (
        <div className="ecp-page">
            <section className="section" id="intro">
                <div className="content">
                    <div className="model-container">
                        <Canvas camera={{ position: [0, 1, 4] }} shadows={true}>
                            <OrbitControls target={[0, 0, 0]} />
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
                            dificultades a la hora de respirar causada principalmente
                            por el tabaco, aunque hay ciertos casos en los que podria
                            desarrollarse inclusive sin la necesidad de uno.
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
                        {/* Aquí irá el modelo 3D de síntomas */}
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
                        {/* Aquí irá el modelo 3D de tratamiento */}
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
            <section className="section" ref={prevencionRef} id="prevencion">
                <div className="content">
                    <div className="model-container">
                        {/* Aquí irá el modelo 3D de prevención */}
                    </div>
                    <div className="text-container">
                        <h2>Prevención</h2>

                        <p>
                            <li>
                                El hecho de no fumar previene la mayoría de casos de ECP.
                            </li>
                            <li>
                                Tener una dieta saludable y balanceada puede ayudar a disminuir
                                los sintomas, se recomienda hablar con un profesional para esto.
                            </li>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default ECP;