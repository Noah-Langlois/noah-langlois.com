<script setup>
import GameInfo from '@/components/jeux/Loto/GameInfo.vue'
import BouleJeu from '@/components/jeux/Loto/BouleJeu.vue'
import { ref } from 'vue'

const jeu = ref([])

function addJeu(pValue) {
  jeu.value.push(pValue)
}
</script>

<template>
  <main>
    <div class="d-flex justify-content-center">
      <GameInfo />
    </div>
    <button v-on:click="addJeu">Jouer</button>
    <div class="d-flex justify-content-center align-items-center">
      <div v-for="n in 20" v-bind:key="n">
        <BouleJeu :numero="n" />
      </div>
    </div>
  </main>
</template>
