<template>
  <div class="p-6 space-y-6">
    dashboard
    <header class="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Student Dashboard</h1>
        <p class="mt-1 text-sm text-gray-500">Personal details and recommendations</p>
      </div>
      <button class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
        Update Profile
      </button>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white rounded-lg shadow p-6 space-y-4">
        <div class="flex items-center space-x-3">
          <div class="bg-indigo-100 rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 class="text-xl font-semibold text-gray-900">Personal Info</h2>
        </div>
        <div class="space-y-2">
          <p class="text-sm text-gray-500">Full Name</p>
          <p class="text-lg font-medium text-gray-900">{{ studentData.name }}</p>
        </div>
        <div class="space-y-2">
          <p class="text-sm text-gray-500">Academic Level</p>
          <p class="text-lg font-medium text-gray-900">{{ studentData.academicLevel }}</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6 space-y-4">
        <div class="flex items-center space-x-3">
          <div class="bg-green-100 rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 class="text-xl font-semibold text-gray-900">Interests</h2>
        </div>
        <ul class="space-y-2">
          <li v-for="interest in studentData.interests" :key="interest" class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="text-gray-700">{{ interest }}</span>
          </li>
        </ul>
      </div>

      <div class="bg-white rounded-lg shadow p-6 space-y-4">
        <div class="flex items-center space-x-3">
          <div class="bg-yellow-100 rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 class="text-xl font-semibold text-gray-900">Quick Stats</h2>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="text-center">
            <p class="text-2xl font-bold text-indigo-600">85%</p>
            <p class="text-sm text-gray-500">Course Completion</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-bold text-green-600">4.2</p>
            <p class="text-sm text-gray-500">GPA</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow p-6 space-y-4">
      <div class="flex items-center space-x-3">
        <div class="bg-blue-100 rounded-full p-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h2 class="text-xl font-semibold text-gray-900">Career Recommendations</h2>
      </div>
      <CareerRecommendationChart :data="careerRecommendations" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CareerRecommendationChart from "../components/CareerRecommendationChart.vue";

const studentData = ref({
  name: "John Doe",
  academicLevel: "Undergraduate",
  interests: ["Computer Science", "Data Analysis", "Machine Learning", "Web Development"]
});

const careerRecommendations = ref([
  { career: "Software Engineer", score: 85 },
  { career: "Data Scientist", score: 75 },
  { career: "UX Designer", score: 60 },
  { career: "Product Manager", score: 55 },
  { career: "Business Analyst", score: 50 }
]);

// Uncomment these lines when you're ready to use the API
// onMounted(async () => {
//   studentData.value = await getStudentData();
//   careerRecommendations.value = await getCareerRecommendations();
// });
</script>