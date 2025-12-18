import { createContext, useState } from "react";

export const LaguageContext = createContext();

const translation = {
    uz: {
        aksiya: "Aksiyalar",
        pizza: "Pizzalar",
        sushi: "Sushilar",
        water: "Ichimliklar",
        zakusku: "Gazaklar",
        kombo: "Kombo",
        deserte: "Shirinliklar",
        sous: "Qayla"
    },
    ru: {
        aksia: "Акции",
        pizza: "Пицца",
        sushi: "Суши",
        water: "Вода",
        zakusku: "Закуски",
        kombo: "Комбо",
        deserte: "Десерты",
        sous: "Соусы"
    },
    en: {
        aksia: "Shares",
        pizza: "Pizza",
        sushi: "Sushi",
        water: "Water",
        zakusku: "Appetizers",
        kombo: "Combo",
        deserte: "Desserts",
        sous: "Sauces"
    }
};

const ChangLAnguaje = ({ children }) => {
    const [lang, setLang] = useState("ru"); // default language

    const t = translation[lang] || translation.ru; // fallback to Russian if missing

    return (
        <LaguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LaguageContext.Provider>
    );
}

export default ChangLAnguaje;
