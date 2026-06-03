export default function BarsDataset(props) {
  const { data } = props;
  console.log("BarsDataset data:", data); // tambah ini

  if (!data || !Array.isArray(data)) {
    return <div>Data tidak valid</div>;
  }

  return (
    <BarChart
      dataset={data}
      xAxis={[{ dataKey: 'date', scaleType: 'band', categoryGapratio: 0.5 }]}
      series={[
        { dataKey: 'amountThisWeek', label: 'This Week' },
        { dataKey: 'amountLastWeek', label: 'Last Week' },
      ]}
      {...chartSetting}
    />
  );
}