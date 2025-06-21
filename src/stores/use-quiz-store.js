import { create } from "zustand";

const useQuizStore = create((set, get) => ({
  quiz: null,
  loading: false,
  error: null,

  // Cargar progreso desde el backend
  fetchIncompleteQuiz: async (token) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("http://localhost:8080/api/quizzes/incomplete", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("No hay intento guardado");

      const data = await res.json();
      set({ quiz: data, loading: false });
    } catch (error) {
      set({ quiz: null, loading: false, error: error.message });
    }
  },

  // Enviar una nueva respuesta al backend
  sendAnswer: async (token, newAnswer, totalQuestions) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("http://localhost:8080/api/quizzes/progress", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newAnswer, totalQuestions }),
      });

      if (!res.ok) throw new Error("Error enviando respuesta");

      const data = await res.json();
      set({ quiz: data.quiz, loading: false });

      return data.quiz;
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },

  // Resetear estado (ej: al cerrar sesión)
  resetQuiz: () => set({ quiz: null, loading: false, error: null }),
}));

export default useQuizStore;
