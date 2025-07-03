<script setup>
import { ref } from 'vue';

const datosEstudiante = ref({
  matricula_carrera: '22104187-1',
  fecha_nacimiento: '1980-10-08',
  nombres: 'AQUILINO',
  primer_apellido: 'PORTES',
  segundo_apellido: 'TOLENTINO',
  curp: 'POTA801008HHGRLQ05',
  correo: 'aquilino.portes@gmail.com',
  modalidad: 'A Distancia-Híbrida',
  licenciatura: 'Licenciatura en Mercadotecnia y Ventas',
  unidad_acedemica: 'A distancia',
  nueva_sede: '',
  plan_estudio: 'Plan 2018 - 2020',
  semestre: '7',
  grupo: 'DHLMV-704-GAM',
});

const handleSubmit = (formData) => {
  console.log('Formulario enviado:', formData);
};

const fields = [
  { name: 'matricula_carrera', label: 'Matrícula', type: 'text' },
  { name: 'fecha_nacimiento', label: 'Fecha de nacimiento', type: 'date' },
  { name: 'nombres', label: 'Nombres', type: 'text' },
  { name: 'primer_apellido', label: 'Primer apellido', type: 'text' },
  { name: 'segundo_apellido', label: 'Segundo apellido', type: 'text' },
  { name: 'curp', label: 'CURP', type: 'text' },
  { name: 'correo', label: 'Correo electrónico', type: 'email' },
  { name: 'modalidad', label: 'Modalidad', type: 'text' },
  { name: 'licenciatura', label: 'Licenciatura', type: 'text' },
  { name: 'unidad_acedemica', label: 'Unidad académica', type: 'text' },
  { name: 'nueva_sede', label: 'Nueva sede', type: 'text' },
  { name: 'plan_estudio', label: 'Plan de estudio', type: 'text' },
  { name: 'semestre', label: 'Semestre', type: 'text' },
  { name: 'grupo', label: 'Grupo', type: 'text' },
];
</script>

<template>
  <div class="max-w-2xl mx-auto p-6">
    <FormKit
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
