<!-- has a drag and drop functionality -->
<template>
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
      <ButtonCheck @click="checkAnswers" />
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
  setup() {
    const answers = ref([
      { id: 1, text: "Final call" },
      { id: 2, text: "Cancelled" },
      { id: 3, text: "Boarding" },
      { id: 4, text: "Departed" },
      { id: 5, text: "Gate change" },
      { id: 6, text: "Delayed" },
    ]);

    const questions = ref([
      { id: 1, text: "The plane isn't here now." },
      { id: 2, text: "The plane is late." },
      { id: 3, text: "The plane is not going to leave." },
      { id: 4, text: "You can get on the plane now." },
      { id: 5, text: "The plane is leaving very soon." },
      { id: 6, text: "You need to go to a different place to get on the plane." },
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
      selectedAnswers.value = { ...selectedAnswers.value, [questionId]: answerText };
      isDragOver.value = { ...isDragOver.value, [questionId]: false };
    };

    const checkAnswers = () => {
      // Implement your logic to check the correctness of answers
      console.log(selectedAnswers.value);
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
</style>
