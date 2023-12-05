<!-- tabs in the reading comprehension exercise 1 "Time to relax"-->
<template>
  <!-- for correct answers -->
  <div v-if="correctAnswer" @click="handleCorrectAnswer" class="blur-background"></div>
  <div v-if="correctAnswer" class="task-avatar">
    <img src="../assets/images/avatars/avatarOne.png" alt="" />
  </div>
  <div v-if="correctAnswer" class="task-text-box">
    Congratulations !!! you have successfully completed the task
  </div>

  <!-- for wrong answers -->
  <div v-if="wrongAnswer" @click="handleWrongAnswer" class="blur-background"></div>
  <div v-if="wrongAnswer" class="task-avatar">
    <img src="../assets/images/avatars/avatarOne.png" alt="" />
  </div>
  <div v-if="wrongAnswer" class="task-text-box">
    Opps !!! that's wrong. Take your time and think a little.
  </div>

  <n-card>
    <n-tabs type="segment">
      <n-tab-pane name="task1" tab="Task 1">
        <!-- Content of task 1 -->
        <h3>
          Match the questions with the answer. Put the corresponding number of the answer
          near the question.
        </h3>

        <!-- answers -->
        <table>
          <tr v-if="firstTaskContent">
            <td><ButtonAnswer :answer="'1) ' + firstTaskContent.answers[0]" /></td>
            <td><ButtonAnswer :answer="'2) ' + firstTaskContent.answers[1]" /></td>
            <td><ButtonAnswer :answer="'3) ' + firstTaskContent.answers[2]" /></td>
          </tr>

          <tr v-if="firstTaskContent">
            <td><ButtonAnswer :answer="'4) ' + firstTaskContent.answers[3]" /></td>
            <td><ButtonAnswer :answer="'5) ' + firstTaskContent.answers[4]" /></td>
            <!-- <td><ButtonAnswer :answer="firstTaskContent.answers[]"/></td> -->
          </tr>
        </table>
        <br /><br />

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
                @input="
                  updateAnswer(
                    question.questionId,
                    firstTaskContent.answers[parseInt($event.target.value) - 1]
                  )
                "
                class="inputbox-style"
              />
            </td>
          </tr>
        </table>

        <br />
        <div class="center-item">
          <ButtonCheck @click="checkForAnswers"/>
        </div>
      </n-tab-pane>

      <!-- task 2 tab -->
      <n-tab-pane name="task2" tab="Task 2">
        <h3>Decide whether the given statements are true or false</h3>

        <table class="td-style">
          <tr v-for="(question, index) in secondTaskContent.questions" :key="index">
            <td>{{ question.questionContent }}</td>
            <td>
              <RadioTrueFalse :questionIndex="index" :emitValue="handleRadioValue" />
            </td>
          </tr>
        </table>

        <br />
        <div class="center-item">
          <ButtonCheck @click="checkForSecondAnswers"/>
        </div>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script>
import ButtonAnswer from "@/components/ButtonAnswer.vue";
// import InputAnswer from "@/components/InputAnswer.vue"
import ButtonCheck from "@/components/ButtonCheck.vue";
import RadioTrueFalse from "@/components/RadioTrueFalse.vue";
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    ButtonAnswer,
    ButtonCheck,
    RadioTrueFalse,
  },

  data() {
    return {
      firstTaskContent: "",
      secondTaskContent: "",
      firstTaskAnswers: {},
      firstTaskAnswersCheck: true,
      secondTaskAnswers: {},
      secondTaskAnswersCheck: true,
      wrongAnswer: false,
      correctAnswer: false,
    };
  },

  methods: {

    handleWrongAnswer() {
      this.wrongAnswer = !this.wrongAnswer;
    },

    handleCorrectAnswer() {
      this.correctAnswer = !this.correctAnswer;
    },

    getReadingText() {
      axios
        .get("http://localhost:8081/challenge/1")
        .then((response) => {
          this.firstTaskContent = response.data.tasks[0];
          this.secondTaskContent = response.data.tasks[1];
          // console.log(this.secondTaskContent);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    updateAnswer(questionId, value) {
      // Update the firstTaskAnswers object with the new value
      this.$data.firstTaskAnswers[questionId] = value;
    },

    checkForAnswers() {
      for (const qId in this.firstTaskContent.questions) {
        console.log(qId);
        const question = this.firstTaskContent.questions[qId];
        if (question.correctAnswer != this.firstTaskAnswers[question.questionId]) {
          this.firstTaskAnswersCheck = false;
          this.handleWrongAnswer();
          break;
        }
      }
      if (this.firstTaskAnswersCheck) {
        this.handleCorrectAnswer();
      }
    },

    handleRadioValue({ index, value }) {
      // Update the selectedValues array with the received value and index
      this.secondTaskAnswers[index] = value;
    },

    checkForSecondAnswers() {
      console.log(this.secondTaskAnswers);
      var id = 0;
      for (const questionId in this.secondTaskContent.questions) {
        if (this.secondTaskContent.questions[questionId].correctAnswer != this.secondTaskAnswers[id]) {
          // console.log(this.firstTaskContent.questions[questionId].correctAnswer+" "+this.firstTaskAnswers[id]);
          this.secondTaskAnswersCheck = false;
          this.handleWrongAnswer();
          break;
        }
        id++;
      }
      if (this.secondTaskAnswersCheck) {
        this.handleCorrectAnswer();
      }
    },
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
.center-item {
  text-align: center;
}

/* add padding only to a selected table's td */
.td-style td {
  padding: 25px;
  text-align: left;
}

.table-data-style {
  text-align: left;
}
.inputbox-style {
  width: 50px;
}

.blur-background {
  background-color: black;
  opacity: 0.7;
  position: absolute;
  width: 96%;
  height: 100%;
  z-index: 998;
}

.task-avatar {
  position: absolute;
  z-index: 999;
  right: 0;
  bottom: 0;
}

.task-text-box {
  width: 500px;
  height: auto;
  background-color: #0c4f80;
  border: #ffffff 2px solid;
  z-index: 1000;
  top: 10%;
  position: absolute;
  border-radius: 25px;
  padding: 20px;
  font-size: 22px;
  text-align: center;
  word-wrap: break-word;
  color: #ffffff;
}
</style>
