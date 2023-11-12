<!-- this card component contains questions realted to basic level -> reading text 3  -->

<template>
    <n-card>
          <!-- Content of task 1 -->
        <h3>Choose the correct answer.</h3>
        
      <div class="container-style">
        <!-- questions -->
        <p>1. What is the main feature of the city flat's balcony?</p>
        <RadioAnswers
            :answer1Text="dynamicText1.answer1"
            :answer2Text="dynamicText1.answer2"
            :answer3Text="dynamicText1.answer3"
            :answer4Text="dynamicText1.answer4"
        >
        </RadioAnswers>
        <br/>

        <p>2. How many people can the upstairs bedroom in the city flat sleep?</p>
        <RadioAnswers
            :answer1Text="dynamicText2.answer1"
            :answer2Text="dynamicText2.answer2"
            :answer3Text="dynamicText2.answer3"
            :answer4Text="dynamicText2.answer4"
        >
        </RadioAnswers>
        <br/>

        <p>3. What is a notable feature of the farmhouse mentioned in the text?</p>
        <RadioAnswers
            :answer1Text="dynamicText3.answer1"
            :answer2Text="dynamicText3.answer2"
            :answer3Text="dynamicText3.answer3"
            :answer4Text="dynamicText3.answer4"
        >
        </RadioAnswers>
        <br/>

        <p>4. How is the farmhouse kitchen described?</p>
        <RadioAnswers
            :answer1Text="dynamicText4.answer1"
            :answer2Text="dynamicText4.answer2"
            :answer3Text="dynamicText4.answer3"
            :answer4Text="dynamicText4.answer4"
        >
        </RadioAnswers>
        <br/>

        <p>5. What is a unique aspect of the farmhouse mentioned in the text?</p>
        <RadioAnswers
            :answer1Text="dynamicText4.answer1"
            :answer2Text="dynamicText4.answer2"
            :answer3Text="dynamicText4.answer3"
            :answer4Text="dynamicText4.answer4"
        >
        </RadioAnswers>
        <br/>

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

  export default({
    components:{
        RadioAnswers, ButtonCheck,
  }, 

  data() {
    return {
        dynamicText1: {
            answer1: "a) It has a barbecue area",
            answer2: "b) It accommodates four people",
            answer3: "c) It overlooks the cathedral",
            answer4: "d) It gets the sun in the evenings",
        },

        dynamicText2: {
            answer1: "a) Two",
            answer2: "b) Three",
            answer3: "c) Four",
            answer4: "d) Six",
        },

        dynamicText3: {
            answer1: "a) Fast internet",
            answer2: "b) En suite bedrooms",
            answer3: "c) Proximity to the city",
            answer4: "d) Large TV",
        },

        dynamicText4: {
            answer1: "a) Fully equipped",
            answer2: "b) With a balcony",
            answer3: "c) Near shops and restaurants",
            answer4: "d) Only accessible by train",
        },

        dynamicText5: {
            answer1: "a) It has a large TV",
            answer2: "b) It is near the cathedral",
            answer3: "c) There is no internet",
            answer4: "d) Mobile phones are not allowed",
        },
    }
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