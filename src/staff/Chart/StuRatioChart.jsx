import React from "react";
import { useAuth } from "../../contexts/GlobalProvider";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const StuRatioChart = ({ title }) => {
  const { themeColor } = useAuth();

  return (
    <div className="my-10 lg:my-16  border-[0.5px] w-full border-gray-300 dark:border-gray-600 py-4 px-4 rounded-lg box-border shadow-lg dark:bg-slate-800">
      <h1
        className="text-lg lg:text-2xl font-medium text-center"
        style={{ color: themeColor }}
      >
        Batsyayan {title ? title : "Students"} Ratio
      </h1>
      <div className="w-full h-96 ">
        <ResponsiveContainer width="100%" height="80%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="text-center flex justify-center gap-6 md:gap-10">
          <p className="flex items-center">
            <button className="bg-[#0088FE] w-2 h-2 md:w-5 md:h-5 mr-1"></button>
            <span className="md:text-lg dark:text-slate-200">Male</span>
          </p>
          <p className="flex items-center">
            <button className="bg-[#00C49F] w-2 h-2 md:w-5 md:h-5 mr-1"></button>
            <span className="md:text-lg dark:text-slate-200">Female</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StuRatioChart;

const data = [
  { name: "Group A", value: 500 },
  { name: "Group B", value: 400 },
];
const COLORS = ["#0088FE", "#00C49F"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
