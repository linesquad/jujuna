import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Visitors = () => {
  const data = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Users",
        data: [50, 100, 75, 150],
        backgroundColor: "#5d6fff",
      },
      {
        label: "Revenue",
        data: [75, 150, 200, 250],
        backgroundColor: "#ff9f40",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 10,
          },
          color: "#4B5563",
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 9,
          },
          color: "#4B5563",
        },
      },
      y: {
        ticks: {
          font: {
            size: 9,
          },
          color: "#4B5563",
        },
      },
    },
  };

  return (
    <div className="bg-white border-[3px] border-purple-300 rounded-xl p-4 h-full">
      <h2 className="mb-4">Visitors</h2>
      <div className="w-full h-32">
        <Bar data={data} options={options} />
      </div>
      <p className="text-green-500 text-xs mt-2">+5.5%</p>
    </div>
  );
};

export default Visitors;
