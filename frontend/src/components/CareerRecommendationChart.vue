<template>
  <div class="w-full h-64">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Chart } from "chart.js";

// Static data and options
const chartData = {
  labels: ["Career 1", "Career 2", "Career 3"], // Example static labels
  datasets: [
    {
      label: "Recommendation Score",
      data: [75, 85, 95], // Example static data
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
    },
  },
};

const chartRef = ref(null);
let chartInstance = null;

const createChart = () => {
  const ctx = chartRef.value?.getContext("2d");

  if (ctx) {
    chartInstance = new Chart(ctx, {
      type: "bar", // Bar chart type
      data: chartData, // Static chart data
      options: chartOptions, // Static chart options
    });
  } else {
    console.error("Canvas context is not available.");
  }
};

onMounted(() => {
  createChart();
});
</script>
