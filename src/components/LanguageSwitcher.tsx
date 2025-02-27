import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher: React.FC = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button onClick={toggleLanguage} className="language-btn">
            {language === "en" ? "Switch to Uzbek" : "Ingliz tiliga o'tish"}
        </button>
    );
};

export default LanguageSwitcher;
