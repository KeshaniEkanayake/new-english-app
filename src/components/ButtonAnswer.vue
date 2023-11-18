<!-- use to display answers that can be selected in a particular lesson -->

<template>
    <n-space>
      <n-button strong secondary type="info" class="button-style">
        <span class="button-content">{{answer}}</span>
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
      width: 14vw;/*vw-viewport width */
   }

   .button-content {
    font-size: 1.2vw; /*vw-viewport width */
}
  </style>