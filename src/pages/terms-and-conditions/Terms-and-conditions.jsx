import "./Terms-and-conditions.css";

const Termsandconditions = () => {
    return (
        <div className="ecp-page">
            <section className="terms-section">
                <h1>Términos y Condiciones</h1>

                <div className="terms-block">
                    <h2>1. Uso del contenido</h2>
                    <div className="terms-content-row">
                        <p>
                            Todo el contenido presente en este sitio es de carácter informativo, por
                            lo que es recomendado consultarlo con un profesional ante mayores dudas.
                            No sustituye el diagnóstico ni el tratamiento de un médico profesional.
                            Recomendamos acudir siempre a un especialista de la salud ante cualquier
                            síntoma o duda médica.
                        </p>
                        <img
                            src="src/assets/terms-and-conditions.png"
                            alt="Uso del contenido"
                            className="terms-image"
                        />
                    </div>
                </div>

                <div className="terms-block">
                    <h2>2. Limitación de responsabilidad</h2>
                    <div className="terms-content-row">
                        <p>
                            AJLS Pulmonary Dangers no se hace responsable por decisiones tomadas
                            con base en la información publicada en el sitio. El contenido fue
                            cuidadosamente investigado, pero puede contener errores o quedar desactualizado.
                        </p>
                        <img
                            src="src/assets/wrong-data.png"
                            alt="Uso del contenido"
                            className="terms-image"
                        />
                    </div>

                </div>

                <div className="terms-block">
                    <h2>3. Datos personales</h2>
                    <div className="terms-content-row">
                        <p>
                            No se recopilan datos sensibles de los usuarios. Si se ofrece algún formulario
                            de registro, los datos serán usados únicamente con fines académicos y
                            bajo total confidencialidad.
                        </p>
                        <img
                            src="src/assets/personal-data.png"
                            alt="Uso del contenido"
                            className="terms-image"
                        />
                    </div>

                </div>

                <div className="terms-block">
                    <h2>4. Propiedad intelectual</h2>
                    <div className="terms-content-row">
                        <p>
                            El diseño, los textos, los gráficos y demás elementos del sitio han sido
                            desarrollados por los estudiantes autores del proyecto. No está permitido
                            su uso con fines comerciales sin autorización.
                        </p>
                        <img
                            src="src/assets/copyright.png"
                            alt="Uso del contenido"
                            className="terms-image"
                        />
                    </div>

                </div>

                <div className="final-note">
                    <p>
                        Gracias por visitar nuestro sitio y por tu interés en el cuidado de la salud pulmonar.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Termsandconditions;
