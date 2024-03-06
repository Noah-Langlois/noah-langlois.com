<script setup>
import RULogo from '@/components/stages/RULogo.vue'
import RUInfo from '@/components/stages/RUInfo.vue'
import RUDetails from '@/components/stages/RUDetails.vue'
</script>

<template>
  <main>
    <div class="container mt-5">
      <div class="row">
        <div class="col-xl-2 mb-3">
          <RULogo />
        </div>
        <div class="col">
          <RUInfo />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <RUDetails />
        </div>
      </div>
    </div>
  </main>
</template>
