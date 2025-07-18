<script setup>
import { reactive, watch } from "vue";
import { useStudentStore } from "@/store/StudentStore";

const store = useStudentStore();

// Estado reactivo para el formulario
const datosEstudiante = reactive({});

// Sincroniza cuando el estudiante cambia
watch(
  () => store.selectedStudent,
  (nuevo, anterior) => {
    if (!nuevo) return;

    // Evita copiar si es el mismo estudiante
    if (nuevo.matricula_carrera !== anterior?.matricula_carrera) {
      // Limpiar y copiar datos
      Object.keys(datosEstudiante).forEach(
        (key) => delete datosEstudiante[key]
      );
      Object.assign(datosEstudiante, nuevo);
    }
  },
  { immediate: true } // ejecuta al cargar también
);

const fields = [
  { name: "matricula_carrera", label: "Matrícula", type: "text" },
  { name: "fecha_nacimiento", label: "Fecha de nacimiento", type: "date" },
  { name: "nombres", label: "Nombres", type: "text" },
  { name: "primer_apellido", label: "Primer apellido", type: "text" },
  { name: "segundo_apellido", label: "Segundo apellido", type: "text" },
  { name: "curp", label: "CURP", type: "text" },
  { name: "correo", label: "Correo electrónico", type: "email" },
  { name: "modalidad", label: "Modalidad", type: "text" },
  { name: "licenciatura", label: "Licenciatura", type: "text" },
  { name: "unidad_acedemica", label: "Unidad académica", type: "text" },
  { name: "nueva_sede", label: "Nueva sede", type: "text" },
  { name: "plan_estudio", label: "Plan de estudio", type: "text" },
  { name: "semestre", label: "Semestre", type: "text" },
  { name: "grupo", label: "Grupo", type: "text" },
];

// Envío del formulario
const handleSubmit = (formData) => {
  console.log("Formulario enviado:", formData);
};
</script>
<template>
  <div class="max-w-2xl mx-auto p-6">
    <FormKit
      v-if="Object.keys(datosEstudiante).length"
      type="form"
      :value="datosEstudiante"
      submit-label="Enviar datos"
      wrapper-class="space-y-4"
      @submit="handleSubmit"
    >
      <div
        v-for="(field, index) in fields"
        :key="field.name"
        :class="['p-4 rounded', index % 2 === 0 ? 'bg-white' : 'bg-gray-100']"
      >
        <FormKit
          :type="field.type"
          :name="field.name"
          :label="field.label"
          input-class="w-full"
        />
      </div>
    </FormKit>
  </div>
</template>
