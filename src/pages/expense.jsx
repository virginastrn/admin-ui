import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardExpensesComparison from "../components/Fragments/CardExpensesComparison";
import { expenseService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";

function ExpensePage() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { logout } = useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

 const fetchExpenses = async () => {
  try {
    setLoading(true);

    const data = await expenseService();

    console.log("DATA DARI API:", data);
    alert(JSON.stringify(data));

    setExpenses(data || []);
  } catch (err) {
    setSnackbar({
      open: true,
      message: "Gagal mengambil data expenses",
      severity: "error",
    });

    if (err.status === 401) {
      logout();
    }
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <MainLayout>
      <CardExpensesComparison
        data={expenses}
        loading={loading}
      />

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </MainLayout>
  );
}

export default ExpensePage;