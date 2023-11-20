<!-- RadioTrueFalse.vue -->
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
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  props: {
    questionIndex: Number, // Add a prop to receive the question index
    emitValue: Function, // Add a prop to receive the emit function from the parent
  },
  setup(props) {
    const checkedValueRef = ref(null);

    watch(checkedValueRef, (newValue) => {
      // Emit the value and the corresponding question index to the parent
      props.emitValue({ index: props.questionIndex, value: newValue });
    });

    return {
      checkedValue: checkedValueRef,
      handleChange(e) {
        checkedValueRef.value = e.target.value;
      },
    };
  },
});
</script>


