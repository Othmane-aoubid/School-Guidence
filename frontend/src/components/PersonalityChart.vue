<template>
  <div class="w-full h-64">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from "vue";
import { Chart } from "chart.js";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const chartRef = ref(null);
let chartInstance = null;

// Watch for changes in props.data to update the chart dynamically
watch(
  () => props.data,
  (newData) => {
    if (chartInstance) {
      updateChart(newData);
    }
  },
  { immediate: true }
);

const createChart = () => {
  const ctx = chartRef.value?.getContext("2d");

  if (ctx) {
    chartInstance = new Chart(ctx, {
      type: "radar",
      data: {
        labels: props.data.map((item) => item.trait),
        datasets: [
          {
            label: "Personality Traits",
            data: props.data.map((item) => item.score),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            pointBackgroundColor: "rgba(75, 192, 192, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(75, 192, 192, 1)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: {
              display: false,
            },
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      },
    });
  } else {
    console.error("Canvas context is not available.");
  }
};

const updateChart = (newData) => {
  if (!chartInstance) return;

  // Update chart data
  chartInstance.data.labels = newData.map((item) => item.trait);
  chartInstance.data.datasets[0].data = newData.map((item) => item.score);

  // Refresh the chart
  chartInstance.update();
};

// Use nextTick to ensure the DOM is fully updated before creating the chart
onMounted(() => {
  nextTick(() => {
    createChart();
  });
});
</script>
