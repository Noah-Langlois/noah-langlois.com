<script setup>
defineProps({
  numero: Number,
  addJeu: Function
})
</script>

<template>
  <div>
    <button type="button" class="btn btn-outline-dark boule-loto" data-bs-toggle="button">
      {{ numero }}
    </button>
  </div>
</template>
