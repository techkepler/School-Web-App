import React from "react";
// import {
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

import {
  LineChart,
  Line,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useAuth } from "../../contexts/GlobalProvider";

const FeeCollectionChart = ({ title }) => {
  const { themeColor } = useAuth();

  return (
    <div className="my-10 lg:my-16  border-[0.5px] w-full border-gray-300 dark:border-gray-600 py-4 px-4 rounded-lg box-border shadow-lg dark:bg-slate-800">
      <h1
        className="text-lg lg:text-2xl font-medium text-center"
        style={{ color: themeColor }}
      >
        Batsyayan {title ? title : "Student Fee Collection"}
      </h1>
      <div className="w-full h-96 ">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
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

            <Line
              type="monotone"
              dataKey="amt"
              stroke="#22c55e"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FeeCollectionChart;

const data = [
  {
    name: "Jan",
    amt: 2400,
  },
  {
    name: "Feb",
    amt: 3500,
  },
  {
    name: "Mar",
    amt: 5000,
  },
  {
    name: "Apr",
    amt: 8000,
  },
  {
    name: "May",
    amt: 10000,
  },
  {
    name: "Jun",
    amt: 5000,
  },
  {
    name: "Jul",
    amt: 2400,
  },
  {
    name: "Aug",
    amt: 1500,
  },
  {
    name: "Sep",
    amt: 3000,
  },
  {
    name: "Oct",
    amt: 5000,
  },
  {
    name: "Nov",
    amt: 3000,
  },
  {
    name: "Dec",
    amt: 3500,
  },
];
