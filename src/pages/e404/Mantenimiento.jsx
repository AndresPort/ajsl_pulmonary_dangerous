import { useNavigate } from "react-router-dom";
import './Mantenimiento.css';

const Mantenimiento = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="maintenance-container">
      <h1 className="maintenance-title">Página en mantenimiento</h1>
      <p className="maintenance-text">
        Estamos trabajando para traerte esta sección muy pronto. ¡Gracias por tu paciencia!
      </p>
      <button onClick={handleGoHome} className="maintenance-button">
        Volver al inicio
      </button>
    </div>
  );
};

export default Mantenimiento;
