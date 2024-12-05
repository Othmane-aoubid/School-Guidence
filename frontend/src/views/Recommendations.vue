<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Career Recommendations
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        Based on your profile and interests.
      </p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
      <CareerRecommendationChart :data="careerRecommendations" />
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
      <h4 class="text-lg leading-6 font-medium text-gray-900 mb-4">
        Recommended Courses
      </h4>
      <CourseRecommendations :courses="recommendedCourses" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  getCareerRecommendations,
  getRecommendedCourses,
} from "../services/api";
import CareerRecommendationChart from "../components/CareerRecommendationChart.vue";
import CourseRecommendations from "../components/CourseRecommendations.vue";

const careerRecommendations = ref([]);
const recommendedCourses = ref([]);

onMounted(async () => {
  careerRecommendations.value = await getCareerRecommendations();
  recommendedCourses.value = await getRecommendedCourses();
});
</script>
