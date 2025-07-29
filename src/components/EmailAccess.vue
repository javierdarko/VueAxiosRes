<template>
  <div
    :class="{ dark: isDark }"
    class="min-h-screen bg-gray-100 dark:bg-gray-900 p-6"
  >
    <!-- Botón para cambiar el modo -->
    <button
      class="mb-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      @click="toggleDark"
    >
      Cambiar modo
    </button>

    <!-- Card con modo oscuro aplicado -->
    <div
      class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5"
    >
      <div>
        <span
          class="inline-flex items-center justify-center rounded-md bg-lime-500 p-2 shadow-lg"
        >
          <svg
            class="h-6 w-6 stroke-white"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 8l9 6 9-6M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8"
            />
          </svg>
        </span>
      </div>
      <h3
        class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight"
      >
        Login
      </h3>
      <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">Correo</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDark: false,
    };
  },
  methods: {
    toggleDark() {
      this.isDark = !this.isDark;
    },
  },
};
</script>
