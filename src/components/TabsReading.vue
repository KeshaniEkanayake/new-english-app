<!-- tabs in the reading comprehension exercise 1 "Time to relax"-->
<template>
  <n-card>
    <n-tabs type="segment">
      <n-tab-pane name="task1" tab="Task 1">
        <!-- Content of task 1 -->
        <h3>Match the questions with the answer. Put the corresponding number of the answer near the question.</h3>
        
        <!-- answers -->
        <table>
          <tr v-if=" firstTaskContent">
            <td><ButtonAnswer :answer="'1) '+firstTaskContent.answers[0]"/></td>
            <td><ButtonAnswer :answer="'2) '+firstTaskContent.answers[1]"/></td>
            <td><ButtonAnswer :answer="'3) '+firstTaskContent.answers[2]"/></td>
          </tr>

          <tr v-if=" firstTaskContent">
            <td><ButtonAnswer :answer="'4) '+firstTaskContent.answers[3]"/></td>
            <td><ButtonAnswer :answer="'5) '+firstTaskContent.answers[4]"/></td>
            <!-- <td><ButtonAnswer :answer="firstTaskContent.answers[]"/></td> -->
          </tr>
        </table>
        <br><br>

        <!-- questions -->
        <table class="table-data-style">
          <tr v-for="(question, index) in firstTaskContent.questions" :key="index">
            <td>{{ question.questionContent }}</td>
            <td>
              <input
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                maxlength="1"
                @input="updateAnswer(question.questionId, firstTaskContent.answers[parseInt($event.target.value)-1])" 
                class="inputbox-style"
              >
            </td>
          </tr>
        </table>

        <br>
        <div class="center-item" @click="checkForAnswers">
          <ButtonCheck/>
        </div>
      </n-tab-pane>


      <!-- task 2 tab -->
      <n-tab-pane name="task2" tab="Task 2">
        <h3>Decide whether the given statements are true or false</h3>

        <table class="td-style">

          <tr v-for="(question, index) in secondTaskContent.questions" :key="index">
            <td>{{ question.questionContent }}</td>
            <td>
              <RadioTrueFalse
                :questionIndex="index"
                :emitValue="handleRadioValue"
              />
            </td>
          </tr>

        </table>

        <br>
        <div class="center-item" @click="checkForSecondAnswers">
          <ButtonCheck/>
        </div>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>



<script>
import ButtonAnswer from "@/components/ButtonAnswer.vue"
// import InputAnswer from "@/components/InputAnswer.vue"
import ButtonCheck from "@/components/ButtonCheck.vue"
import RadioTrueFalse from "@/components/RadioTrueFalse.vue"
import axios from "axios"
import { defineComponent } from "vue";

export default defineComponent({
  components:{
    ButtonAnswer, ButtonCheck, RadioTrueFalse,
  },

  data(){
    return{
      firstTaskContent: "",
      secondTaskContent: "",
      firstTaskAnswers: {},
      firstTaskAnswersCheck: true,
      secondTaskAnswers: {},
      secondTaskAnswersCheck: true,
    };
  },

  methods: {
    getReadingText(){
        axios.get("http://localhost:8081/challenge/1")
        .then((response) => {
          this.firstTaskContent = response.data.tasks[0];
          this.secondTaskContent = response.data.tasks[1];
          console.log(this.secondTaskContent);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    updateAnswer(questionId, value) {
      // Update the firstTaskAnswers object with the new value
      this.$data.firstTaskAnswers[questionId] = value;
      // console.log(this.$data.firstTaskAnswers);
    },

    checkForAnswers(){
      console.log(this.firstTaskAnswers);
      var id = 1;
       for(const questionId in this.firstTaskContent.questions){
        //  console.log(this.firstTaskContent.questions[questionId].correctAnswer+" "+this.firstTaskAnswers[id])
        if(this.firstTaskContent.questions[questionId].correctAnswer != this.firstTaskAnswers[id]){
          // console.log(this.firstTaskContent.questions[questionId].correctAnswer+" "+this.firstTaskAnswers[id]);
          this.firstTaskAnswersCheck = false;
        }

         id++;
         console.log(this.firstTaskAnswersCheck);
       }
    },

    handleRadioValue({ index, value }) {
      // Update the selectedValues array with the received value and index
      this.secondTaskAnswers[index] = value;
    },

    checkForSecondAnswers(){
      console.log(this.secondTaskAnswers);
      var id = 0;
      for(const questionId in this.secondTaskContent.questions){
      // console.log(this.secondTaskContent.questions[questionId].correctAnswer+" "+this.secondTaskAnswers[id])
         if(this.secondTaskContent.questions[questionId].correctAnswer != this.secondTaskAnswers[id]){
      //     // console.log(this.firstTaskContent.questions[questionId].correctAnswer+" "+this.firstTaskAnswers[id]);
           this.secondTaskAnswersCheck = false;
         }

          id++;
          console.log(this.secondTaskAnswersCheck);
      }

    }

  },

  mounted() {
    this.getReadingText();
  },

});

</script>


<style scoped>
.n-card {
    max-width: 50%;
    border-radius: 1.25rem;
    box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
  }

.n-tabs {
  background-color: white;
}
 .center-item{
  text-align: center;
 }

 /* add padding only to a selected table's td */
 .td-style td {
  padding: 25px;
  text-align: left;
}

.table-data-style{
  text-align: left;
}
.inputbox-style{
  width: 50px;
}
</style>