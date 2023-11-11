<!-- this radio buttons are used to mark true or false  -->
<!-- used for reading comprehension question -->
<template>
    <n-space>
      <n-radio
        :checked="checkedValue === 'true'"
        value="true"
        name="answers"
        @change="handleChange"
      >
       True
      </n-radio>
      <n-radio
        :checked="checkedValue === 'false'"
        value="false"
        name="answers"
        @change="handleChange"
      >
        False
      </n-radio>
      
    </n-space>
  </template>
  
  <script>
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    setup() {
      const checkedValueRef = ref(null);
      
      return {
        disabled: ref(true),
        checkedValue: checkedValueRef,
        handleChange(e) {
          checkedValueRef.value = e.target.value;
        }
      };
    }
  });
  </script>