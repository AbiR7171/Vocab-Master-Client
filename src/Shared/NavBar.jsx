import React, { useContext } from "react";
import { LanguageContext } from "../context/Context";

const NavBar = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  console.log(language);
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="container mx-auto lg:px-16 flex items-center justify-between lg:gap-96 sticky top-0">
      <h2 className="lg:text-2xl font-primary lg:ms-36">Vocab Master</h2>

      <div className="flex items-center flex-1 font-primary text-gray-500 lg:text-1xl">
        <p>Select Your language:</p>

        <select
          className="select w-1/3 max-w-xs lg:text-1xl"
          value={language} // Set the selected value based on the context
          onChange={handleLanguageChange} // Call the function to update the language
        >
          <option value="en">English</option>
          <option value="bn">বাংলা</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
    </div>
  );
};

export default NavBar;
