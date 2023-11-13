<!-- ImageRow.vue -->
<template>
    <div class="image-row">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        :alt="'Image ' + (index + 1)"
        :style="{ transform: index === 0 ? 'scaleX(-1)' : 'none' }"
        class="image"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      images: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .image-row {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-left: 10%;
    margin-bottom: 5%;
    height: 40%;
    width: 80%;
  }
  
  .image {
    width: 30%; /* Adjust the width as needed */
    height: auto;
  }
  </style>
  