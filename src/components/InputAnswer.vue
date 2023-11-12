<!-- used to get the number of the answer as the input -->
<template>
  
    <n-input v-model:value="value" type="text" placeholder="" class="inputbox-style"/>
 
</template>



<script>
 import { ref } from "vue";
export default {
  setup() {
    return {
      value: ref(null)
    };
  },

}
</script>



<style scoped>
 .inputbox-style{
    width: 50px;
 }
</style>