<template>
  <form @submit.prevent="submitSurvey" class="space-y-6">
    <div v-for="(question, index) in questions" :key="index" class="space-y-2">
      <label
        :for="`question-${index}`"
        class="block text-sm font-medium text-gray-700"
      >
        {{ question.text }}
      </label>
      <div class="flex items-center space-x-4">
        <template v-for="option in 5" :key="option">
          <input
            :id="`question-${index}-option-${option}`"
            v-model="answers[index]"
            :value="option"
            name="`question-${index}`"
            type="radio"
            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          />
          <label
            :for="`question-${index}-option-${option}`"
            class="text-sm text-gray-600"
          >
            {{ option }}
          </label>
        </template>
      </div>
    </div>
    <div>
      <button
        type="submit"
        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit Survey
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";

const questions = [
  { text: "I enjoy solving complex problems." },
  { text: "I like working with people." },
  { text: "I'm interested in how things work." },
  { text: "I enjoy creative activities." },
  { text: "I like organizing and planning." },
];

const answers = ref(new Array(questions.length).fill(null));

const emit = defineEmits(["submit"]);

const submitSurvey = () => {
  emit("submit", answers.value);
};
</script>
