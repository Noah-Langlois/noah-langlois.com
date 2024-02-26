<script setup>
import TheEnsma from '@/components/TheEnsma.vue'
import TheGrignard from '@/components/TheGrignard.vue'
import TheBac from '@/components/TheBac.vue'
</script>

<template>
  <main>
    <div class="d-flex flex-column justify-content-center p-5">
      <div>
        <TheEnsma />
      </div>
      <div class="pt-3">
        <TheGrignard />
      </div>
      <div class="pt-3">
        <TheBac />
      </div>
    </div>
  </main>
</template>
