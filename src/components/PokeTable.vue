<script setup>
import { ref, onMounted } from 'vue';

const poketInfo = ref(null);
const loading = ref(true);
const error = ref(null);

async function fetchPokeInfo() {
  loading.value = true;
  error.value = null;
  try {
    const response = await PokeServices.getInformationPokemon();
    poketInfo.value = response.data;
  } catch (err) {
    error.value = err.message || 'Error al obtener la información';
  } finally {
    loading.value = false;
  }
}
console.log('Pokedex: ', poketInfo);

onMounted(() => {
  fetchPokeInfo();
});
</script>

<template>
  <div class="max-w-md mx-auto mt-12 p-6 bg-white rounded shadow">
    <h2>Información del poke</h2>

    <div v-if="loading">Cargando...</div>
    <div v-else-if="error" style="color: red">{{ error }}</div>
    <div v-else>
      <pre>{{ poketInfo }}</pre>
      <div class="text-black py-[9px]">{{ poketInfo }}</div>
    </div>
  </div>
</template>
