<!-- this is the reading page displayed -->
<template>
    <div class="background">
        <SideNavigation/>
            <div class="readingtext-container-style">
                <CardReadingText
                :cardTitle="textContent.challengeTitle"
                :imageSrc="readingTextImage"
                :readingText="textContent.challengeDescription"
                :audioSrc="audioSource"
                />

                <TabsReading/>
            </div>           
    </div>
    
    
</template>


<script>
import SideNavigation from "@/components/SideNavigation.vue"
import TabsReading from "@/components/TabsReading.vue"
import CardReadingText from "@/components/CardReadingText.vue"

import readingTextImage from "@/assets/images/images-in-questions/reading1.jpg";

import audioFile from "@/assets/audio/yoga-wind-chimes.mp3"

import "../../../assets/css/main.css"

import axios from "axios";

export default {
    components:{
        SideNavigation, TabsReading, CardReadingText,
    },

    data(){
        return{
            
            textContent: "",

            // needs to display image in the card
            readingTextImage: readingTextImage,
            
            audioSource: audioFile, 
        };
    },

    methods:{
        getReadingText(){
            axios.get("http://localhost:8081/challenge/1")
            .then((response) => {
                this.textContent = response.data;
                // console.log(this.textContent);
            })
            .catch((error) => {
                console.log(error);
            });
        },
    },

    mounted() {
        this.getReadingText();
    }
}
</script>

<style scoped>
   .readingtext-container-style{
        display: flex;
        justify-content: center;
        gap: 3%;
   } 
</style>