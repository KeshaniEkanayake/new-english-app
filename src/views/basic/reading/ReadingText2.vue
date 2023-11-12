<!-- this is the reading page displayed -->
<template>
    <div class="background">
        <SideNavigation/>

        <!-- left box-consists of reading text -->
        <CardReading2/>

        <!--right box- consists of questions -->
        <CardReading2_questions/>
       
        

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
    
</style>