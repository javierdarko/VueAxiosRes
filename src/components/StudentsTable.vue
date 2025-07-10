<script setup>
import { ref, onMounted } from "vue";
import { useStudentStore } from "@/store/StudentStore";

const store = useStudentStore();
const selectedStudent = ref(null);

onMounted(() => {
  store.fetchStudentInfo("POTA801008HHGRLQ05");
});
function handleSelectStudent(est) {
  selectedStudent.value = est;
  console.log("Estudiante guardado:", selectedStudent.value.matricula_carrera);
}
</script>

<template>
  <div class="p-6 max-w-4xl mx-auto">
    <h2 class="text-2xl font-bold mb-4">Lista de Estudiantes</h2>
    <div v-if="store.loading" class="text-blue-500">Cargando datos...</div>
    <div v-else-if="store.error" class="text-red-500">{{ store.error }}</div>

    <div
      v-else-if="store.dataStudents.length"
      class="border border-black rounded-lg bg-white shadow mb-6"
    >
      <div
        class="grid grid-cols-12 px-4 py-2 border-b border-gray-400 bg-gray-100 rounded-t-lg text-sm font-semibold text-gray-700"
      >
        <div class="col-span-3">Matrícula</div>
        <div class="col-span-6">Nombre</div>
        <div class="col-span-3">Modalidad</div>
      </div>
      <div
        v-for="est in store.dataStudents"
        :key="est.matricula_carrera"
        class="grid grid-cols-12 px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0 items-center text-sm"
        @click="handleSelectStudent(est)"
      >
        <div class="col-span-3 text-gray-600">{{ est.matricula_carrera }}</div>
        <div class="col-span-6 text-gray-800">
          {{ est.nombres }} {{ est.primer_apellido }} {{ est.segundo_apellido }}
        </div>
        <div class="col-span-3 text-gray-600">{{ est.modalidad || "N/A" }}</div>
      </div>
    </div>
    <div v-else class="text-gray-500">No se encontraron estudiantes.</div>
  </div>
</template>
