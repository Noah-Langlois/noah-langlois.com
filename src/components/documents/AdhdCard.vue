<script setup>
import DownloadStudy from './DownloadStudy.vue'
</script>

<template>
  <div class="card hvr-grow-shadow" id="ADHD-card">
    <a class="link-dark link-underline-opacity-0" href="/documents/ADHD_study">
      <div class="card-body">
        <div class="d-flex justify-content-center text-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi-file-earmark-text"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"
              />
              <path
                d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"
              />
            </svg>
            <h4>Papier de recherche</h4>
            <DownloadStudy />
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
