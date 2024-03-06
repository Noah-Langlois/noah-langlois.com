<script setup>
import CvCard from '@/components/documents/CvCard.vue'
import AdhdCard from '@/components/documents/AdhdCard.vue'
</script>

<template>
  <main>
    <div class="container text-center mt-5">
      <div class="mb-5">
        <h1>Documents disponibles :</h1>
      </div>
      <div class="row">
        <div class="col mb-3">
          <CvCard />
        </div>
        <div class="col">
          <AdhdCard />
        </div>
      </div>
    </div>
  </main>
</template>
