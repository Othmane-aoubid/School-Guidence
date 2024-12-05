<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Recommended Courses
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        Courses tailored to your interests and career goals.
      </p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
      <CourseRecommendations :courses="recommendedCourses" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getRecommendedCourses } from "../services/api";
import CourseRecommendations from "../components/CourseRecommendations.vue";

const recommendedCourses = ref([]);

onMounted(async () => {
  recommendedCourses.value = await getRecommendedCourses();
});
</script>
