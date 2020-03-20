import React from "react";
import {data} from './data'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";



export default function BarGraph() {
  //   static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 30,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="4 4" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#e95957" />
      <Bar dataKey="uv" fill="#17c7bf" />
    </BarChart>
  );
}
