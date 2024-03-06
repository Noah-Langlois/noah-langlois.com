<script setup>
import DownloadCV from './DownloadCV.vue'
</script>

<template>
  <div class="card hvr-grow-shadow" id="CV-card">
    <a class="link-dark link-underline-opacity-0" href="/documents/CV">
      <div class="card-body">
        <div class="d-flex justify-content-center text-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi-file-earmark-person"
              viewBox="0 0 16 16"
            >
              <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z"
              />
            </svg>
            <h4>CV</h4>
            <DownloadCV />
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
