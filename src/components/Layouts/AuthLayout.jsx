import React, { useContext } from 'react';
import Logo from "../Elements/Logo";
import { ThemeContext } from "../../context/ThemeContext";
import { DarkModeContext } from "../../context/DarkModeContext";

function AuthLayout(props) {
  const { children } = props;
  const { theme } = useContext(ThemeContext);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <main className={`min-h-screen bg-special-mainBg ${theme.name} ${darkMode ? "dark" : ""} flex justify-center items-center`}>
        <div className="w-full max-w-sm">
          <Logo />
          {children}

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={toggleDarkMode}
              className="flex items-center gap-2 text-sm text-gray-03 hover:text-primary"
            >
              {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default AuthLayout;