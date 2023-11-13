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
                    <div class="dashboard-top">
                        <h2>In progress...</h2>
                        <h2 style="color: #0C4F80; font-weight: 1000;">Writing Exercise - Beginner Level</h2>
                       
                        <div class="progress-container">
                            <ProgressBar :progress="activityProgress"/>
                            <img class="image-style" src="@/assets/images/success-cup.png" alt="img">
                        </div>
                        <ButtonGetstarted class="button-style"/>
                        
                    </div>

                    <AvatarMain :imageSource="avatarImageSource"/>
                    
                </div>
            </div>    
        </div>
            
    </div>
        

</template>

<script>
import { defineComponent } from "vue"
import SideNavigation from "@/components/SideNavigation.vue"
import CommentShape from "@/components/CommentShape.vue"
import AvatarMain from "@/components/AvatarMain.vue"
import ProgressBar from "@/components/ProgressBar.vue"
import ButtonGetstarted from "@/components/ButtonGetstarted.vue"


import "../assets/css/main.css"


    export default defineComponent({
        components:{
    SideNavigation,
    CommentShape,
    AvatarMain,
    ProgressBar,
    ButtonGetstarted
},

        data() {
          return {
            dynamicText: "Hey there! Welcome back!",
            activityProgress: 50,
          
            // related to avatar 
            avatarImageSource: require("@/assets/images/avatars/avatarSpecs-guy.png"), // Set the image source dynamically

        };
        },
    })
</script>

<style scoped>   
    /* text inside the comment shape */
    /* Use em units for font size to make it relative */
    .text-container{
        font-size: 1em;
        /* locate the comment shape 10% away from the left margin */
        left: 10%;
    }
    .nested-grid{
        margin-top: 0;
    }
    .dashboard-top{
        background-color: rgb(215, 236, 255);
        border-radius: 5px;
        text-align: left;
        margin-left: 30%;
        padding: 5%;
        position: relative;
        width: 80%;
    }
  .progress-container{
    display: flex;
  }
  .image-style{
    width: 8%;
    margin-left: 5%;
    margin-bottom: 3%;
  }
  .button-style{
        width: 50%;
    }

</style>