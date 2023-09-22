import React, { useContext } from "react";
import { LanguageContext } from "../context/Context";
import { AuthContext } from "../Authentication/Provider/AuthProvider";
import useUsers from "../hooks/useUsers";

const NavBar = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { user, logOut } = useContext(AuthContext);
  const [userInfo] = useUsers();

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const textContent = {
    en: {
      selectLanguage: "Select Your language:",
    },
    bn: {
      selectLanguage: "আপনার ভাষা নির্বাচন করুন:",
    },
    hi: {
      selectLanguage: "अपनी भाषा का चयन करें:",
    },
  };

  return (
    <div className="mx-auto flex justify-center items-center">
      <div className="container mx-auto py-2 lg:py-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        <h2 className=" font-primary lg:ms-12 mb-4 lg:mb-0 text-3xl bg-clip-text text-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-red-600">
          𝓥𝓸𝓬𝓪𝓫𝓜𝓪𝓼𝓽𝓮𝓻
        </h2>
        {user && (
          <h1>
            𝓦𝓮𝓵𝓬𝓸𝓶𝓮
            <span className="font-bold"> "{user && userInfo[0]?.name}"</span>
          </h1>
        )}
        <div className="lg:flex items-center lg:space-x-4 justify-center">
          <p className="lg:text-1xl max-w-xs">
            {textContent[language].selectLanguage}
          </p>

          <select
            className="select lg:w-1/8 w-[57%] max-w-xs lg:text-1xl m-2 lg:m-0 lg:ml-2 ml-[40px] bg-white text-gray-400"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="bn">বাংলা</option>
            <option value="hi">Hindi</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
