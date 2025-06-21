import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState, useEffect } from "react";
import * as THREE from "three";
import Podium3D from "./models-3d/medal-table/Podium3D";
import "./MedalTable.css";

// Componente de la lista de jugadores
const PlayerList = ({ players, loading }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando medallero...</p>
      </div>
    );
  }

  if (!players || players.length === 0) {
    return (
      <div className="empty-state">
        <p>No hay resultados disponibles aún</p>
        <p>¡Sé el primero en completar un quiz!</p>
      </div>
    );
  }

  return (
    <div className="player-list">
      {players.map((player, index) => (
        <div key={player._id || index} className={`player-item ${index < 3 ? 'top-three' : ''}`}>
          <div className="player-rank">
            <span className="rank-number">{index + 1}</span>
            {player.medal && player.medal !== "ninguna" && (
              <div className={`medal-icon ${player.medal}`}>
                {player.medal === "oro" && "🥇"}
                {player.medal === "plata" && "🥈"}
                {player.medal === "bronce" && "🥉"}
              </div>
            )}
          </div>
          <div className="player-info">
            <div className="player-name">{player.user?.name || player.user?.email || "Usuario"}</div>
            <div className="player-score">
              {player.score?.percentage || 0}% ({player.score?.correctAnswers || 0} correctas)
            </div>
            <div className="player-grade">
              Calificación: {player.score?.grade || "N/A"}
            </div>
          </div>
          <div className="player-avatar">
            <div className="avatar-placeholder">
              {(player.user?.name || player.user?.email || "U").charAt(0).toUpperCase()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const MedalTable = () => {
  // Estados para manejar los datos de la base de datos
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    totalParticipants: 0,
    averageScore: 0,
    lastUpdate: new Date().toLocaleDateString('es-ES')
  });

  // Función para cargar los datos del medallero desde la API
  const fetchLeaderboard = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // TODO: Implementar llamada a la API real
      // const response = await fetch('/api/quiz-results/leaderboard');
      // const data = await response.json();
      
      // Por ahora usamos datos de ejemplo que simulan la estructura de MongoDB
      const mockData = [
        {
          _id: "1",
          user: { _id: "user1", name: "María González", email: "maria@example.com" },
          score: { correctAnswers: 18, wrongAnswers: 2, percentage: 90, grade: "A" },
          medal: "oro",
          createdAt: new Date()
        },
        {
          _id: "2", 
          user: { _id: "user2", name: "Carlos Rodríguez", email: "carlos@example.com" },
          score: { correctAnswers: 17, wrongAnswers: 3, percentage: 85, grade: "B" },
          medal: "plata",
          createdAt: new Date()
        },
        {
          _id: "3",
          user: { _id: "user3", name: "Ana Martínez", email: "ana@example.com" },
          score: { correctAnswers: 16, wrongAnswers: 4, percentage: 80, grade: "B" },
          medal: "bronce",
          createdAt: new Date()
        },
        {
          _id: "4",
          user: { _id: "user4", name: "Luis Pérez", email: "luis@example.com" },
          score: { correctAnswers: 15, wrongAnswers: 5, percentage: 75, grade: "C" },
          medal: "ninguna",
          createdAt: new Date()
        },
        {
          _id: "5",
          user: { _id: "user5", name: "Sofia López", email: "sofia@example.com" },
          score: { correctAnswers: 14, wrongAnswers: 6, percentage: 70, grade: "C" },
          medal: "ninguna",
          createdAt: new Date()
        },
        {
          _id: "6",
          user: { _id: "user6", name: "Diego Silva", email: "diego@example.com" },
          score: { correctAnswers: 13, wrongAnswers: 7, percentage: 65, grade: "D" },
          medal: "ninguna",
          createdAt: new Date()
        },
        {
          _id: "7",
          user: { _id: "user7", name: "Valentina Torres", email: "valentina@example.com" },
          score: { correctAnswers: 12, wrongAnswers: 8, percentage: 60, grade: "D" },
          medal: "ninguna",
          createdAt: new Date()
        },
        {
          _id: "8",
          user: { _id: "user8", name: "Andrés Morales", email: "andres@example.com" },
          score: { correctAnswers: 11, wrongAnswers: 9, percentage: 55, grade: "F" },
          medal: "ninguna",
          createdAt: new Date()
        },
        {
          _id: "9",
          user: { _id: "user9", name: "Camila Herrera", email: "camila@example.com" },
          score: { correctAnswers: 10, wrongAnswers: 10, percentage: 50, grade: "F" },
          medal: "ninguna",
          createdAt: new Date()
        },
        {
          _id: "10",
          user: { _id: "user10", name: "Juan Castro", email: "juan@example.com" },
          score: { correctAnswers: 9, wrongAnswers: 11, percentage: 45, grade: "F" },
          medal: "ninguna",
          createdAt: new Date()
        },
        {
          _id: "11",
          user: { _id: "user11", name: "Laura Fernández", email: "laura@example.com" },
          score: { correctAnswers: 19, wrongAnswers: 1, percentage: 95, grade: "A+" },
          medal: "oro",
          createdAt: new Date()
        }
      ];

      // Ordenar por porcentaje de mayor a menor
      const sortedData = mockData.sort((a, b) => 
        (b.score?.percentage || 0) - (a.score?.percentage || 0)
      );

      // Limitar a solo los 10 mejores jugadores
      const top10Players = sortedData.slice(0, 10);

      setPlayers(top10Players);
      
      // Calcular estadísticas
      const totalParticipants = mockData.length;
      const averageScore = mockData.reduce((sum, player) => 
        sum + (player.score?.percentage || 0), 0) / totalParticipants;
      
      setStats({
        totalParticipants,
        averageScore: Math.round(averageScore),
        lastUpdate: new Date().toLocaleDateString('es-ES')
      });

    } catch (err) {
      setError('Error al cargar el medallero');
      console.error('Error fetching leaderboard:', err);
    } finally {
      setLoading(false);
    }
  };

  // Cargar datos al montar el componente
  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const top3Players = players.slice(0, 3);

  return (
    <div className="medal-table-container">
      {/* Efectos de luz de fondo */}
      <div className="circular-light-1"></div>
      <div className="circular-light-2"></div>
      
      <div className="medal-table-content">
        <h1 className="medal-table-title">🏆 Medallero</h1>
        
        {error && (
          <div className="error-message">
            <p>{error}</p>
            <button onClick={fetchLeaderboard} className="retry-button">
              Intentar de nuevo
            </button>
          </div>
        )}
        
        {/* Sección del podio 3D */}
        <div className="podium-section">
          <h2 className="section-title">Podium de Ganadores</h2>
          <div className="podium-container">
            <Canvas 
              camera={{ position: [0, 5, 8], fov: 50 }} 
              shadows
              gl={{ 
                antialias: true, 
                alpha: true,
                powerPreference: "high-performance",
                toneMapping: THREE.ACESFilmicToneMapping,
                outputColorSpace: THREE.SRGBColorSpace
              }}
            >
              <Podium3D top3Players={top3Players} />
              <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 4}
              />
            </Canvas>
          </div>
        </div>
        
        {/* Sección de la lista de jugadores */}
        <div className="leaderboard-section">
          <h2 className="section-title">Top 10 Jugadores</h2>
          <div className="leaderboard-container">
            <PlayerList players={players} loading={loading} />
          </div>
        </div>
        
        {/* Información adicional */}
        <div className="info-section">
          <div className="info-card">
            <h3>📊 Estadísticas</h3>
            <p>Total de participantes: {stats.totalParticipants}</p>
            <p>Puntuación promedio: {stats.averageScore}%</p>
            <p>Última actualización: {stats.lastUpdate}</p>
          </div>
          
          <div className="info-card">
            <h3>🎯 Cómo subir en el ranking</h3>
            <ul>
              <li>Completa todos los quizzes</li>
              <li>Responde correctamente</li>
              <li>Mejora tu tiempo de respuesta</li>
              <li>Practica regularmente</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedalTable;

