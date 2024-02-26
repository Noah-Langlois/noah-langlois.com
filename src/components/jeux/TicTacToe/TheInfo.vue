<script setup>
import TheCroix from './TheCroix.vue'
import TheRond from './TheRond.vue'

defineProps({
  player: String
})
</script>

<template>
  <div class="d-flex justify-content-center align-items-center">
    <h2 class="pe-3">À</h2>
    <TheCroix v-if="player === 'croix'" />
    <TheRond v-if="player === 'rond'" />
    <h2 class="ps-3">de jouer</h2>
  </div>
</template>
