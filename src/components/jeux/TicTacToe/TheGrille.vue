<script setup>
import TheCase from './TheCase.vue'
import { ref } from 'vue'
const stateCases = ref(['rond', '', '', '', 'rond', '', '', '', 'rond'])
</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="grille">
      <div class="row">
        <div class="col border border-start-0 border-top-0">
          <TheCase :stateCases="stateCases" :caseNumber="0" />
        </div>
        <div class="col border border-top-0">
          <TheCase :stateCases="stateCases" :caseNumber="1" />
        </div>
        <div class="col border border-top-0 border-end-0">
          <TheCase :stateCases="stateCases" :caseNumber="2" />
        </div>
      </div>
      <div class="row">
        <div class="col border border-start-0">
          <TheCase :stateCases="stateCases" :caseNumber="3" />
        </div>
        <div class="col border">
          <TheCase :stateCases="stateCases" :caseNumber="4" />
        </div>
        <div class="col border border-end-0">
          <TheCase :stateCases="stateCases" :caseNumber="5" />
        </div>
      </div>
      <div class="row">
        <div class="col border border-bottom-0 border-start-0">
          <TheCase :stateCases="stateCases" :caseNumber="6" />
        </div>
        <div class="col border border-bottom-0">
          <TheCase :stateCases="stateCases" :caseNumber="7" />
        </div>
        <div class="col border border-bottom-0 border-end-0">
          <TheCase :stateCases="stateCases" :caseNumber="8" />
        </div>
      </div>
    </div>
  </div>
</template>
