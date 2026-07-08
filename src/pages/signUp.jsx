import React, { useState } from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignUp from "../components/Fragments/FormSignUp";
import { registerService } from "../services/authService";
import AppSnackbar from "../components/Elements/AppSnackbar";

function SignUp() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleRegister = async (name, email, password) => {
    try {
      const data = await registerService(name, email, password);
      console.log("Registrasi berhasil:", data);
      setSnackbar({
        open: true,
        message: data.msg || "Register berhasil",
        severity: "success",
      });
    } catch (error) {
      console.error(error.msg || error);
      setSnackbar({
        open: true,
        message: error.msg || "Registrasi gagal",
        severity: "error",
      });
    }
  };

  return (
    <AuthLayout>
      <FormSignUp onSubmit={handleRegister} />

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </AuthLayout>
  );
}

export default SignUp;