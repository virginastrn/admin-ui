import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignUp from "../components/Fragments/FormSignUp";
import { registerService } from "../services/authService";

function SignUp() {
  const handleRegister = async (name, email, password) => {
    try {
      const data = await registerService(name, email, password);
      console.log("Registrasi berhasil:", data);
    } catch (error) {
      console.error(error.msg || error);
    }
  };

  return (
    <AuthLayout>
      <FormSignUp onSubmit={handleRegister} />
    </AuthLayout>
  );
}

export default SignUp;