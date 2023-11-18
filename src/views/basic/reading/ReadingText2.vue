<!-- this is the reading page displayed -->
<template>
    <div class="background">
        <SideNavigation/>

        <div class="readingtext-container-style">
            <CardReading2/>
            <CardReading2_questions/>
        </div>
        
        
    </div>
        
    
</template>


<script>
import SideNavigation from "@/components/SideNavigation.vue"
import CardReading2 from "@/components/basic/reading/CardReading2.vue"
import CardReading2_questions from "@/components/basic/reading/CardReading2-questions.vue"




import "../../../assets/css/main.css"

export default {
    components:{
       SideNavigation, CardReading2, CardReading2_questions
    },


    
    
}
</script>

<style scoped>
    .readingtext-container-style{
        display: flex;
        justify-content: center;
        gap: 3%;

   } 
</style>