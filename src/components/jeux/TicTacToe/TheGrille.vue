<script setup>
import TheCase from './TheCase.vue'
import TheInfo from './TheInfo.vue'
import TheRond from './TheRond.vue'
import TheCroix from './TheCroix.vue'
import { ref } from 'vue'

const stateCases = ref(['', '', '', '', '', '', '', '', ''])
const player = ref('rond')
const isWon = ref(false)

function checkWinner() {
  if (
    stateCases.value[0] === stateCases.value[1] &&
    stateCases.value[0] === stateCases.value[2] &&
    stateCases.value[0] != ''
  ) {
    isWon.value = true
  }
  if (
    stateCases.value[3] === stateCases.value[4] &&
    stateCases.value[3] === stateCases.value[5] &&
    stateCases.value[3] != ''
  ) {
    isWon.value = true
  }
  if (
    stateCases.value[6] === stateCases.value[7] &&
    stateCases.value[6] === stateCases.value[8] &&
    stateCases.value[6] != ''
  ) {
    isWon.value = true
  }
  if (
    stateCases.value[0] === stateCases.value[3] &&
    stateCases.value[0] === stateCases.value[6] &&
    stateCases.value[0] != ''
  ) {
    isWon.value = true
  }
  if (
    stateCases.value[1] === stateCases.value[4] &&
    stateCases.value[1] === stateCases.value[7] &&
    stateCases.value[1] != ''
  ) {
    isWon.value = true
  }
  if (
    stateCases.value[2] === stateCases.value[5] &&
    stateCases.value[2] === stateCases.value[8] &&
    stateCases.value[2] != ''
  ) {
    isWon.value = true
  }
  if (
    stateCases.value[0] === stateCases.value[4] &&
    stateCases.value[0] === stateCases.value[8] &&
    stateCases.value[0] != ''
  ) {
    isWon.value = true
  }
  if (
    stateCases.value[6] === stateCases.value[4] &&
    stateCases.value[6] === stateCases.value[2] &&
    stateCases.value[6] != ''
  ) {
    isWon.value = true
  }
}

function play(ca) {
  if (stateCases.value[ca] != 'rond' && stateCases.value[ca] != 'croix' && !isWon.value) {
    stateCases.value[ca] = player.value
    checkWinner()
    if (!isWon.value) {
      if (player.value === 'rond') {
        player.value = 'croix'
      } else if (player.value === 'croix') {
        player.value = 'rond'
      }
    }
  }
}

function reset() {
  stateCases.value = ['', '', '', '', '', '', '', '', '']
  isWon.value = false
}
</script>

<template>
  <div v-if="isWon" class="d-flex justify-content-center align-items-center">
    <TheCroix v-if="player === 'croix'" />
    <TheRond v-if="player === 'rond'" />
    <h1 class="ps-3">a gagné</h1>
  </div>
  <div v-if="isWon" class="d-flex justify-content-center p-4">
    <button class="btn btn-outline-dark" @click="reset">Reset</button>
  </div>
  <div class="d-flex justify-content-center">
    <div class="grille">
      <div class="row">
        <div class="col border border-start-0 border-top-0" v-on:click="play(0)">
          <TheCase :stateCases="stateCases" :caseNumber="0" />
        </div>
        <div class="col border border-top-0" v-on:click="play(1)">
          <TheCase :stateCases="stateCases" :caseNumber="1" />
        </div>
        <div class="col border border-top-0 border-end-0" v-on:click="play(2)">
          <TheCase :stateCases="stateCases" :caseNumber="2" />
        </div>
      </div>
      <div class="row">
        <div class="col border border-start-0" v-on:click="play(3)">
          <TheCase :stateCases="stateCases" :caseNumber="3" />
        </div>
        <div class="col border" v-on:click="play(4)">
          <TheCase :stateCases="stateCases" :caseNumber="4" />
        </div>
        <div class="col border border-end-0" v-on:click="play(5)">
          <TheCase :stateCases="stateCases" :caseNumber="5" />
        </div>
      </div>
      <div class="row">
        <div class="col border border-bottom-0 border-start-0" v-on:click="play(6)">
          <TheCase :stateCases="stateCases" :caseNumber="6" />
        </div>
        <div class="col border border-bottom-0" v-on:click="play(7)">
          <TheCase :stateCases="stateCases" :caseNumber="7" />
        </div>
        <div class="col border border-bottom-0 border-end-0" v-on:click="play(8)">
          <TheCase :stateCases="stateCases" :caseNumber="8" />
        </div>
      </div>
    </div>
  </div>
  <div class="pt-5">
    <TheInfo :player="player" />
  </div>
</template>
