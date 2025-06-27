<script setup>
import { ref, onMounted } from 'vue';
import StudentsService from "../services/StudentsService";

const studentInfo = ref(null);
const loading = ref(true);
const error = ref(null);

async function fetchStudentInfo() {
  loading.value = true;
  error.value = null;
  try {
    const response = await StudentsService.getInformationStudent();
    studentInfo.value = response.data;
  } catch (err) {
    error.value = err.message || 'Error al obtener la información';
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchStudentInfo();
});
</script>

<template>
  <div>
    <h2>Información del estudiante</h2>

    <div v-if="loading">Cargando...</div>
    <div v-else-if="error" style="color:red">{{ error }}</div>
    <div v-else>
      <pre>{{ studentInfo }}</pre>
    </div>
  </div>
</template>
