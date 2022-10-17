import React from "react";
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

const PerformanceChart = () => {
  const { themeColor } = useAuth();

  return (
    <div className="my-10 lg:my-16  border-[0.5px] w-full border-gray-300 dark:border-gray-600 py-4 px-4 rounded-lg box-border shadow-lg dark:bg-slate-800">
      <h1
        className="text-lg lg:text-2xl font-medium text-center"
        style={{ color: themeColor }}
      >
        Batsyayan Monthly Performance
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
              dataKey="exp"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />

            <Line type="monotone" dataKey="inc" stroke="#22c55e" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;

const data = [
  {
    name: "Jan",
    inc: 2400,
    exp: 1000,
  },
  {
    name: "Feb",
    inc: 3500,
    exp: 5000,
  },
  {
    name: "Mar",
    inc: 3500,
    exp: 1500,
  },
  {
    name: "Apr",
    inc: 2500,
    exp: 3500,
  },
  {
    name: "May",
    inc: 15000,
    exp: 7000,
  },
  {
    name: "Jun",
    inc: 8000,
    exp: 3000,
  },
  {
    name: "Jul",
    inc: 5000,
    exp: 7000,
  },
  {
    name: "Aug",
    inc: 10000,
    exp: 2000,
  },
  {
    name: "Sep",
    inc: 7000,
    exp: 5000,
  },
  {
    name: "Oct",
    inc: 5000,
    exp: 1500,
  },
  {
    name: "Nov",
    inc: 9000,
    exp: 3300,
  },
  {
    name: "Dec",
    inc: 3500,
    exp: 4300,
  },
];
