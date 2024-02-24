<script setup>
import TheEnsma from '@/components/TheEnsma.vue'
import TheGrignard from '@/components/TheGrignard.vue'
import TheBac from '@/components/TheBac.vue'
</script>

<template>
  <main>
    <div class="row">
      <div class="col-6">
        <div class="p-5">
          <TheEnsma />
        </div>
        <div class="ps-5 pe-5 pb-5">
          <TheBac />
        </div>
      </div>
      <div class="col">
        <div class="p-5">
          <TheGrignard />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6"></div>
    </div>
  </main>
</template>
