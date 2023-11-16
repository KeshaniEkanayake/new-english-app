<template>
    <div class="background">
        <SideNavigation/>

        <CardReading3
            :cardTitle="cardTitle"
            :subTopic1="subTopic1"
            :readingText1="readingText1"
            :subTopic2="subTopic2"
            :readingText2="readingText2"
            :imageSrc="TextImage"
           
        />


        <CardReading3_questions></CardReading3_questions>

    </div>
</template>

<script>
import "@/assets/css/main.css"
import SideNavigation from "@/components/SideNavigation.vue"
import CardReading3 from "@/components/basic/reading/CardReading3.vue"
import readingTextImage from "@/assets/images/images-in-questions/reading3.jpg";
import CardReading3_questions from "@/components/basic/reading/CardReading3-questions.vue"

export default {
    components:{
       SideNavigation, CardReading3, CardReading3_questions,
    },

    data() {
    return {
            cardTitle: "Holiday home adverts", 

            subTopic1:"City Flat",

            readingText1:`Beautiful two-bedroom city flat five minutes' walk from 
                          the cathedral. Fully equipped kitchen, living room with
                        a large sofa and chairs, big TV and balcony. The balcony 
                        has space for four people to sit and gets the sun in the mornings, 
                        and the flat is light and warm. It has Wi-Fi and fast internet. 
                        The upstairs bedroom sleeps four people, with two double beds; the 
                        downstairs bedroom sleeps two in single beds. The flat is perfect for 
                        families and is near shops, bars and restaurants.`,

            // needs to display image in the card
            TextImage: readingTextImage,

            subTopic2:"Farmhouse",

            // dynamically adding a related reading text to the card
            readingText2:`Four-bedroom farmhouse in the countryside. All of the four 
                        double bedrooms are en suite with luxury shower and bath. Farm kitchen with 
                        barbecue, tables and chairs outside. Great for groups of friends. The supermarket
                        is half an hour by car and you can take a train from the village into the city. 
                        Escape from normal life for a few days as we have … NO INTERNET and you can only use 
                        mobile phones at the bottom of the garden!`,            


       
    };
  },
};
</script>

<style scoped>

</style>