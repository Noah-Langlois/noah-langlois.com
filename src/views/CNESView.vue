<script setup>
import CNESInfo from '../components/stages/CNESInfo.vue'
import CNESLogo from '../components/stages/CNESLogo.vue'
</script>

<template>
  <main>
    <div class="container mt-5">
      <div class="row">
        <div class="col-xl-2 mb-3">
          <CNESLogo />
        </div>
        <div class="col">
          <CNESInfo />
        </div>
      </div>
    </div>
  </main>
</template>
