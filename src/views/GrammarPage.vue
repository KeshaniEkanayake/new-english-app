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
            <div class="activity">
              <GrammarActivity
                :sentenceStart="sentenceStart"
                :sentenceEnd="sentenceEnd"
                :options="options"
              />
              <div class="progressbar">
                <ProgressBarSmall :progress="activityProgress"/>
              </div>
            </div>
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
    import GrammarActivity from "@/components/GrammarActivity.vue"

    import "../assets/css/main.css"
import ProgressBarSmall from "@/components/ProgressBar-small.vue"


    export default defineComponent({
        components:{
    SideNavigation,
    CommentShape, AvatarMain,
    GrammarActivity,
    ProgressBarSmall
},

        data() {
          return {
            dynamicText: "Choose the suitable verb",
            
            activityProgress: 20,
            showProgressBar: true,

            sentenceStart: "The quick brown fox",
            sentenceEnd: "over the lazy dog.",
            options: ["jumps", "runs", "walks"],
                    
            avatarImageSource: require("@/assets/images/avatars/avatarOne.png"), // Set the image source dynamically

          };
        },

        })

</script>

<style scoped>
  .text-container {
    font-size: 1em;
    left: 10%;
  }

  .activity{
    /* display: flex; */
    margin-left: 10%; /* Add a left margin to move the card-container to the right */
    width: 100%;
    font-size: 1.5rem;
    text-align: center;
  }
  .nested-grid {
    margin-top: 5%; /* Add top margin to move the second row down */
}
.progressbar{
  margin-left: 10%;
  width: 100%;
  margin-top: 15%;
}
</style>