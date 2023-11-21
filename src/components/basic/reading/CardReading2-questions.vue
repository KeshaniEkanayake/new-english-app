<!-- has a drag and drop functionality -->
<template>

   <!-- for correct answers -->
   <div v-if="correctAnswer" @click="handleCorrectAnswer" class="blur-background"></div>
   <div v-if="correctAnswer" class="task-avatar">
     <img src="../../../assets/images/avatars/avatarOne.png" alt="" />
   </div>
   <div v-if="correctAnswer" class="task-text-box">
     Congratulations !!! you have successfully completed the task
   </div>
 
   <!-- for wrong answers -->
   <div v-if="wrongAnswer" @click="handleWrongAnswer" class="blur-background"></div>
   <div v-if="wrongAnswer" class="task-avatar">
     <img src="../../../assets/images/avatars/avatarOne.png" alt="" />
   </div>
   <div v-if="wrongAnswer" class="task-text-box">
     Opps !!! that's wrong. Take your time and think a little.
   </div>

  <n-card>
    <h3>Match the phrases with the sentences. Drag the correct answer and drop it near the question.</h3>

    <!-- Answers -->
    <div
      v-for="answer in answers"
      :key="answer.id"
      class="draggable"
      :draggable="true"
      @dragstart="dragStart(answer.text)"
    >
      <ButtonAnswer :answer="answer.text" />
    </div>

    <br><br>

    <!-- Questions -->
    <div
      v-for="question in questions"
      :key="question.id"
      class="droppable"
      @dragover.prevent="dragOver(question.id)"
      @drop="drop(question.id)"
      @dragleave="dragLeave(question.id)"
      :class="{ 'drag-over': isDragOver[question.id] }"
    >
      <p>{{ question.text }}</p>
      <div
        v-if="selectedAnswers[question.id]"
        :class="{ 'dropped-answer': selectedAnswers[question.id], 'bold-answer': selectedAnswers[question.id] }"
        style="font-weight: bold;" 
      >
        {{ selectedAnswers[question.id] }}
      </div>
    </div>

    <br>

    <div class="center-item">
      <ButtonCheck @click="handleAnswerCheck"/>
    </div>
  </n-card>
</template>

<script>
import ButtonAnswer from "@/components/ButtonAnswer.vue";
import ButtonCheck from "@/components/ButtonCheck.vue";
import { ref } from "vue";

export default {
  components: {
    ButtonAnswer,
    ButtonCheck,
  },

  data(){
    return{
      correctAnswer: false,
      wrongAnswer: false,
    }
  },

  methods:{
    handleWrongAnswer() {
      this.wrongAnswer = !this.wrongAnswer;
    },

    handleCorrectAnswer() {
      this.correctAnswer = !this.correctAnswer;
    },

    handleAnswerCheck() {
      var flag = 1;
      // console.log(this.checkAnswers);
      if(this.checkAnswers.value != 0){
        console.log(this.checkAnswers);
        for( const value in this.checkAnswers.value){
          
          if(this.checkAnswers.value[value].isCorrect === false){
            // console.log(this.checkAnswers.value[value].isCorrect);
            this.handleWrongAnswer();
            flag = 0;
            break;
          }
        }

        if(flag === 1){
          this.handleCorrectAnswer();
        }
        
      }else{
        this.handleWrongAnswer();
      }
    }
  },

  setup() {

    const checkAnswers = {value:0};

    const answers = ref([
      { id: 1, text: "Final call" },
      { id: 2, text: "Cancelled" },
      { id: 3, text: "Boarding" },
      { id: 4, text: "Departed" },
      { id: 5, text: "Gate change" },
      { id: 6, text: "Delayed" },
    ]);

    const questions = ref([
      { id: 1, text: "1. The plane isn't here now.", answer: "Departed"},
      { id: 2, text: "2. The plane is late.", answer: "Delayed"},
      { id: 3, text: "3. The plane is not going to leave.", answer: "Cancelled" },
      { id: 4, text: "4. You can get on the plane now.", answer: "Boarding" },
      { id: 5, text: "5. The plane is leaving very soon.", answer: "Final call" },
      { id: 6, text: "6. You need to go to a different place to get on the plane.", answer: "Gate change" },
    ]);
    
    const selectedAnswers = ref({});
    const isDragOver = ref({});

    const dragStart = (answerText) => {
      event.dataTransfer.setData("text/plain", answerText);
    };

    const dragOver = (questionId) => {
      isDragOver.value = { ...isDragOver.value, [questionId]: true };
    };

    const dragLeave = (questionId) => {
      isDragOver.value = { ...isDragOver.value, [questionId]: false };
    };

    const drop = (questionId) => {

        const answerText = event.dataTransfer.getData("text/plain");

        // Update checkAnswers with the question ID and dropped answer
        checkAnswers.value = {
          ...checkAnswers.value,
          [questionId]: {
            answer: answerText,
            isCorrect: answerText === questions.value.find(q => q.id === questionId)?.answer
          },
        };

        // Update selectedAnswers and isDragOver as before
        selectedAnswers.value = { ...selectedAnswers.value, [questionId]: answerText };
        isDragOver.value = { ...isDragOver.value, [questionId]: false };
        console.log(checkAnswers);

    };

    return {
      answers,
      questions,
      selectedAnswers,
      isDragOver,
      dragStart,
      dragOver,
      dragLeave,
      drop,
      checkAnswers,
    };
  },
};
</script>

<style scoped>
.n-card {
    max-width: 50%;
    border-radius: 1.25rem;
    box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
  }
  
.draggable {
  cursor: move;
  display: inline-block;
  margin: 5px;
}

.droppable {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
  display: inline-block;
}

.drag-over {
  border: 2px dashed #3F66DA; /* Change this to the color you want */
}

.dropped-answer {
  color: #3F66DA; /* Change this to the color you want */
}

.bold-answer {
  font-weight: bold;
}

.center-item {
  text-align: center;
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
