<script setup>
import CuriculumVitae from '@/components/CuriculumVitae.vue'
import DownloadPdfButton from '@/components/documents/DownloadCV.vue'
</script>

<template>
  <main>
    <div class="container mt-5">
      <div class="row">
        <div class="col-xl-2 mb-3">
          <div>
            <DownloadPdfButton  />
          </div>
        </div>
        <div class="col">
          <div>
            <CuriculumVitae />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
