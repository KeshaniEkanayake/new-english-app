<!-- the main avatar who guides the student -->
<template>
    <div >
      <img :src="imageSource" alt="AvatarImage" class="avatar-container">
    </div>
  </template>
  

  <script>
  export default {
    props: {
        imageSource: String, // Define a prop to receive the image source
    },
  }
  </script>
  
  <style scoped>
  .avatar-container {
    position: absolute;
    top: 20%;
  /* Adjust the left position as needed */
    right: 2%; 
    /* Add any styles for the text container here */
    width: 28%;
  
  }
  
  </style>