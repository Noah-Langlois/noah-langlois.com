<script setup>
import TheCroix from './TheCroix.vue'
import TheRond from './TheRond.vue'
</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="grille">
      <div class="row">
        <div class="col border border-start-0 border-top-0">
          <TheCroix />
        </div>
        <div class="col border border-top-0">
          <TheRond />
        </div>
        <div class="col border border-top-0 border-end-0">
          <TheCroix />
        </div>
      </div>
      <div class="row">
        <div class="col border border-start-0">
          <TheCroix />
        </div>
        <div class="col border">
          <TheCroix />
        </div>
        <div class="col border border-end-0">
          <TheCroix />
        </div>
      </div>
      <div class="row">
        <div class="col border border-bottom-0 border-start-0">
          <TheCroix />
        </div>
        <div class="col border border-bottom-0">
          <TheCroix />
        </div>
        <div class="col border border-bottom-0 border-end-0">
          <TheCroix />
        </div>
      </div>
    </div>
  </div>
</template>
