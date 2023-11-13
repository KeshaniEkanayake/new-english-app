<!-- ProgressBar.vue -->
<template>
  <p class="progress-label">{{ progress }}% Completed!</p>
  <div class="progress-bar-container">
    <div class="progress-bar" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.progress-bar-container {
  
  height: 30px;
  background-color: #acacac;
  border-radius: 5px;
  overflow: hidden;
  display: flex; 
  align-items: center;
}

.progress-bar {
  height: 100%;
  
  background-color: #55db34;
  transition: width 0.3s ease; /* Add a smooth transition effect */
}

.progress-label {
  text-align: left;
  font-weight: 1000;
  font-size: 1.5em;
  width: 100%;
  margin: 0;
  color: #0C4F80;
}
</style>
