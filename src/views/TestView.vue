<template>
  <div>
    <!-- Circle shape with dynamic text -->
    <div :style="circleStyle">
      {{ dynamicText }}
    </div>

    <!-- Comment shape with dynamic comment text -->
    <div :style="commentStyle">
      {{ dynamicComment }}
    </div>

    <!-- Inputs for updating dynamic text and comment -->
    <div>
      <input v-model="dynamicText" placeholder="Enter text" />
      <input v-model="dynamicComment" placeholder="Enter comment" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicText: "Hello, Vue!",
      dynamicComment: "A comment!",
    };
  },
  computed: {
    circleStyle() {
      return {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: 'blue',
        color: 'white',
        textAlign: 'center',
        lineHeight: '100px',
        margin: '10px',
      };
    },
    commentStyle() {
      return {
        width: '150px',
        height: '50px',
        background: 'green',
        color: 'white',
        textAlign: 'center',
        lineHeight: '50px',
        margin: '10px',
      };
    },
  },
};
</script>
