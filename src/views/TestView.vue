<!-- this is a test page used to test some codes -->

<template>
  <n-card>
    <h3>Match the phrases with the sentences. Drag the correct answer and drop it near the question.</h3>

    <!-- Answers -->
    <div v-for="answer in answers" :key="answer.id" class="draggable" @dragstart="dragStart(answer.id)">
      <ButtonAnswer :answer="answer.text" />
    </div>

    <br><br>

    <!-- Questions -->
    <div v-for="question in questions" :key="question.id" class="droppable" @dragover.prevent="dragOver" @drop="drop(question.id)">
      <p>{{ question.text }}</p>
      <InputAnswer :value="selectedAnswers[question.id]" />
    </div>

    <br>

    <div class="center-item">
      <ButtonCheck @click="checkAnswers" />
    </div>
  </n-card>
</template>

<script>
import ButtonAnswer from "@/components/ButtonAnswer.vue";
import InputAnswer from "@/components/InputAnswer.vue";
import ButtonCheck from "@/components/ButtonCheck.vue";

export default {
  components: {
    ButtonAnswer,
    InputAnswer,
    ButtonCheck,
  },
  data() {
    return {
      answers: [
        { id: 1, text: "Final call" },
        { id: 2, text: "Cancelled" },
        { id: 3, text: "Boarding" },
        { id: 4, text: "Departed" },
        { id: 5, text: "Gate change" },
        { id: 6, text: "Delayed" },
      ],
      questions: [
        { id: 1, text: "The plane isn't here now." },
        { id: 2, text: "The plane is late." },
        { id: 3, text: "The plane is not going to leave." },
        { id: 4, text: "You can get on the plane now." },
        { id: 5, text: "The plane is leaving very soon." },
        { id: 6, text: "You need to go to a different place to get on the plane." },
      ],
      selectedAnswers: {},
    };
  },
  methods: {
    dragStart(answerId) {
      event.dataTransfer.setData("text/plain", answerId);
    },
    dragOver(event) {
      event.preventDefault();
    },
    drop(questionId) {
      const answerId = event.dataTransfer.getData("text/plain");
      this.$set(this.selectedAnswers, questionId, answerId);
    },
    checkAnswers() {
      // Implement your logic to check the correctness of answers
      console.log(this.selectedAnswers);
    },
  },
};
</script>

<style scoped>
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

.center-item {
  text-align: center;
}
</style>
