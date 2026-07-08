import React from "react";
import {
  Home,
  Restaurant,
  DirectionsCar,
  Movie,
  ShoppingBag,
  Category,
  ArrowUpward,
  ArrowDownward,
} from "@mui/icons-material";

const icons = {
  Housing: <Home fontSize="small" />,
  Food: <Restaurant fontSize="small" />,
  Transportation: <DirectionsCar fontSize="small" />,
  Entertainment: <Movie fontSize="small" />,
  Shopping: <ShoppingBag fontSize="small" />,
  Others: <Category fontSize="small" />,
};

function CardExpense({
  category,
  amount,
  percentage,
  trend,
  items = [],
}) {
  return (
    <div className="bg-white rounded-xl shadow border">

      {/* Header */}
      <div className="flex justify-between p-4 border-b">

        <div>
          <div className="flex items-center gap-2 text-gray-600">
            {icons[category]}
            <span className="text-sm">{category}</span>
          </div>

          <div className="font-bold text-lg">
            ${amount}
          </div>
        </div>

        <div className="text-right">
          <div
            className={`flex items-center justify-end text-sm ${
              trend === "up"
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {percentage}%

            {trend === "up" ? (
              <ArrowUpward fontSize="inherit" />
            ) : (
              <ArrowDownward fontSize="inherit" />
            )}
          </div>

          <div className="text-xs text-gray-400">
            Compare to the last month
          </div>
        </div>

      </div>

      {/* Detail */}

      {items.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center px-4 py-3 border-b last:border-0"
        >
          <div>
            <div className="text-sm font-medium">
              {item.name}
            </div>

            <div className="text-xs text-gray-400">
              {item.date}
            </div>
          </div>

          <div className="font-semibold">
            ${item.amount}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardExpense;