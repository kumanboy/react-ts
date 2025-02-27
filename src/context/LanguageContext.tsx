import React, {createContext, useState, useContext} from "react";

// Define the type for context
type LanguageContextType = {
    language: "en" | "uz";
    toggleLanguage: () => void;
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: React.ReactNode
}

// Language Provider component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({children}) => {
    const [language, setLanguage] = useState<"en" | "uz">("en");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "uz" : "en"));
    };

    return (
        <LanguageContext.Provider value={{language, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook to use LanguageContext
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
    return context;
};
