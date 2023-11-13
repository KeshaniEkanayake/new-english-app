<!-- use to display answers that can be selected in a particular lesson -->

<template>
    <n-space>
      <n-button strong secondary type="info" class="button-style">
        {{answer}}
      </n-button>
    </n-space>
  </template>
  
  <script>
  export default {
  
      props: {
          answer: {
            type: String,
            // default value to be displayed 
            default: ()=>"Answer",
          },
        },
  }
  </script>
  
  <style scoped>
   .button-style{
      width: 200px;
   }
  </style>