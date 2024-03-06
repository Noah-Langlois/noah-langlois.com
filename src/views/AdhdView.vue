<script setup>
import AdhdStudy from '@/components/AdhdStudy.vue'
import DownloadStudy from '@/components/documents/DownloadStudy.vue'
</script>

<template>
  <main>
    <div class="container mt-5">
      <div class="row">
        <div class="col-xl-2 mb-3">
          <DownloadStudy />
        </div>
        <div class="col">
          <AdhdStudy />
        </div>
      </div>
    </div>
  </main>
</template>
