import { createContext, useState } from "react";

export const LanguageContext = createContext();

const Context = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const authInfo = {
    language,
    setLanguage,
  };
  return (
    <div>
      <LanguageContext.Provider value={authInfo}>
        {children}
      </LanguageContext.Provider>
    </div>
  );
};

export default Context;
