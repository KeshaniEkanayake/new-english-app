<!-- reading text in basic/reading text 3 -->
<!-- contains an image with a text -->
<template>
    <n-card>
        <template #cover>
            <img :src="imageSrc" class="image-style">
        </template>
        <h2>{{cardTitle}}</h2>
        
        <h3>{{subTopic1}}</h3>
            <p class="para-style"> {{ readingText1 }}</p>
        
            
         <h3>{{subTopic2}}</h3>
            <p class="para-style"> {{ readingText2 }}</p>

    </n-card>
  </template>
  


<script>
  export default({
    props: {

      cardTitle:{
        type: String,
        required: true,
      },

      subTopic1:{
        type: String,
        required: true,
      },

      readingText1:{
        type: Text,
        required: true,
      },

      subTopic2:{
        type: String,
        required: true,
      },

      readingText2:{
        type: Text,
        required: true,
      },

      // used to add an image dynamically to the card
      imageSrc: {
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
    max-width: 70%; /* Adjust the image size as needed */
    
  }

  .para-style{
    color: black;
    /* used to keep linebreaks and spaces as typed inside data() */
    white-space: pre-line;
    text-align: center;
  }
  </style>