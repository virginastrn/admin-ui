import { BarChart } from '@mui/x-charts/BarChart';
import * as React from "react";
import { ThemeContext } from "../../context/ThemeContext";

const chartSetting = {
  height: 300,
};

export default function BarsDataset(props) {
  const { data } = props;
  const { theme } = React.useContext(ThemeContext);

  console.log("BarsDataset data:", data); // tambah ini

  const chartData = Array.isArray(data) ? data : data?.data;

  if (!chartData || !Array.isArray(chartData)) return <div>Loading...</div>;

  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: chartData.map(d => d.date) }]}
      series={[
        { data: chartData.map(d => d.amountThisWeek), label: 'This Week', color: theme.color },
        { data: chartData.map(d => d.amountLastWeek), label: 'Last Week' },
      ]}
      {...chartSetting}
    />
  );
}