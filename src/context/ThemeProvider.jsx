import {createContext, useContext} from "react";

const ThemeContext = createContext()

function ThemeProvider({ children }) {
  return (
    <div className="bg-[#0f172a]  text-white">
      <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>
    </div>
  );
}

export default ThemeProvider;