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
    <div v-if="stateCases[caseNumber] === 'croix'">
      <TheCroix />
    </div>
    <div v-if="stateCases[caseNumber] === 'rond'">
      <TheRond />
    </div>
    <div v-if="stateCases[caseNumber] === ''" class="emptyCase"></div>
  </div>
</template>
