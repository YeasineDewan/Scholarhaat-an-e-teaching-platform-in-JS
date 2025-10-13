import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const RevenueChart: React.FC = () => {
  // Sample data for the chart
  const data = [
    { month: 'Jan', revenue: 65000, expenses: 45000, profit: 20000 },
    { month: 'Feb', revenue: 72000, expenses: 48000, profit: 24000 },
    { month: 'Mar', revenue: 85000, expenses: 52000, profit: 33000 },
    { month: 'Apr', revenue: 78000, expenses: 49000, profit: 29000 },
    { month: 'May', revenue: 92000, expenses: 55000, profit: 37000 },
    { month: 'Jun', revenue: 105000, expenses: 58000, profit: 47000 },
    { month: 'Jul', revenue: 120000, expenses: 62000, profit: 58000 },
    { month: 'Aug', revenue: 132000, expenses: 65000, profit: 67000 },
    { month: 'Sep', revenue: 125000, expenses: 63000, profit: 62000 },
    { month: 'Oct', revenue: 140000, expenses: 68000, profit: 72000 },
    { month: 'Nov', revenue: 155000, expenses: 72000, profit: 83000 },
    { month: 'Dec', revenue: 170000, expenses: 75000, profit: 95000 },
  ];

  // Format currency
  const formatCurrency = (value: number) => {
    return `৳ ${value.toLocaleString()}`;
  };

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `৳${value/1000}k`} />
          <Tooltip formatter={(value) => formatCurrency(Number(value))} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#39A7FF" 
            strokeWidth={2} 
            activeDot={{ r: 8 }} 
            name="Revenue"
          />
          <Line 
            type="monotone" 
            dataKey="expenses" 
            stroke="#FF6B6B" 
            strokeWidth={2} 
            name="Expenses"
          />
          <Line 
            type="monotone" 
            dataKey="profit" 
            stroke="#4CAF50" 
            strokeWidth={2} 
            name="Profit"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;