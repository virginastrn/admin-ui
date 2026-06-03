import React from "react";
import Card from "../Elements/Card";
import BarsDataset from "../Elements/BarsDataset";

function CardStatistics(props) {
  const { data } = props;
  console.log("CardStatistics data:", data);

  return (
    <Card
      title="Statistics"
      desc={
        <>
          <select className="font-bold text-2xl">
            <option>Weekly Comparison</option>
          </select>
          <BarsDataset data={data} />
        </>
      }
    />
  );
}

export default CardStatistics;