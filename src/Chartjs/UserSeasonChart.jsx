// import "./styles.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];

export default function UseSeasonChart() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://vocab-master-server-new.vercel.app/users")
      .then((data) => {
        // console.log(data.data);
        setUsers(data.data);
      });
  }, [users]);
  return (
    <PieChart width={1000} height={400}>
      <Pie
        dataKey="season"
        isAnimationActive={false}
        data={users}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />

      <Pie
        dataKey="diamond"
        data={users}
        cx={500}
        cy={200}
        innerRadius={40}
        outerRadius={80}
        fill="#82ca9d"
      />

      <Tooltip />
    </PieChart>
  );
}
