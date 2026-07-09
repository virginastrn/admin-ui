import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Tambahkan import ini di atas
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";
import { loginService } from "../services/authService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";

function SignIn() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate(); // 2. Inisialisasi navigate di sini

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  }); 
  
  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleLogin = async (email, password) => {
    try {
      const { refreshToken } = await loginService(email, password);

      login(refreshToken);
      
      // 3. TAMBAHKAN KODE INI UNTUK PINDAH HALAMAN SETELAH LOGIN SUKSES
      navigate('/overview'); 

    } catch (err) {
      setSnackbar({ open: true, message: err.msg, severity: "error" });
      console.error(err.msg);
    }
  };

  return (
    <AuthLayout>
      <FormSignIn onSubmit={handleLogin} />

        <AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
    </AuthLayout>
  );
}

export default SignIn;