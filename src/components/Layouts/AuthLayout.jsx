import React, { useContext } from 'react';
import Logo from "../Elements/Logo";
import { ThemeContext } from "../../context/ThemeContext";

function AuthLayout(props) {
  const { children } = props;
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <main className={`min-h-screen ${theme.name} flex justify-center items-center`}>
      {/* container start */}
      <div className="w-full max-w-sm">
        <Logo />
        {children}
      </div>
      {/* container end */}
    </main>
    </>
  );
}

export default AuthLayout
