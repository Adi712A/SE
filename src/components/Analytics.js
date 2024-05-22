import React, { useState, useEffect } from "react";
import axios from "axios";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as LineTooltip, Legend as LineLegend } from "recharts";
import { BarChart, Bar, XAxis as BarXAxis, YAxis as BarYAxis, CartesianGrid as BarCartesianGrid, Tooltip as BarTooltip, Legend as BarLegend } from "recharts";
import './Analytics.css';

const Analytics = ({ expenses }) => {
  const [expenseData, setExpenseData] = useState([]);
  const [expenseDataLine, setExpenseDataLine] = useState([]);
  const [expenseDataBar, setExpenseDataBar] = useState([]);

  useEffect(() => {
    const expenseCategories = expenses.reduce((acc, cur) => {
      const category = cur.category;
      if (acc[category]) {
        acc[category] += cur.amount;
      } else {
        acc[category] = cur.amount;
      }
      return acc;
    }, {});

    const expenseData = Object.keys(expenseCategories).map((category) => {
      return {
        name: category,
        value: expenseCategories[category],
      };
    });
    setExpenseData(expenseData);

    const expenseDataLine = expenses.map((expense) => {
      return {
        name: expense.date,
        amount: expense.amount,
      };
    });
    setExpenseDataLine(expenseDataLine);

    const expenseDataBar = Object.keys(expenseCategories).map((category) => {
      return {
        name: category,
        amount: expenseCategories[category],
      };
    });
    setExpenseDataBar(expenseDataBar);
  }, [expenses]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF1919', '#BDBDBD'];

  return (
    <div className="sider" >
      <div className="side1">
      <h2>Expense Categories</h2>
      <PieChart width={300} height={300}>
  <Pie data={expenseData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label fill>
    {expenseData.map((entry, index) => (
      <Cell fill={COLORS[index % COLORS.length]} />
    ))}
  </Pie>
  <Legend />
  <Tooltip />
</PieChart>
</div>
<div className="side2">
      <h2>Expense Trend</h2>
      <LineChart width={300} height={300} data={expenseDataLine}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey="amount" stroke="black" />
        <LineTooltip />
        <LineLegend />
      </LineChart>
      </div>
      <div className="side3">
      <h2>Expense by category</h2>
      <BarChart width={300} height={300} data={expenseDataBar}>
        <Bar dataKey="amount" fill="#8884d8" />
        <BarXAxis dataKey="name" />
        <BarYAxis />
        <BarCartesianGrid stroke="#ccc" />
        <BarTooltip />
        <BarLegend />
      </BarChart>
      </div>
    </div>
  );
};

export default Analytics;
