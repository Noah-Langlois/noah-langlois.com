<script setup>
import GameInfo from '@/components/jeux/Loto/GameInfo.vue'
import BouleJeu from '@/components/jeux/Loto/BouleJeu.vue'
import { ref } from 'vue'

const jeu = ref([])

function addJeu(pValue) {
  if (jeu.value.length < 5) {
    jeu.value.push(pValue)
  }
}
</script>

<template>
  <main>
    <div class="d-flex justify-content-center">
      <GameInfo />
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <div v-for="n in 20" v-bind:key="n">
        <BouleJeu :numero="n" :addJeu="addJeu" />
      </div>
    </div>
    <p>{{ jeu }}</p>
  </main>
</template>
