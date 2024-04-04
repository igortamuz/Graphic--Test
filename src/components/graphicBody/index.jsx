import styled from "styled-components";
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function GraphicBody({ selectedProductSales }) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const targetMonths = ["Jan", "Mar", "May", "Jul", "Sep", "Nov"];

  const [chartWidth, setChartWidth] = useState(window.innerWidth);
  const chartHeight = 600;

  useEffect(() => {
    const handleResize = () => {
      setChartWidth(
        window.innerWidth < 768 ? window.innerWidth : window.innerWidth
      );
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredMonths = chartWidth < 768 ? targetMonths : months;

  const data = filteredMonths.map((month, index) => ({
    month,
    sales: selectedProductSales[index],
  }));

  return (
    <GraphicContainer>
      <LineChart
        width={chartWidth}
        height={chartHeight}
        data={data}
        margin={{ top: 15, right: 20, left: -20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="rgba(75,192,192,1)"
          fill="rgba(75,192,192,0.2)"
          label={{
            position: "top",
            fill: "rgba(75,192,192,1)",
            fontSize: 12,
          }}
        />
      </LineChart>
    </GraphicContainer>
  );
}

const GraphicContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  overflow-x: hidden;

  @media (max-width: 768px) {
    max-width: 1024px;
    margin: 20px auto;
  }
`;