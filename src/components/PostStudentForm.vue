<script setup>
import { ref } from "vue";
import api from "@/services/TestingrulesStudnet";

const student = ref({
  matricula_carrera: "25115408-1",
  fecha_nacimiento: "1980-10-08",
  nombres: "AQUILINO",
  primer_apellido: "PORTES",
  segundo_apellido: "TOLENTINO",
  curp: "POTA801008HHGRLQ05",
  correo: "aquilino.portes@gmail.com",
  modalidad: "A Distancia-Híbrida",
  licenciatura: "Licenciatura en Contaduría y Finanzas",
  unidad_acedemica: "A distancia",
  nueva_sede: "",
  plan_estudio: "Plan 2023",
  semestre: "1",
  grupo: "DHLCFI-101-GAM",
});

const loading = ref(false);
const message = ref("");
const error = ref(false);

async function submitForm() {
  message.value = "";
  error.value = false;
  loading.value = true;

  try {
    const result = await api.postStudentUnrc(student.value);
    message.value = result?.message || "Estudiante registrado correctamente.";
  } catch (err) {
    error.value = true;
    message.value = err.message || "Error al enviar datos.";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <form
    class="max-w-xl mx-auto p-6 bg-white rounded shadow"
    @submit.prevent="submitForm"
  >
    <h2 class="text-2xl font-semibold mb-4 text-center">
      Registrar estudiante
    </h2>

    <div v-for="(value, key) in student" :key="key" class="mb-4">
      <label :for="key" class="block font-medium text-gray-700 mb-1 capitalize">
        {{ key.replace(/_/g, " ") }}
      </label>
      <input
        :id="key"
        v-model="student[key]"
        :name="key"
        type="text"
        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <button
      type="submit"
      :disabled="loading"
      class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
    >
      {{ loading ? "Enviando..." : "Enviar" }}
    </button>

    <p
      v-if="message"
      :class="[
        'mt-4 text-center font-semibold',
        error ? 'text-red-600' : 'text-green-600',
      ]"
    >
      {{ message }}
    </p>
  </form>
</template>
