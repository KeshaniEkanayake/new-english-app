<template>
  <div class="background1">
    <SideNavigation/>

    <CommentShape>
     <!-- Add dynamic text content here with a line break -->
     <div v-html="dynamicText"></div>
    </CommentShape>

    <div class="outer-container">
      
      <AvatarOne/>
    </div>
    
  </div>
</template>


<script>
    import { defineComponent } from "vue"
    import CommentShape from "@/components/CommentShape.vue"
    import AvatarOne from "@/components/AvatarOne.vue"
    import SideNavigation from "@/components/SideNavigation.vue"

    import "../assets/css/main.css"

    export default defineComponent({
        components:{
          SideNavigation, CommentShape, AvatarOne
            },

            data() {
              return {
                dynamicText: "Select the module <br> you want to learn",
              };
            },
        })

</script>

<style scoped>

  .outer-container{
    display: flex;
    justify-content: space-between; /* Align the content and AvatarOne component to the right */

  }
</style>