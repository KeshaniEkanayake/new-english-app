<!-- CardWithHeadingSubheading.vue -->
<template>
  <div class="card-style">
    <div class="card-content">
      <h2 class="card-heading">{{ cardHeading }}</h2>
      <p class="card-subheading">{{ cardSubheading }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardHeading: String,
    cardSubheading: String,
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
</style>
