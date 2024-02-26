<script setup>
import TheLinks from '@/components/TheLinks.vue'
</script>

<template>
  <main class="header">
    <div class="ps-3">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand text-light" id="websiteLogo" href="/">
            noah-langlois.fr
            <span class="logo-cursor">_</span>
          </a>
          <span class="text-light ps-3 pe-3">|</span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-light" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Formation
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/scolarite">Scolarité</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="/stages">Stages</a>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item disabled" href="/">Centres d'intêrets</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Documents
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/CV">CV</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="/ADHD_study">ADHD Study</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Jeux
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/jeux/tictactoe">Tic-Tac-Toe</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item disabled" href="/">Sudoku</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item disabled" href="/">Bataille Navale</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <TheLinks />
      </nav>
    </div>
  </main>
</template>
