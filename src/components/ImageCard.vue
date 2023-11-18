<template>
    <div class="card">
     
      <div class="card-content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardItem',
    props: {
      imageSrc: String
    }
  }
  </script>
  
  <style scoped>
  .card {
    background-color: white;
    height: 210px;
    width: 15%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    color: black;
    text-align: center;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  .card-content {
    padding: 0px;
    align-items: center;
    justify-content: center;
  }
  </style>
  