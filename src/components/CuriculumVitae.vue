<script setup>
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const { pdf } = usePDF('../../public/CV.pdf')
</script>

<template>
  <div class="d-flex justify-content-center align-items-center pt-5">
    <VuePDF :pdf="pdf" :scale="2"></VuePDF>
  </div>
</template>
