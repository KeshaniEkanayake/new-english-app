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
            
            <div class="card-container">
              <!-- reading card-->
                <CardModuleSelection 
                      cardHeading="Reading" 
                      :imageSrc="readingImage"
                      :link="ReadingContentPath"
              />

              <!-- listning card -->
              <CardModuleSelection 
                      cardHeading="Listnening" 
                      :imageSrc="listeningImage"
                      :link="ListningContentPath"
              />

              <!-- writing card -->
              <CardModuleSelection 
                      cardHeading="Writing" 
                      :imageSrc="writingImage"
                      :link="WritingContentPath"
              />

              <!-- grammar card-->
              <CardModuleSelection 
                      cardHeading="Grammar" 
                      :imageSrc="grammarImage"
                      :link="GrammarContentPath"
              />
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
    import CardModuleSelection from "@/components/CardModuleSelection.vue";
    import listeningImage from "@/assets/images/listening-vector.png";
    import readingImage from "@/assets/images/reading-vector.png";
    import writingImage from "@/assets/images/writing-vector.png";
    import grammarImage from "@/assets/images/grammar-vector.png";

    import "../assets/css/main.css"

    export default defineComponent({
        components:{
          SideNavigation, 
          CommentShape, AvatarMain,
          CardModuleSelection,
        },

        data() {
          return {
            dynamicText: "Select the module you want to learn",
              
            // related to card
            // needs to display images
            listeningImage: listeningImage,
            readingImage: readingImage,
            grammarImage: grammarImage,
            writingImage: writingImage,

            // related to avatar 
            avatarImageSource: require("@/assets/images/avatars/avatarOne.png"), // Set the image source dynamically

          };
        },

            // ralted to card
            computed: {       
              ReadingContentPath() {
              return '/Basic/reading/ReadingMain'; // Modify with your path that you given in the route.vue file under "path:" variable
              },

              ListningContentPath() {
              return '/Basic/listining/lesson1'; // Modify with your path that you given in the route.vue file under "path:" variable
              },

              WritingContentPath() {
              return '/Basic/writing/lesson1'; // Modify with your path that you given in the route.vue file under "path:" variable
              },

              GrammarContentPath() {
              return '/Basic/grammar/lesson1'; // Modify with your path that you given in the route.vue file under "path:" variable
              },
            },
        })

</script>

<style scoped>
  /* text inside the comment shape */
  /* Use em units for font size to make it relative */
  .text-container {
    font-size: 1vw;
    /* locate the comment shape 10% away from the left margin */
    left: 10%;
  }

  .card-container{
    display: flex;
    margin-left: 10%; /* Add a left margin to move the card-container to the right */
    gap: 4vw;
  }
</style>