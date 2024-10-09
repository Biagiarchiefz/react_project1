import React from "react";
import nightmod from "../../assets/website/nightmod.png";
import lightmod from "../../assets/website/lightmod.png";

const DarkMode = () => {

  // kondisi ternary
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  

  return (
    <div className="relative">
      <img
        src={lightmod}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-[70px] absolute right-0.5 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.2)] transition-all duration-300 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />

      <img
        src={nightmod}
        alt=""
        className="w-[70px] cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.2)] transition-all duration-300"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  );
};

export default DarkMode;
