<template>
    <div class="background1">
            <SideNavigation/> 
            
            <img src="../assets/images/basicProfButton.png" alt="basic prof level button" class="basicProfButton">
            <img src="../assets/images/intermediateProfButton.png" alt="basic prof level button" class="intermediateProfButton">
            <img src="../assets/images/advancedProfButton.png" alt="basic prof level button" class="advancedProfButton">

        
    </div>
        
   
</template>

<script>
import { defineComponent } from "vue"
import SideNavigation from "@/components/SideNavigation.vue"

    export default defineComponent({
        components:{
            SideNavigation
        }
    })
</script>

<style scoped>

    .background1{
        /* background-image: url(../assets/images/backgrounds/proflevel-background.png); */
        background-image: url(../assets/images/backgrounds/proflevel-background.png);
        background-repeat: no-repeat;
        background-size: cover; 
        /* Center the background image */
        background-position: center ; 
        min-height: 100vh; 
        display: flex;    
        
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
</style>