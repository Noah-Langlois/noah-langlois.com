<script setup>
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const { pdf, pages } = usePDF('../../public/ADHD_study.pdf')
</script>

<template>
  <div class="d-flex justify-content-center align-items-center" v-for="page in pages" :key="page">
    <VuePDF :pdf="pdf" :page="page" :scale="2" />
  </div>
</template>
