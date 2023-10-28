<template>
  <div>
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
.comment-shape {
  position: absolute; /* Make the container a positioning context */
  right: 20%;
  /* send the shape image to the back */
  z-index: 0;

}

.text-container {
  position: absolute;
  width: 100%; /* Make the text container cover the entire shape */
  text-align: center; /* Center the text horizontally */
  /* Add any styles for the text container here */


  font-family: sans-serif; /* Replace "Your Font Family" with your desired font family */
  font-size: 200%; /* Adjust the font size as needed */
  font-weight: 1000;
  color: #fff; /* Set the text color */

}

</style>