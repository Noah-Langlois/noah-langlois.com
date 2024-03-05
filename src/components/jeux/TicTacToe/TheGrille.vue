<script setup>
defineProps({
  setGame: Function,
  gameSelected: String
})

import TheCase from './TheCase.vue'
import TheInfo from './TheInfo.vue'
import TheRond from './TheRond.vue'
import TheCroix from './TheCroix.vue'
import { ref } from 'vue'

const stateCases = ref(['', '', '', '', '', '', '', '', ''])
const player = ref('rond')
const isWon = ref(false)
const isNull = ref(false)

function checkWinner() {
  let s = 0
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
  if (!isWon.value) {
    for (let i = 0; i <= stateCases.value.length; i++) {
      if (stateCases.value[i] == '') {
        s = s + 1
      }
    }
    if (s === 0) {
      isNull.value = true
    }
  }
}

function play(ca, game) {
  let botplay = 0
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
  if (game === '1P' && !isNull.value && !isWon.value) {
    botplay = Math.floor(Math.random() * 9)
    while (stateCases.value[botplay] != '' && !isWon.value) {
      botplay = Math.floor(Math.random() * 9)
    }
    stateCases.value[botplay] = player.value
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
  isNull.value = false
}
</script>

<template>
  <div class="d-flex justify-content-start ms-5">
    <button class="btn btn-outline-dark btn-menu-game size-hover-1-6" v-on:click="setGame('')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        fill="currentColor"
        class="bi-arrow-left-circle-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
        />
      </svg>
      Menu
    </button>
  </div>
  <div class="d-flex justify-content-center align-items-center" v-if="isNull">
    <h1>Match nul !</h1>
  </div>
  <div v-if="isWon" class="d-flex justify-content-center align-items-center top-entrance">
    <TheCroix v-if="player === 'croix'" />
    <TheRond v-if="player === 'rond'" />
    <h1 class="ps-3">a gagné</h1>
  </div>
  <div v-if="isWon || isNull" class="d-flex justify-content-center p-4 top-entrance">
    <button class="btn btn-outline-dark size-hover-1-6" @click="reset">Rejouer</button>
  </div>
  <div class="d-flex justify-content-center fluid-translation">
    <div class="grille">
      <div class="row">
        <div
          class="col border border-start-0 border-top-0"
          v-on:click="play(0, $props.gameSelected)"
        >
          <TheCase :stateCases="stateCases" :caseNumber="0" />
        </div>
        <div class="col border border-top-0" v-on:click="play(1, gameSelected)">
          <TheCase :stateCases="stateCases" :caseNumber="1" />
        </div>
        <div class="col border border-top-0 border-end-0" v-on:click="play(2, gameSelected)">
          <TheCase :stateCases="stateCases" :caseNumber="2" />
        </div>
      </div>
      <div class="row">
        <div class="col border border-start-0" v-on:click="play(3, gameSelected)">
          <TheCase :stateCases="stateCases" :caseNumber="3" />
        </div>
        <div class="col border" v-on:click="play(4, gameSelected)">
          <TheCase :stateCases="stateCases" :caseNumber="4" />
        </div>
        <div class="col border border-end-0" v-on:click="play(5, gameSelected)">
          <TheCase :stateCases="stateCases" :caseNumber="5" />
        </div>
      </div>
      <div class="row">
        <div
          class="col border border-bottom-0 border-start-0"
          v-on:click="play(6, $props.gameSelected)"
        >
          <TheCase :stateCases="stateCases" :caseNumber="6" />
        </div>
        <div class="col border border-bottom-0" v-on:click="play(7, gameSelected)">
          <TheCase :stateCases="stateCases" :caseNumber="7" />
        </div>
        <div class="col border border-bottom-0 border-end-0" v-on:click="play(8, gameSelected)">
          <TheCase :stateCases="stateCases" :caseNumber="8" />
        </div>
      </div>
    </div>
  </div>
  <div class="pt-5">
    <TheInfo :player="player" />
  </div>
</template>
