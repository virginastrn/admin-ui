import React from "react";
import CardExpense from "../Elements/CardExpense";
import CircularProgress from "@mui/material/CircularProgress";

function CardExpensesComparison({ data = [], loading = false }) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center text-gray-02 mb-4">
        <div className="text-2xl">Expenses Comparison</div>
      </div>

      {loading ? (
        <div className="flex flex-col justify-center items-center h-96 text-primary">
          <CircularProgress color="inherit" size={50} enableTrackSlot />
          <div className="mt-3">Loading Data</div>
        </div>
      ) : data.length === 0 ? (
        <div className="text-gray-03">Belum ada data expenses.</div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-5">
        {data.map((expense) => (
    <CardExpense
      key={expense.id}
      category={expense.category}
      amount={expense.amount}
      percentage={expense.percentage}
      trend={expense.trend}
      items={expense.items}
    />
  ))}
</div>
      )}
    </div>
  );
}

export default CardExpensesComparison;