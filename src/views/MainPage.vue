<template>
  <div class="page-background">
    <div class="button-container">
        <buttonGetstarted/>
        
        <buttonHaveAccount/>
    </div>
   
  </div>
</template>

<script>
import { defineComponent } from "vue"
import ButtonGetstarted from "@/components/ButtonGetstarted.vue"
import ButtonHaveAccount from "@/components/ButtonHaveAccount.vue"


export default defineComponent({
    components:{
          ButtonGetstarted,ButtonHaveAccount,
            },
})
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

.page-background{
    /* background-image: url(../assets/images/backgrounds/proflevel-background.png); */
    background-image: url(../assets/images/backgrounds/first-page-background.png);
    background-repeat: no-repeat;
    background-size: 100% 100%; 
    /* Center the background image */
    background-position: center ; 
    min-height: 100vh; 
   display: flex;
}

.button-container{
    margin-top: 25%;
    margin-left: 8%;
}
</style>