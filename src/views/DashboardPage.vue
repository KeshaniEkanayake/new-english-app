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
                    <div class="dashboard">

                    <div class="card-container">
                        <DashboardSmallCard :cardHeading="cardHeading1" :cardSubheading="cardSubheading1" :imageSrc="cardImage1"/>
                        <DashboardSmallCard :cardHeading="cardHeading2" :cardSubheading="cardSubheading2" :imageSrc="cardImage2"/>
                        <DashboardSmallCard :cardHeading="cardHeading3" :cardSubheading="cardSubheading3" :imageSrc="cardImage3"/>
                    </div>

                        <div class="dashboard-top">
                            <div class="card-left">
                                <h2>In progress...</h2>
                                <h2 style="color: #0C4F80; font-weight: 1000;">Writing Exercise - Beginner Level</h2>
                            
                                <div class="progress-container">
                                    <ProgressBar :progress="activityProgress"/>
                                </div>
                                <ButtonGetstarted class="button-style"/>  
                            </div>

                            <div class="card-right">
                                <img class="image-style" src="@/assets/images/success-cup.png" alt="img">
                            </div>
                        </div>

                    <div class="dashboard-bottom">
                        <h2 style="color: #0C4F80; font-weight: 1000;">Badges Earned</h2>
                        <ImageRow class="image-row" :images="imageSources"/>
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
import SideNavigation from "@/components/SideNavigation.vue"
import CommentShape from "@/components/CommentShape.vue"
import AvatarMain from "@/components/AvatarMain.vue"
import ProgressBar from "@/components/ProgressBar.vue"
import ButtonGetstarted from "@/components/ButtonGetstarted.vue"
import DashboardSmallCard from "@/components/DashboardSmallCard.vue"

import "../assets/css/main.css"
import ImageRow from "@/components/ImageRow.vue"


    export default defineComponent({
        components:{
    SideNavigation,
    CommentShape,
    AvatarMain,
    ProgressBar,
    ButtonGetstarted,
    DashboardSmallCard,
    ImageRow
},

        data() {
          return {
            dynamicText: "Hey there! Welcome back!",
            activityProgress: 50,

            cardHeading1: "Level",
            cardSubheading1: "Beginner",
            cardImage1: require("@/assets/images/icons/next-level.png"),
            cardHeading2: "Rank",
            cardSubheading2: "1234",
            cardImage2: require("@/assets/images/icons/top.png"),
            cardHeading3: "Target",
            cardSubheading3: "500 Points",
            cardImage3: require("@/assets/images/icons/reward.png"),

            imageSources: [
            require("@/assets/images/Badge.png"),
            require("@/assets/images/Badge.png"),
            require("@/assets/images/Badge.png"),
            require("@/assets/images/Badge.png"),
            require("@/assets/images/Badge.png"),
            ],     
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
        margin-top: 15%;
        margin-left: 6%;
       
    }
    .dashboard{
        /* margin-left: 15%;  */
        width: 50vw;
    }
    .dashboard-top{
        display: flex;
        flex-direction: row;
        background-color: rgb(215, 236, 255);
        border-radius: 1.25rem;
        text-align: left;
        /* margin-left: 30%; */
        padding: 5%;
<<<<<<< HEAD
        position: relative;
        width: 50vw;/*vw-viewport width */
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
=======
        /* position: relative; */
        /* width: 535px; */
>>>>>>> 0b84403b34a5a94c83bb74090fabb00ecc9129c5
    }
    .card-container {
  display: flex;
  margin-bottom: 5%;
  /* margin-top: 5%; */
  /* width: 600px; */
}
.dashboard-bottom{
    background-color: rgb(215, 236, 255);
        border-radius: 1.25rem;
        text-align: left;
        padding: 5%;
        position: relative;
        /* width: 535px; */
    margin-top: 5%;
    margin-bottom: 5%;
}
  .progress-container{
    display: flex;
    margin-bottom: 5%;
  }
  .image-style{
    width: 50%;
    height: 90%;
    /* margin-left: 5%;
    margin-bottom: 3%; */
  }
  .card-left{
    width: 70%;
  }
  .card-right{
    width: 30%;
    display: flex;
    justify-content: center;
    text-align: center;
    padding-top: 5%;
  }
  .button-style{
        width: 50%;
    }
.image-row {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-left: 0; 
    margin-bottom: 0;
    height: 30%;
    width: 30%;
  }
</style>