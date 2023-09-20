import React from "react";

const CookiesPolicy = () => {
  return (
    <div
      style={{
        backgroundColor: "#4158D0",
        backgroundImage:
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      }}
      className=" min-h-screen py-8"
    >
      <div className="max-w-6xl mx-auto p-8  rounded-lg shadow-md bg-[#853A67]">
        <h5 className="font-bold text-4xl text-center mb-6">COOKIES POLICY</h5>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/2">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer by
                websites you visit. They are widely used to make websites work
                efficiently and provide essential information to site owners.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">How We Use Cookies</h2>
              <p>
                We use cookies to improve your browsing experience on our
                website. These cookies help us understand how you use our site
                and provide you with a better, more personalized experience.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Types of Cookies</h2>
              <p>
                There are different types of cookies, including session cookies
                that are temporary and are deleted when you close your browser,
                and persistent cookies that remain on your device for a longer
                period.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Managing Cookies</h2>
              <p>
                You can control and manage cookies in your browser settings. You
                can choose to disable or delete cookies, but this may impact
                your ability to use certain features of our website.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Contact Us</h2>
              <p>
                If you have any questions or concerns about our Cookies Policy,
                please contact us at{" "}
                <a href="/contact">contact@vocabmuster.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
