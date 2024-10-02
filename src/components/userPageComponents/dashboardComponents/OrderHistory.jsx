import { FaArrowDown } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function OrderHistory() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales",
        data: [100, 200, 300, 150, 400, 500, 250],
        fill: true,
        backgroundColor: "rgba(255, 165, 0, 0.3)",
        borderColor: "rgba(255, 165, 0, 1)",
        pointBackgroundColor: "rgba(255, 165, 0, 1)",
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `$${context.raw}`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `$${value}`;
          },
        },
      },
    },
  };
  return (
    <div className="mt-[24px] bg-[#fff] px-[16px] py-[32px]">
      <div className="flex justify-between items-center">
        <p className="text-[20px] font-medium">Order history</p>
        <div className="flex items-center gap-[8px] w-[119px] h-[40px] border border-[#E2E5E8] rounded-[8px] pl-[16px]">
          <p>Weekly</p>
          <FaArrowDown size={14} />
        </div>
      </div>
      <div className="mt-[32px] md:w-[300px] lg:w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default OrderHistory;
