<script setup>
import TheCroix from './TheCroix.vue'
import TheRond from './TheRond.vue'
defineProps({
  caseNumber: Number,
  stateCases: Array
})
</script>

<template>
  <div>
    <div v-if="stateCases[caseNumber] === 'croix'" class="croix-rond-Tic-Tac-Toe">
      <TheCroix />
    </div>
    <div v-if="stateCases[caseNumber] === 'rond'" class="croix-rond-Tic-Tac-Toe">
      <TheRond />
    </div>
    <div v-if="stateCases[caseNumber] === ''" class="emptyCase"></div>
  </div>
</template>
