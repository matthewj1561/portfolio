import { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";

function SkillChart() {
  const chartRef = useRef();

  Chart.register(...registerables);
  const labels = [
    "Javascript",
    "HTML",
    "CSS",
    "React",
    "C++",
    "Java",
    "MySQL",
    "PHP",
    "Angular",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Mastery %",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(25, 67, 207)",
        data: [75, 60, 55, 65, 45, 30, 35, 30, 25, 100],
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      indexAxis: "y",
      animation: {
        x: {
          duration: 4000,
          from: 0,
          easing: "linear",
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

export default SkillChart;
