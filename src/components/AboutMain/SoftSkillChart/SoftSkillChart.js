import { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";

function SoftSkillChart() {
  const chartRef = useRef();

  Chart.register(...registerables);
  const labels = ["Teamwork", "Leadership", "Work Ethic", "Adaptability"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Mastery %",
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(25, 67, 207)",
        ],
        borderColor: "rgb(25, 67, 207)",
        data: [30, 25, 20, 25],
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
    options: {
      indexAxis: "y",
      animation: {
        x: {
          duration: 4000,

          from: 250,
        },
        y: {
          duration: 3000,
          from: 500,
        },
      },
    },
  };

  useEffect(() => {
    const myChart = new Chart(chartRef.current, config);
  }, []);

  return <canvas ref={chartRef}></canvas>;
}

export default SoftSkillChart;
