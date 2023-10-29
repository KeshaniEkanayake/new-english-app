<!-- this is a reusable card for all 3 module types->grammar, listening and reading -->
<template>
    <!-- add navigation path when the card is clicked -->
    <router-link :to="link">
      <n-card size="small" hoverable class="card-style">
        <div class="card-content">
          <h3>{{ cardHeading }}</h3>
          <img :src="imageSrc" />
          <br>
        </div>
      </n-card>
    </router-link>
  </template>
   
  
  
  <script>
    export default({
      props:{
        cardHeading:{
          type: String,
        },
  
        // used to add an image dynamically to the card
        imageSrc: {
                type: String,
                required: true, // Make the prop required
        },
  
        // add navigation path
        link: {
            type: String, // Route path for navigation
            // required: true,
          },
      },  
    });
   
  </script>
  
  
  
  
  <style scoped>
    .card-content{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center; /* Optional, to center-align the text */
      /* padding: 10px; */
      
    }
  
    .card-style{
          border-radius: 1.25rem;
          background-color: #0C4F80;
          width: 90%;
          height: 90%;
      }
  </style>