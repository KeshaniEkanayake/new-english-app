<template>
    <div class="video-card">
      <div class="video-container">
        <iframe
          width="100%"
          height="100%"
          :src="videoSrc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </template>
  
<script>
export default {
    props: {
        videoSrc: String, // Define a prop to receive the video source
    },
  }
</script>

  <style scoped>
  .video-card {
    width: 100%;
    height: 100%;
  }
  .video-container {
    
    position: relative;
    overflow: hidden;
    width: 60%;
    height: 70%;
  }
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  /* Add any additional styles as needed */
  </style>
  