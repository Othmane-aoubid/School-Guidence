<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Interest Survey
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        Help us understand your interests better.
      </p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
      <InterestSurvey @submit="submitSurvey" />
    </div>
  </div>
</template>

<script setup>
import { submitInterestSurvey } from "../services/api";
import InterestSurvey from "../components/InterestSurvey.vue";

const submitSurvey = async (surveyData) => {
  try {
    await submitInterestSurvey(surveyData);
    // Handle successful submission (e.g., show a success message, redirect to dashboard)
  } catch (error) {
    // Handle error (e.g., show an error message)
  }
};
</script>
