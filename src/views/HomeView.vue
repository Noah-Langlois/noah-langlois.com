<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import TheMe from '@/components/TheMe.vue'
</script>

<template>
  <main>
    <div class="row align-items-center">
      <div class="col text-center">
        <div class="pt-4">
          <TheMe />
        </div>
        <div class="pt-3">
          <TheWelcome />
        </div>
      </div>
    </div>
  </main>
</template>
