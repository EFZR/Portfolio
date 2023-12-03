import { useEffect } from "react";

function useDarkMode(darkMode) {
  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode) {
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
    }
  }, [darkMode]);
}

export default useDarkMode;
