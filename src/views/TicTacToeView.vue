<script setup>
import TheGrille from '@/components/jeux/TicTacToe/TheGrille.vue'
import GameMenu from '@/components/jeux/TicTacToe/GameMenu.vue'
import { ref } from 'vue'

const gameSelected = ref('')

function setGame(pValue) {
  gameSelected.value = pValue
}
</script>

<template>
  <main>
    <div class="pt-5" v-if="gameSelected === ''">
      <GameMenu :setGame="setGame" />
    </div>
    <div class="pt-5" v-if="gameSelected === '2P'">
      <TheGrille :setGame="setGame" />
    </div>
  </main>
</template>
