import React from "react";
import {
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Line,
} from "recharts";
import { useAuth } from "../../contexts/GlobalProvider";

const YearlyRevenueChart = () => {
  const { themeColor } = useAuth();

  return (
    <div className="my-10 lg:my-16  border-[0.5px] w-full border-gray-300 dark:border-gray-600 py-4 px-4 rounded-lg box-border shadow-lg dark:bg-slate-800">
      <h1
        className="text-lg lg:text-2xl font-medium text-center"
        style={{ color: themeColor }}
      >
        Batsyayan Revenue Report
      </h1>
      <div className="w-full h-96 ">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={300}
            data={data}
            className="my-14 mx-0 md:mr-5"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Area
              type="monotone"
              dataKey="amt"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Line type="monotone" dataKey="amt" stroke="#22c55e" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default YearlyRevenueChart;

const data = [
  {
    name: "2018",
    amt: 100000,
  },
  {
    name: "2019",
    amt: 200000,
  },
  {
    name: "2020",
    amt: 150000,
  },
  {
    name: "2021",
    amt: 500000,
  },
  {
    name: "2022",
    amt: 200000,
  },
];
