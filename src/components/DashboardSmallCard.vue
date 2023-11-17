<!-- CardWithHeadingSubheading.vue -->
<template>
  <div class="card-style">
    <div class="card-content">
      <div class="image-container">
        <img :src="imageSrc" alt="Card Image" class="card-image" />
      </div>
      <div class="text-content">
        <h2 class="card-heading">{{ cardHeading }}</h2>
        <p class="card-subheading">{{ cardSubheading }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardHeading: String,
    cardSubheading: String,
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
  border: solid 3px #0C4F80;
}

.card-content {
  display: flex;
  justify-content: space-between;
  /* padding: 10px; */
}

.text-content {
  flex-grow: 1;
}

.card-heading {
  font-size: 1.2rem;
  /* margin-bottom: 8px; */
}

.card-subheading {
  font-size: 1rem;
  font-size: medium;
  font-weight: 1000;
  /* margin-bottom: 10px; */
}

.image-container {
  /* flex-shrink: 0; */
 width: 50%;
 /* padding: 5px; */
 padding-top: 5px;
 display: flex;
 justify-content: center;
 background-color: #0C4F80;
}

.card-image {
  width: 80%;
  height: 80%;
  margin-top: 6%;
}
</style>
