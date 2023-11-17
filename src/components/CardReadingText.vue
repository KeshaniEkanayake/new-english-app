<!-- this card component contains an image and a text related to a reading comprehension question  -->

<template>
    <n-card>
      <template #cover>
        <img :src="imageSrc" class="image-style">
        </template>
          <h2>{{cardTitle}}</h2>
            <p class="para-style"> {{ readingText }}</p>

            <!-- background sound -->
            <!-- <audio controls autoplay loop :src="audioSrc"> 'controls attribute will put a button to stop the sound'-->
             <audio autoplay loop :src="audioSrc">
                Your browser does not support the audio element.
            </audio>
    </n-card>
  </template>
  


<script>
  export default({
    props: {

      cardTitle:{
        type: String,
        required: true,
      },

      readingText:{
        type: Text,
        required: true,
      },

      // used to add an image dynamically to the card
      imageSrc: {
              type: String,
              required: true, // Make the prop required
      },

      // add a background sound track
      audioSrc: {
        type: String,
        required: true, // Make the prop required
      },
    }
  })
</script>



<style scoped>
  .n-card {
    max-width: 40%;
    border-radius: 1.25rem;
    box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
  }

  .image-style{
    border-radius: 1.25rem;
    display: block; /* Ensures the image is centered horizontally */
    margin: 0 auto; /* Centers the image horizontally */
    max-width: 60%; /* Adjust the image size as needed */
    
  }

  .para-style{
    color: black;
    /* used to keep linebreaks and spaces as typed inside data() */
    white-space: pre-line;
    text-align: center;
  }
  </style>