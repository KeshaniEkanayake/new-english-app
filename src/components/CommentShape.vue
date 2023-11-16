<template>
  <div class="comment-shape-container">
    <img src="../assets/images/comment-shape.png" alt="comment-shaped image" class="comment-shape">
    <div class="text-container">
        <!-- used to add dynamic text to the image -->
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.comment-shape-container {
  position: relative;
  
}
.comment-shape {
  /* Make the image responsive to its container */
  width: 100%;
  height: auto;
  /* send the shape image to the back */
  z-index: 0;

}

.text-container {
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center; /* Center the text horizontally */
/* Make the text container cover the entire shape */
  width: 60%; 
  
  /* Add any styles for the text container here */
  font-size: 2em; /* Adjust the font size as needed */
  font-weight: 1000;
  color: #fff; /* Set the text color */

  padding: 1em;
}




/* Media query for smaller screens */
@media screen and (max-width: 768px) {
  .text-container {
    font-size: 1.5em; /* Adjust font size for smaller screens */
  }
}


</style>