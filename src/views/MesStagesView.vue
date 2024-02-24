<script setup>
import TheRU from '@/components/stages/TheRU.vue'
import TheCNES from '@/components/stages/TheCNES.vue'
</script>

<template>
  <main>
    <div class="row">
      <div class="col">
        <div class="p-5">
          <TheCNES />
        </div>
        <div class="ps-5 pe-5">
          <TheRU />
        </div>
      </div>
    </div>
  </main>
</template>
