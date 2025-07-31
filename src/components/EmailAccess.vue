<script>
import { LoginTest } from "@/services/LoginTest";

export default {
  methods: {
    async handleSubmit(values) {
      try {
        const data = await LoginTest(values.email, values.password);
        alert("Login exitoso! Token: " + data.token);
      } catch (error) {
        alert("Error en login: " + error.message);
      }
    },
  },
};
</script>

<template>
  <div class="flex justify-center items-center p-16">
    <div
      class="H-[500px]:flex justify-center flex-col items-center gap-5 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
    >
      <!-- Ícono de correo en círculo amarillo -->
      <span
        class="flex items-center justify-center bg-yellow-400 rounded-full p-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-[150px] w-[150px] text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-4a2 2 0 01-2-2H10a2 2 0 01-2 2H4"
          />
        </svg>
      </span>

      <h3 class="text-gray-900 dark:text-white text-xl font-bold">SKIPRE</h3>
      <p class="text-gray-500 dark:text-gray-400 mb-4">Inicio de Sesión</p>

      <!-- FormKit Formulario -->

      <FormKit
        type="form"
        :actions="false"
        submit-label="Enviar"
        @submit="handleSubmit"
      >
        <FormKit
          type="email"
          name="email"
          label="Correo electrónico"
          placeholder="ejemplo@correo.com"
          validation="required|email"
        />

        <FormKit
          type="password"
          name="password"
          label="Contraseña"
          placeholder="Tu contraseña"
          validation="required|min:6"
        />

        <FormKit type="submit" label="Enviar" />
      </FormKit>
    </div>
  </div>
</template>
