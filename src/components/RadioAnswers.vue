<!-- this radio buttons are used to mark the answers for a given question  -->
<!-- used for reading comprehension question -->
<!-- consists of 4 radio buttons -->
<template>
    <n-space>
      <n-radio
        :checked="checkedValue === 'answer1'"
        value="answer1"
        name="answers"
        @change="handleChange"
      >
      {{ answer1Text }}
      </n-radio>

      <n-radio
        :checked="checkedValue === 'answer2'"
        value="answer2"
        name="answers"
        @change="handleChange"
      >
        {{ answer2Text }}
      </n-radio>

      <n-radio
        :checked="checkedValue === 'answer3'"
        value="answer3"
        name="answers"
        @change="handleChange"
      >
      {{ answer3Text }}
      </n-radio>
      

      <n-radio
        :checked="checkedValue === 'answer4'"
        value="answer4"
        name="answers"
        @change="handleChange"
      >
      {{ answer4Text }}
      </n-radio>
    </n-space>
  </template>
  
  <script>
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    props: {
        answer1Text: String,
        answer2Text: String,
        answer3Text: String,
        answer4Text: String,
    },

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