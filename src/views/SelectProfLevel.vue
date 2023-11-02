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
                    <div>
                        <a href="/basic-prof-url" class="image-link">
                            <img src="../assets/images/basicProfButton.png" alt="basic prof level button" class="basicProfButton">
                        </a>

                        <a href="/basic-prof-url" class="image-link">
                            <img src="../assets/images/intermediateProfButton.png" alt="basic prof level button" class="intermediateProfButton">
                        </a>

                        <a href="/basic-prof-url" class="image-link">
                            <img src="../assets/images/advancedProfButton.png" alt="basic prof level button" class="advancedProfButton">   
                        </a>
                    </div>

                    <AvatarOne/>
                </div>


            </div>


            
        </div>
            
    </div>
        

</template>

<script>
import { defineComponent } from "vue"
import SideNavigation from "@/components/SideNavigation.vue"
import CommentShape from "@/components/CommentShape.vue"
import AvatarOne from "@/components/AvatarOne.vue"


import "../assets/css/main.css"


    export default defineComponent({
        components:{
            SideNavigation,
            CommentShape,
            AvatarOne,
        },

        data() {
          return {
            dynamicText: "Select the module you want to learn",
          };
        },
    })
</script>

<style scoped>
    .container {
    display: grid;
    grid-template-rows: auto auto; /* Two rows, the second one may adjust its height based on content */
    
    }

    .nested-grid {
        display: grid;
        grid-template-columns: 1fr 1fr; /* Two equal-width columns */
        /* Gap between columns */
        /* gap: 10px;  */
        margin-top: 10%; /* Add top margin to move the second row down */
    }
    .basicProfButton{
        position: absolute; /* Position the image absolutely */
        top: 40%; /* Adjust the top distance as needed */
        right: 45%; /* Adjust the right distance as needed */
        width: 25%;       
    }

    .intermediateProfButton{
        position: absolute; /* Position the image absolutely */
        top: 60%; /* Adjust the top distance as needed */
        right: 45%; /* Adjust the right distance as needed */
        width: 25%;        
    }

    .advancedProfButton{
        position: absolute; /* Position the image absolutely */
        top: 80%; /* Adjust the top distance as needed */
        right: 45%; /* Adjust the right distance as needed */
        width: 25%;     
    }

    /* Use em units for font size to make it relative */
    .text-container{
        font-size: 1em;
        /* locate the comment shape 10% away from the left margin */
        left: 10%;
    }


</style>