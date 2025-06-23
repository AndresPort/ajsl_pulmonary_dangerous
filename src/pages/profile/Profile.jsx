import { useCallback, useEffect } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router";
import useQuizStore from "../../stores/use-quiz-store";
import "./Profile.css";

const Profile = () => {
  const { userLooged, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    logout().then(() => navigate("/"));
  }, [logout, navigate]);

  useEffect(() => {
    if (!userLooged) return;
    const fetchData = async () => {
      const { displayName, email } = userLooged;
      const data = { displayName, email };
      try {
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "https://backend-ajls.onrender.com/api/v1";
        const response = await fetch(
          `${apiBaseUrl}/users`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );
        const token = await userLooged.getIdToken();
        useQuizStore.getState().resetQuiz();
       await useQuizStore.getState().fetchIncompleteQuiz(token);
        if (!response.ok)
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        return await response.json();
      } catch (error) {
        console.error(`Error creando usuario:`, error);
      }
    };
    fetchData();
  }, [userLooged]);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-image">
          <img
            src={`https://ui-avatars.com/api/?name=${userLooged?.displayName}&background=0D8ABC&color=fff`}
            alt="Avatar"
          />
        </div>
        <div className="profile-info">
          <h2>Perfil de Usuario</h2>
          <p><strong>Nombre:</strong> {userLooged?.displayName}</p>
          <p><strong>Correo:</strong> {userLooged?.email}</p>
          <p><strong>Rol:</strong> Usuario registrado</p>
          <p><strong>Estado:</strong> Activo</p>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;

