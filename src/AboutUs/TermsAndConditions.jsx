import React from "react";

const TermsAndConditions = () => {
  return (
    <div
      style={{
        backgroundColor: "#4158D0",
        backgroundImage:
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      }}
      className="text-white py-8"
    >
      <h5 className="font-bold text-5xl text-center">TERMS AND CONDITIONS</h5>
      <section className="flex items-center xl:h-screen font-poppins">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="lg:max-w-md">
                <span className="text-xl font-semibold text-blue-600 uppercase">
                  Introduction
                </span>
                <h2 className="mt-4 mb-6 text-2xl font-bold">
                  Welcome to VocabMuster's Terms and Conditions
                </h2>
                <p className="mb-10">
                  Please read these terms and conditions carefully before using
                  our website. By accessing or using the site, you agree to
                  comply with and be bound by these terms.
                </p>
              </div>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="flex mb-4">
                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-6 h-6 bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.293 3.293a1 1 0 0 1 1.414 0l.001.001L15.708 4.7a1 1 0 0 1-1.414 1.414l-.001-.001-1.001-1a1 1 0 0 1 0-1.414l.001-.001a1 1 0 0 1 1.415 0l1.001 1zM8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm.293 11.293a.997.997 0 0 1-1.414 0L5 9.414l-.793.793a.999.999 0 1 1-1.414-1.414L5.586 8 4.793 7.207a.999.999 0 0 1 1.414-1.414L8 6.586l.793-.793a.999.999 0 1 1 1.414 1.414L10.414 8l.793.793a.999.999 0 0 1 0 1.414z"></path>
                  </svg>
                </span>
                <div>
                  <h2 className="mb-4 text-xl font-bold leading-tight">
                    Acceptance of Terms
                  </h2>
                  <p className="text-base leading-loose">
                    By using this website, you accept and agree to be bound by
                    these Terms and Conditions.
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-6 h-6 bi bi-shield"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.293 3.293a1 1 0 0 0 1.414 0L8 1.414l2.293 2.293a1 1 0 1 0 1.414-1.414L9.414 0 4.293 5.121a1 1 0 0 0 0 1.414z"></path>
                    <path d="M7.5 8.5a.5.5 0 0 1 .5.5V13a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V9a.5.5 0 0 1 .5-.5z"></path>
                  </svg>
                </span>
                <div>
                  <h2 className="mb-4 text-xl font-bold leading-tight">
                    Security
                  </h2>
                  <p className="text-base leading-loose">
                    We take security seriously. Your data is protected through
                    industry-standard security practices.
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-6 h-6 bi bi-lock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.5 1a3.5 3.5 0 0 1 3.495 3.995L11 5v4a3 3 0 0 1-5.83.951L4 9V5a3.5 3.5 0 0 1 3.5-3zM7 11a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1z"></path>
                  </svg>
                </span>
                <div>
                  <h2 className="mb-4 text-xl font-bold leading-tight">
                    Privacy
                  </h2>
                  <p className="text-base leading-loose">
                    Your privacy is important to us. We handle your data
                    responsibly and in accordance with our Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
