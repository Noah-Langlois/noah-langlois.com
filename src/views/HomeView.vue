<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import TheMe from '@/components/TheMe.vue'
</script>

<template>
  <main>
    <div class="row">
      <div class="col-5">
        <div class="d-flex justify-content-center p-3">
          <TheMe />
        </div>
        <div class="d-flex justify-content-center">
          <TheWelcome />
        </div>
      </div>
      <div class="col">
        <div class="d-flex pt-5" style="height: 400px">
          <div class="vr"></div>
        </div>
      </div>
    </div>
  </main>
</template>
