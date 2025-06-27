<script setup>

const commonInputClass =
  "border border-black rounded py-[9px] bg-white text-sm w-full !px-2";

function submitForm(data) {
  // data.archivo es FileList, tomamos el primer archivo
  const archivo = data.archivo?.[0] || null;
}
</script>

<template>
  <div class="max-w-md mx-auto mt-12 p-6 bg-white rounded shadow">
    <FormKit
      type="form"
      @submit="submitForm"
      submit-label="Enviar"
      class="space-y-6"
    >
      <FormKit
        type="text"
        name="nombre"
        label="Nombre(s)*"
        placeholder="Ingrese su(s) nombre(s)"
        outer-class="mb-1"
        :input-class="commonInputClass"
        validation="required|matches:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?:\\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/"
        :validation-messages="{
          required: 'Este campo es obligatorio',
          matches: 'Solo se permiten letras, espacios y acentos',
        }"
        validation-visibility="dirty"
      />
      <FormKit
        type="text"
        name="apellidos"
        label="Apellidos*"
        placeholder="Ingrese su primer y segundo apellido"
        outer-class="mb-1"
        :input-class="commonInputClass"
        validation="required|matches:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?:\\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/"
        :validation-messages="{
          required: 'Este campo es obligatorio',
          matches: 'Solo se permiten letras, espacios y acentos',
        }"
        validation-visibility="dirty"
      />
      <FormKit
        name="archivo"
        label="Subir PDF"
        type="file"
        validation="required|file|size:2048"
        accept=".pdf"
        v-model="file"
        :input-class="commonInputClass"
        :validation-messages="{
          size: 'El archivo no debe superar los 2MB',
          required: 'Este campo es obligatorio.',
          file: 'Solo se permiten archivos PDF de máximo 2 MB.',
        }"
      />
    </FormKit>

    <!-- <div v-if="formStore.formData.nombre" class="mt-6 p-4 bg-green-100 rounded">
      <h2 class="font-bold mb-2">Datos guardados:</h2>
      <p><strong>Nombre:</strong> {{ formStore.formData.nombre }}</p>
      <p><strong>Apellidos:</strong> {{ formStore.formData.apellidos }}</p>
      <p>
        <strong>Archivo:</strong>
        {{ formStore.formData.archivo?.name || "Ninguno" }}
      </p>
    </div> -->
  </div>
</template>
