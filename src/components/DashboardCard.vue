<!-- DashboardCard.vue -->
<template>
    <div class="card-style">
      <div class="card-content">
        <h2 class="card-heading">{{ heading }}</h2>
        <h2 class="card-subheading" :style="{ color: subheadingColor, fontWeight: subheadingFontWeight }">{{ subheading }}</h2>
        <div class="progress-container">
          <ProgressBar :progress="progress"/>
          <img class="image-style" :src="imageSrc" alt="img">
        </div>
        <ButtonGetstarted class="button-style"/>  
      </div>
    </div>
  </template>
  
  <script>
import ProgressBar from "@/components/ProgressBar.vue"
import ButtonGetstarted from "@/components/ButtonGetstarted.vue"

  export default {
    props: {
      heading: String,
      subheading: String,
      subheadingColor: String,
      subheadingFontWeight: String,
      progress: Number,
      imageSrc: String,
    },
  };
  </script>
  
  <style scoped>
  .card-style {
    border-radius: 1.25rem;
    background-color: rgb(215, 236, 255);
    width: 30%;
    margin: 0 auto;
    box-sizing: border-box;
    transition: all 0.3s;
    overflow: hidden;
    color: #0C4F80;
  }
  
  .card-content {
    padding: 16px;
  }
  
  .card-heading {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
  
  .card-subheading {
    font-size: 1rem;
    margin-bottom: 16px;
  }
  
  .progress-container {
    display: flex;
    align-items: center;
  }
  
  .image-style {
    width: 30px; /* Adjust the width as needed */
    margin-left: 10px; /* Add spacing between progress bar and image */
  }
  
  /* Add other styles as needed */
  </style>
  