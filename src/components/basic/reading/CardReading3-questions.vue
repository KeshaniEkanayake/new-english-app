<!-- this card component contains questions realted to basic level -> reading text 3  -->

<template>
    <n-card>
          <!-- Content of task 1 -->
        <h3>Choose the correct answer.</h3>
        
      <div class="container-style">
        <!-- questions -->
       
      <div>  
        <p>1. What is the main feature of the city flat's balcony?</p>
        <RadioAnswers />
        <br/>
      </div>

      </div>
        
        <br>
        <div class="center-item">
          <ButtonCheck/>
        </div>
    </n-card>
  </template>
  


<script>
import RadioAnswers from "@/components/RadioAnswers.vue"
import ButtonCheck from "@/components/ButtonCheck.vue"
// import { Ref } from "vue"

  export default({
    components:{
        RadioAnswers, ButtonCheck,
  }, 

  setup(){
    // const questions = Ref([
    //   {questionNumber: 1,
    //                   option1: "a) It has a barbecue area",
    //                   option2: "b) It accommodates four people",
    //                   option3: "c) It overlooks the cathedral",
    //                   option4: "d) It gets the sun in the evenings",
    //                   correctAnswer: "d) It gets the sun in the evenings"},
    //   {
    //     questionNumber: 2,
    //                   question:"How many people can the upstairs bedroom in the city flat sleep?",
    //                   option1: "a) Two",
    //                   option2: "b) Three",
    //                   option3: "c) Four",
    //                   option4: "d) Six",
    //                   correctAnswer: "c) Four"
    //   },
    //   {
    //     questionNumber: 3,
    //                   question:"What is a notable feature of the farmhouse mentioned in the text?",
    //                   option1: "a) Fast internet",
    //                   option2: "b) En suite bedrooms",
    //                   option3: "c) Proximity to the city",
    //                   option4: "d) Large TV",
    //                   correctAnswer: "b) En suite bedrooms"
    //   },
    //   {
    //     questionNumber: 4,
    //                   question:"How is the farmhouse kitchen described?",
    //                   option1: "a) Fully equipped",
    //                   option2: "b) With a balcony",
    //                   option3: "c) Near shops and restaurants",
    //                   option4: "d) Only accessible by train",
    //                   correctAnswer: "a) Fully equipped"
    //   },
    //   {
    //     questionNumber: 5,
    //                   question:"What is a unique aspect of the farmhouse mentioned in the text?",
    //                   option1: "a) It has a large TV",
    //                   option2: "b) It is near the cathedral",
    //                   option3: "c) There is no internet",
    //                   option4: "d) Mobile phones are not allowed",
    //                   correctAnswer: "c) There is no internet"
    //   }
    // ])
  }

  })
</script>



<style scoped>
  .n-card {
    max-width: 50%;
    border-radius: 1.25rem;
    box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
  }

  .table-style{
    text-align: left;
  }

  .container-style{
    text-align: left;
  }
  </style>