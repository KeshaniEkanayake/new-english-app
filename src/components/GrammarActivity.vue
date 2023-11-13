<template>
    <div class="grammar-activity">
      <div class="sentence-container">
        <!-- Display the sentence with a blank -->
        <p class="sentence">
          {{ sentenceStart }} <span class="blank" @dragover.prevent @drop="drop"></span> {{ sentenceEnd }}
        </p>
      </div>
      <div class="options-container">
        <!-- Display draggable options -->
        <div
          v-for="(option, index) in options"
          :key="index"
          class="draggable-option"
          @dragstart="dragStart(option, index)"
          draggable
        >
          {{ option }}
        </div>
      </div>
      <!-- <button class="reset-button" @click="reset">Reset</button> -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      sentenceStart: String,
      sentenceEnd: String,
      options: Array,
    },
    data() {
      return {
        selectedOption: null,
      };
    },
    methods: {
      dragStart(option, index) {
        // Set the selected option for drag-and-drop
        this.selectedOption = { option, index };
      },
      drop(event) {
        // Update the sentence with the selected option
        if (this.selectedOption) {
          this.$set(this.options, this.selectedOption.index, null);
          this.$set(this.options, this.options.indexOf(null), this.selectedOption.option);
        }
        this.selectedOption = null;
        event.preventDefault();
      },
      reset() {
        // Emit an event to notify the parent to reset the options
        this.$emit("reset-options");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles as needed for better presentation */
  .grammar-activity {
    text-align: center;
    margin: 20px;
  }
  
  .sentence-container {
    margin-bottom: 20px;
  }
  .sentence {
    font-weight: 800;
    color: #000;
  }
  .blank {
    border-bottom: 1px solid #000;
    padding: 0 5px;
    cursor: pointer;
    display: inline-block;
    width: 100px;
  }
  
  .options-container {
    display: flex;
    justify-content: space-around;
  }
  
  .draggable-option {
    cursor: grab;
    user-select: none;
    margin: 5px;
    padding: 5px;
    border: 1px solid #000;
    border-radius: 2rem;
    background-color: #0C4F80;
    display: inline-block;
    width: 20%;
    height: 10%;
    color: white;
  }
  .reset-button {
    background-color: #B9E1FF;
    color: #0C4F80;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 5px;
    margin-top: 5%;
    padding: 5px;
    border-radius: 2rem;
    display: inline-block;
    width: 20%;
    height: 20%;
    font-size: 1rem;
    font-weight: 1000;
    transition: background-color 0.3s, color 0.3s; /* Add a smooth transition effect */
  }
  .reset-button:hover {
    background-color: #0c4f80; /* Darken the background color on hover */
    color: #fff; /* Change text color to white on hover */
    cursor: pointer; /* Set cursor to pointer by default */
  }
  </style>
  