<!-- used to get the number of the answer as the input -->
<template>
  
  <input 
    type="text" 
    inputmode="numeric" 
    pattern="[0-9]*" 
    maxlength="1" 
    onkeypress="return event.charCode >= 48 && event.charCode <= 57" 
    class="inputbox-style">
 
</template>



<script>
 import { ref, defineComponent } from "vue";

export default defineComponent({
  props: {
    onInput: Function // Callback function to emit the input value to the parent component
  },
  setup() {
    const value = ref(null);

    const handleInput = () => {
      // Emit the input value to the parent component
      if (typeof this.onInput === 'function') {
        this.onInput(value.value);
      }
    };

    return {
      value,
      handleInput
    };
  }
});
</script>



<style scoped>
 .inputbox-style{
    width: 50px;
 }
</style>