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


            <!-- second row (buttons and the avatar)-->
            <div class="row">
                <!--second row of the page is divided into 2 columns-->
                <div class="nested-grid">
                    <!-- Content for the first column in the second row (prof level buttons) -->
                    <div class="button-container">
                       <ButtonSelectReadingTask
                        :round="true"
                        type="info"
                        link="/your-link-here"
                        buttonText="Reading Text 1"
                       >
                        </ButtonSelectReadingTask>

                        <ButtonSelectReadingTask
                        :round="true"
                        type="info"
                        link="/your-link-here"
                        buttonText="Reading Text 2"
                       >
                        </ButtonSelectReadingTask>
                    </div>

                    <AvatarMain :imageSource="avatarImageSource"/>
                    
                </div>
            </div>    
        </div>
            
    </div>
</template>

<script>
import SideNavigation from "@/components/SideNavigation.vue"
import CommentShape from "@/components/CommentShape.vue"
import AvatarMain from "@/components/AvatarMain.vue"
import ButtonSelectReadingTask from "@/components/ButtonSelectReadingTask.vue"



import "../../../assets/css/main.css"

export default {
        components:{
            SideNavigation,
            CommentShape,
            AvatarMain,
            ButtonSelectReadingTask,
        },

        data() {
          return {
            dynamicText: "Hi! I am ______  .  I will be guiding you through the Reading Module",
          
            avatarImageSource: require("@/assets/images/avatars/avatarTwo.png"), // Set the image source dynamically
        };
        },
    };

</script>



<style scoped>
    /* text inside the comment shape */
    /* Use em units for font size to make it relative */
    .text-container{
        font-size: 1em;
        /* locate the comment shape 10% away from the left margin */
        left: 10%;
    }

    /* move the set of buttons to the center of the page */
    .button-container{
        margin-left: 20%;
    }
</style>