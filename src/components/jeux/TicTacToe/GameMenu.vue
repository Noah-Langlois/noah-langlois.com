<script setup>
defineProps({
  setGame: Function
})
</script>

<template>
  <div class="d-flex justify-content-center text-center">
    <div>
      <h1>Tic-Tac-Toe</h1>
      <div class="pt-3">
        <button class="btn btn-outline-dark" v-on:click="setGame('2P')">2 Joueur</button>
      </div>
      <div class="pt-3">
        <button class="btn btn-outline-dark" v-on:click="setGame('1P')">1 Joueur</button>
      </div>
    </div>
  </div>
</template>
