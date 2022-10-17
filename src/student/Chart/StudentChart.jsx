import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useAuth } from "../../contexts/GlobalProvider";

const data = [
  {
    name: "2018",
    stu: 590,
  },
  {
    name: "2019",
    stu: 700,
  },
  {
    name: "2020",
    stu: 650,
  },
  {
    name: "2021",
    stu: 800,
  },
  {
    name: "2022",
    stu: 750,
  },
];
const StudentChart = ({ title }) => {
  const { themeColor, screenSize } = useAuth();
  return (
    <div className="my-10 lg:my-16 border-[0.5px] w-full border-gray-300 dark:border-gray-600 py-4 px-4 rounded-lg box-border shadow-lg dark:bg-slate-800">
      <h1
        className="text-lg lg:text-2xl font-medium text-center"
        style={{ color: themeColor }}
      >
        Batsyayan {title ? title : "Student"} Population
      </h1>
      <div className="w-full h-80 md:h-96 ">
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={300}
            data={data}
            className="my-20 mx-0 md:mx-5 "
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar
              dataKey="stu"
              barSize={screenSize < 700 ? 30 : screenSize < 1024 ? 40 : 50}
              fill="#413ea0"
            />
            <Line type="monotone" dataKey="stu" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StudentChart;
