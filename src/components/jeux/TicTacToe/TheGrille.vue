<script setup>
import TheCase from './TheCase.vue'
import TheInfo from './TheInfo.vue'
import { ref } from 'vue'

const stateCases = ref(['', '', '', '', '', '', '', '', ''])
const player = ref('rond')

function play(ca) {
  if (stateCases.value[ca] != 'rond' && stateCases.value[ca] != 'croix') {
    stateCases.value[ca] = player.value
    if (player.value === 'rond') {
      player.value = 'croix'
    } else if (player.value === 'croix') {
      player.value = 'rond'
    }
  }
}
</script>

<template>
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
