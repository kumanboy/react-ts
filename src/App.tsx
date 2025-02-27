import React from "react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";

// Dictionary for translations
const translations = {
    en: {
        greeting: "Welcome to our website!",
        description: "This is a simple language switcher example using useContext.",
    },
    uz: {
        greeting: "Veb-saytimizga xush kelibsiz!",
        description: "Bu useContext yordamida yaratilgan oddiy til almashtirgich.",
    },
};

const Content = () => {
    const { language } = useLanguage();

    return (
        <div className="container">
            <h1>{translations[language].greeting}</h1>
            <p>{translations[language].description}</p>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <LanguageProvider>
            <div className="app">
                <LanguageSwitcher />
                <Content />
            </div>
        </LanguageProvider>
    );
};

export default App;
