import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ data }) => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Simple Stats Of Each Topic Total</h1>
      <LineChart className="mx-auto mt-28" width={400} height={400} data={data}>
        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default Chart;
