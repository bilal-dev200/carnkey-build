"use client";
import Image from "next/image";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler
);

const chartData = {
  labels: ["", "", "", "", ""],
  datasets: [
    {
      label: "Car Value",
      data: [200000, 320000, 390000, 310000, 280000],
      borderColor: "#5B2BEC", // Line color
      backgroundColor: "rgba(91, 43, 236, 0.2)", // Fill color
      tension: 0.4, // Smooth curve
      fill: true,
      pointRadius: 0,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

export default function SellingYourCars() {
  return (
    <section className="bg-white py-16 flex flex-col lg:flex-row items-center justify-between relative  overflow-hidden">
      {/* Left Text Section */}
      <div className="max-w-lg px-10 mb-10 lg:mb-0 z-10">
        <h2 className="text-4xl md:text-4xl font-bold font-hanken text-gray-900 leading-snug">
          <span className="text-[#39348F]">Selling Your Car?</span> Let’s Make
          It Quick & Easy
        </h2>
        <p className="text-gray-500 mt-4 text-sm md:text-base font-hanken">
          Your car, your price—sell on your terms and get the best deal
          effortlessly.
        </p>
        <button className="mt-6 bg-[#39348F] text-white px-6 py-3 font-hanken rounded-full text-sm md:text-base font-semibold shadow-md hover:bg-purple-900 transition">
          List Your Car Now
        </button>
      </div>

      {/* Right Chart + Car Image Section */}
      {/* Right Chart + Car Image Section */}
      <div className="relative w-full lg:w-[640px] bg-transparent flex justify-center items-end mt-10 lg:mt-0">
        {/* Graph on Bonnet */}
        {/* <div className="absolute left-[23%] bottom-[72%] z-20 translate-y-[-70%] translate-x-[-50%] bg-transparent px-4 py-2 rounded-lg rotate-[-6]">
          <p className="text-sm font-semibold text-black mb-2">$ 390,000</p>
          <div className="w-40 h-20 relative">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div> */}

        {/* Car Image */}
        <Image
          src="/Images/homeTrend.png"
          alt="Luxury Car"
          width={650}
          height={350}
          className="drop-shadow-xl"
        />
      </div>
    </section>
  );
}
