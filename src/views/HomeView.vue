<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import TheMe from '@/components/TheMe.vue'
import TheLinks from '@/components/TheLinks.vue'
import HomeMenu from '@/components/HomeMenu.vue'
</script>

<template>
  <main>
    <div class="d-flex justify-content-center text-center">
      <div class="">
        <div class="pt-4 top-entrance">
          <TheMe />
        </div>
        <div class="pt-3">
          <TheWelcome />
        </div>
        <div class="pt-3">
          <TheLinks />
        </div>
        <div class="mt-5">
          <HomeMenu />
        </div>
      </div>
    </div>
  </main>
</template>
