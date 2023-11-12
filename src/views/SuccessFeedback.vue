<template>
    <div class="background">
      <SideNavigation/>

      <div class="container">
        <!-- first row (comment shape with text)-->
        <div class="row">
          <CommentShape class="text-container">
            <!-- Add dynamic text content here with a line break -->
            <div class="comment">
            <h3>HOORAY!!!</h3>
            <p>You successfully completed the lesson</p>
            </div>
          </CommentShape>
        </div>


        <!-- second row -->
        <div class="row">
          <div class="nested-grid">
            <!-- Content for the first column in the second row -->
            
            <AvatarMain :imageSource="avatarImageSource"/>
          </div>  
        </div>
      </div>
    </div>
</template>


<script>
    import { defineComponent } from "vue"
    import CommentShape from "@/components/CommentShape.vue"
    import AvatarMain from "@/components/AvatarMain.vue"
    import SideNavigation from "@/components/SideNavigation.vue"

    import "../assets/css/main.css"

    export default defineComponent({
        components:{
          SideNavigation, 
          CommentShape, AvatarMain,
        },

        data() {
          return {
            // related to avatar 
            avatarImageSource: require("@/assets/images/avatars/avatarMuslim.png"), // Set the image source dynamically
          };
        },
            
        })

</script>

<style scoped>
  /* text inside the comment shape */
  /* Use em units for font size to make it relative */
  .text-container {
    font-size: 1em;
    /* locate the comment shape 10% away from the left margin */
    left: 10%;
    height: 100px;
  }

  .comment{
    margin-bottom: -10px;
    height: 100px;
  }

</style>