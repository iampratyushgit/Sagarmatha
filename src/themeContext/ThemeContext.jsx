import React, { createContext, useState } from "react";


export const ThemeContext = createContext();
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("Light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "Light" ? "Dark" : "Light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme === "Light" ? "bg-white text-gray-800" : "bg-gray-800 text-white"}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}