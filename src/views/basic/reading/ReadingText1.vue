<!-- this is the reading page displayed -->
<template>
    <div class="background">
        <SideNavigation/>
       
            <CardReadingText
            :cardTitle="cardTitle"
            :imageSrc="readingTextImage"
            :readingText="readingText"
            />

            <TabsReading/>
       
        

    </div>
    
    
</template>


<script>
import SideNavigation from "@/components/SideNavigation.vue"
import TabsReading from "@/components/TabsReading.vue"
import CardReadingText from "@/components/CardReadingText.vue"

import readingTextImage from "@/assets/images/images-in-questions/reading1.jpg";


import "../../../assets/css/main.css"

export default {
    components:{
        SideNavigation, TabsReading, CardReadingText,
    },

    data(){
        return{
            cardTitle: "Time to Relax", 

            // needs to display image in the card
            readingTextImage: readingTextImage,

            // dynamically adding a related reading text to the card
            readingText:`Come and join our lunchtime yoga class with experienced yoga teacher Divya Bridge!
            When? Every Tuesday at 1.30 p.m.
            Where? Meeting Room 7
            How much? £10 for four 30-minute classes.
            What to bring? Comfortable clothes. Divya will provide the yoga mats.
            How to join? Write to Sam at Sam.Holden@example.com
            We can only take a maximum of 20 in the room, so book now!`,            
        };
    },
}
</script>

<style scoped>
    
</style>