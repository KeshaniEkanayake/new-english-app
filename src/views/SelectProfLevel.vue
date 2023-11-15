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
                        <ButtonSelectProfLevel profLevel="Basic" link="/selectModule">
                            <template v-slot:icon>
                                <n-icon color="#FFC700">
                                <Star/>
                                </n-icon>
                            </template>
                        </ButtonSelectProfLevel>  
                        
                        
                        <ButtonSelectProfLevel profLevel="Intermediate" link="/selectModule">
                        <template v-slot:icon>
                            <n-icon color="#FFC700">
                            <Star/>
                            </n-icon>
                            <n-icon color="#FFC700">
                            <Star />
                            </n-icon>
                        </template>
                        </ButtonSelectProfLevel>

                        <ButtonSelectProfLevel profLevel="Advanced" link="/selectModule">
                            <template v-slot:icon>
                                <n-icon color="#FFC700">
                                <Star/>
                                </n-icon>

                                <n-icon color="#FFC700">
                                <Star />
                                </n-icon>

                                <n-icon color="#FFC700">
                                <Star />
                                </n-icon>
                            </template>
                        </ButtonSelectProfLevel>     
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
import ButtonSelectProfLevel from "@/components/ButtonSelectProfLevel.vue"

import { Star } from "@vicons/ionicons5";


import "../assets/css/main.css"


    export default defineComponent({
        components:{
            SideNavigation,
            CommentShape,
            AvatarMain,
            ButtonSelectProfLevel,
            Star,
        },

        data() {
          return {
            dynamicText: "Select the module you want to learn",
          
            // related to avatar 
            avatarImageSource: require("@/assets/images/avatars/avatarOne.png"), // Set the image source dynamically

        };
        },
    })
</script>

<style scoped>   
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

    /* text inside the comment shape */
    /* Use em units for font size to make it relative */
    .text-container{
        font-size: 1em;
        /* locate the comment shape 10% away from the left margin */
        left: 10%;
    }

</style>