<template>
    <div class="background">
      <SideNavigation/>

      <div class="container">
        <!-- first row (comment shape with text)-->
        <div class="row">
          <CommentShape class="text-container">
            <!-- Add dynamic text content here with a line break -->
            <div class="dynamic-text1" v-html="dynamicText1"></div>
          </CommentShape>
        </div>


        <!-- second row -->
        <div class="row">
          <div class="nested-grid">
            <!-- Content for the first column in the second row -->
            <div class="progress-container">
                <div class="dynamic-text2" v-html="dynamicText2"></div>
                <ImageRow :images="imageSources"/>
            <ProgressBar :progress="activityProgress"/>
            </div>
            <AvatarMain class="avatar" :imageSource="avatarImageSource"/>
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
    import ProgressBar from "@/components/ProgressBar.vue"
    import ImageRow from "@/components/ImageRow.vue";

    import "../assets/css/main.css"

    export default defineComponent({
        components:{
          SideNavigation, 
          CommentShape, AvatarMain,
          ProgressBar,
          ImageRow
        },

        data() {
          return {
            dynamicText1: "You are almost done!",
            dynamicText2: "Reading - Beginner Level",

            imageSources: [
            require("@/assets/images/success-cracker.png"),
            require("@/assets/images/success-cup.png"),
            require("@/assets/images/success-cracker.png"),
            ],

            activityProgress: 50,
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
  }

  .dynamic-text1{
    margin-top: 5%;
    margin-left: 15%; 
  }
  .dynamic-text2{
      height: 5%;
      margin-bottom: 8%;
      text-align: center;
      font-size: 1.8em;
      color: rgb(13, 161, 0);
      font-weight: 1000;
  }
  .progress-container{
    width: 700px;
    margin-left: 20%;
    margin-top: 10%;
  }

</style>