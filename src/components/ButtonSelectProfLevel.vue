<!-- reusable button to select proficiency levels  -->
<template>
    
        <n-button @click="navigate" color="#0C4F80" icon-placement="right" class="n-button-style">
            <template #icon >
                <!-- using 'slot', we can add stars corresponding to the proficiency level -->
                <slot name="icon"></slot>
            </template>
            <span class="n-button-content">{{profLevel}} </span>       
        </n-button>
   
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    
  }, 

  props:{
    profLevel: String,
    link: String,
  }, 

  methods: {
    navigate() {
      if (this.link) {
        // If a link prop is provided, navigate to the specified URL
        window.location.href = this.link;
      } else {
        // Handle the case when no link prop is provided
        console.warn("No link provided for navigation");
      }
    },
  },
});

</script>

<style scoped>

 .n-button-style {
    border-radius: 20px; /* Adjust the value to control the curve amount */
    width: 60%;
    height: 50%;
    margin-bottom: 4%;
    justify-content: space-between;
    padding: 0 5vw; /*left and right padding will be 5% of the viewport width*/
  }

  .n-button-content {
    font-size: 2vw; 
}

</style>