<script setup>
import TheRU from '@/components/stages/TheRU.vue'
import TheCNES from '@/components/stages/TheCNES.vue'
</script>

<template>
  <main>
    <div class="container text-center">
      <div class="row mt-5 justify-content-center">
        <div class="col-md-6 mb-3">
          <TheCNES />
        </div>
        <div class="col-md-6">
          <TheRU />
        </div>
      </div>
    </div>
  </main>
</template>
