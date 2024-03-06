<script setup>
import { VuePDF, usePDF } from '@tato30/vue-pdf'
const { pdf } = usePDF('../../CV.pdf')
</script>

<template>
  <div class="d-flex justify-content-center align-items-center">
    <div id="CV">
      <VuePDF :pdf="pdf" :scale="0.8"></VuePDF>
    </div>
  </div>
</template>
