// src/store/StudentStore.js
import { defineStore } from "pinia";
import StudentsService from "@/services/StudentsService";

export const useStudentStore = defineStore("student", {
  state: () => ({
    dataStudents: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchStudentInfo(curp) {
      this.loading = true;
      this.error = null;

      try {
        const response = await StudentsService.getInformationStudent(curp);
        const responseStudents = response.data?.datos_estudiante;

        if (Array.isArray(responseStudents) && responseStudents.length > 0) {
          this.dataStudents = responseStudents;
        } else {
          this.dataStudents = [];
        }
      } catch (err) {
        this.error = err.message || "Error al obtener datos";
      } finally {
        this.loading = false;
      }
    },
  },
});
