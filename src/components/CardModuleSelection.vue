<!-- this is a reusable card for all 3 module types->grammar, listening and reading -->
<template>
    <!-- add navigation path when the card is clicked -->
    <router-link :to="link">
      <n-card size="small" hoverable class="card-style">
        <div class="card-content">
          <h3>{{ cardHeading }}</h3>
          <img :src="imageSrc" class="responsive-image"/>
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
      color:#fff;
      
    }
  
    .card-style{
          border-radius: 1.25rem;
          background-color: #0C4F80;
          width: 10vw; /*vw-viewport width*/
          height: 40vh; /*vh - viewport hwight */

          margin: 0 auto; /* Center the card horizontally */
          box-sizing: border-box; /* Include padding in the total width/height */
        transition: all 0.3s; /* Add smooth transition effect */
      
    }

    .responsive-image {
        max-width: 100%; /* Ensure the image does not exceed its container's width */
        height: auto; /* Maintain the aspect ratio */
    }


/* Media query for smaller screens */
@media screen and (max-width: 768px) {
    /* Adjust card styles for screens with a maximum width of 768px */
    .card-style {
      width: 80%;
    }
  }


  @media screen and (max-width: 576px) {
    /* Adjust card styles for screens with a maximum width of 576px */
    .card-style {
      width: 70%;
    }
  }
   
  </style>