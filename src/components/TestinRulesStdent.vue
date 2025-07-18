<script setup>
import { ref, onMounted } from "vue";
import api from "@/services/TestingrulesStudnet";
import PostStudentForm from "./PostStudentForm.vue";

const students = ref([]);
const error = ref(null);

async function loadStudents() {
  error.value = null;
  try {
    const data = await api.getStudentsUnrc();
    students.value = Array.isArray(data.datos_estudiante)
      ? data.datos_estudiante
      : [];
  } catch (err) {
    error.value = err.message || "Error desconocido";
  }
}

onMounted(() => {
  loadStudents();
});
</script>

<template>
  <div>
    <h1>Lista de estudiantes</h1>

    <div v-if="error" style="color: red; margin-top: 1rem">
      {{ error }}
    </div>

    <ul v-if="students.length > 0" style="margin-top: 1rem">
      <li v-for="student in students" :key="student.matricula_carrera">
        {{ student }}
      </li>
    </ul>

    <p v-else>Cargando o no hay estudiantes para mostrar.</p>
  </div>

  <PostStudentForm />
</template>
