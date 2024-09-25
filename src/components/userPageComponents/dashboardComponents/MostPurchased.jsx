import { FaArrowDown } from "react-icons/fa";

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

// Register components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function MostPurchased() {
  const data = {
    labels: [
      "Masuda’s Vineyard Carneros",
      "Masuda’s Vineyard Carneros",
      "Masuda’s Vineyard Carneros",
    ],
    datasets: [
      {
        label: "Sales",
        data: [200, 150, 100],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Sales Data",
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="mt-[24px] bg-[#fff] px-[16px] py-[32px]">
      <div className="flex justify-between items-center">
        <p className="text-[20px] font-medium">Most purchased products</p>
        <div className="flex items-center gap-[8px] w-[119px] h-[40px] border border-[#E2E5E8] rounded-[8px] pl-[16px]">
          <p>Weekly</p>
          <FaArrowDown size={14} />
        </div>
      </div>
      <div className="mt-[32px] md:w-[300px] lg:w-full">
        <Bar data={data} options={options} />;
      </div>
    </div>
  );
}

export default MostPurchased;
