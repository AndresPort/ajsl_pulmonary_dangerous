import { create } from "zustand";

const useQuizStore = create((set) => ({
  quiz: null,
  loading: false,
  error: null,

  sendAnswer: async (token, newAnswer, totalQuestions) => {
    try {
      set({ loading: true, error: null });

      const res = await fetch("http://localhost:8080/api/quizzes/progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ newAnswer, totalQuestions }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Error al guardar respuesta");

      set({ quiz: data.quiz });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  fetchIncompleteQuiz: async (token) => {
    try {
      set({ loading: true, error: null });

      const res = await fetch("http://localhost:8080/api/quizzes/incomplete", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Error al obtener progreso");

      set({ quiz: data });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  selectedAnswers: [],

  setSelectedAnswer: (questionId, option) =>
    set((state) => ({
      selectedAnswers: {
        ...state.selectedAnswers,
        [questionId]: option,
      },
    })),

    resetQuiz: () => set({ selectedAnswers: [] }),

  }));
  

export default useQuizStore;

