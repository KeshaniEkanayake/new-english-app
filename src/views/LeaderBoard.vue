<template>
    <div class="background">
      <SideNavigation/>

      <div class="container">
        <!-- first row (comment shape with text)-->
        <div class="row">
          <CommentShape class="text-container">
            <!-- Add dynamic text content here with a line break -->
            <div v-html="dynamicText"></div>
          </CommentShape>
        </div>


        <!-- second row -->
        <div class="row">
          <div class="nested-grid">
            <!-- Content for the first column in the second row -->
            
          
            <LeaderBoardComponent></LeaderBoardComponent>
           
            
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
import LeaderBoardComponent from "@/components/LeaderBoardComponent.vue"

    export default defineComponent({
        components:{
    SideNavigation,
    CommentShape, AvatarMain,
    LeaderBoardComponent
},

        data() {
          return {
            dynamicText: "Congratulations! You are on the top of the leaderboard",

            // related to avatar 
            avatarImageSource: require("@/assets/images/avatars/avatarLeaderBoard.png"), // Set the image source dynamically

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
  .nested-grid{
    width: 100%;
    margin-left: 5%; /* Add a left margin to move the card-container to the right */
    margin-top: 12%;
  }
  .card-container{
    width: 100%;
    margin-left: 10%; /* Add a left margin to move the card-container to the right */
  }
</style>