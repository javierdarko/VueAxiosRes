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

async function submitForm(values) {
  loading.value = true;
  message.value = "";
  error.value = false;

  try {
    const result = await api.postStudentUnrc(values);
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
  <FormKit
    type="form"
    :actions="false"
    :value="student"
    style="background-color: #f3f3f3"
    class="w-[460px] mx-auto p-6 rounded-lg shadow border-2 border-black"
    @submit="submitForm"
  >
    <h2 class="text-2xl font-semibold mb-6 text-center">
      Registrar estudiante
    </h2>

    <div class="flex flex-col items-center">
      <FormKit
        v-for="(value, key) in student"
        :key="key"
        :name="key"
        type="text"
        :label="key.replace(/_/g, ' ').toUpperCase()"
        validation="required"
        :placeholder="key.replace(/_/g, ' ')"
        input-class="w-[400px] px-4 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        label-class="block font-medium text-gray-700 mb-1 capitalize"
        outer-class="mb-4 w-[400px]"
      />
    </div>

    <div class="flex justify-center">
      <FormKit
        type="submit"
        :label="loading ? 'Enviando...' : 'Enviar'"
        :disabled="loading"
        input-class="w-[400px] bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
      />
    </div>

    <p
      v-if="message"
      :class="[
        'mt-4 text-center font-semibold',
        error ? 'text-red-600' : 'text-green-600',
      ]"
    >
      {{ message }}
    </p>
  </FormKit>
</template>
