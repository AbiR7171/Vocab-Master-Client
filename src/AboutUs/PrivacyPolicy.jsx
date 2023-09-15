import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
      style={{
        backgroundColor: "#4158D0",
        backgroundImage:
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      }}
      className="bg-blue-500 min-h-screen py-8"
    >
      <div className="max-w-6xl mx-auto p-8 bg- rounded-lg shadow-md">
        <h5 className="font-bold text-4xl text-center mb-6">PRIVACY POLICY</h5>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="w-full md:w-1/2">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Our Privacy Commitment</h2>
              <p>
                At VocabMuster, we take your privacy seriously and are committed
                to protecting your personal information. This Privacy Policy
                explains how we collect, use, and safeguard the data you provide
                to us.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Data Collection</h2>
              <p>
                We collect information such as your name, email address, and
                usage data when you sign up for our services. This data helps us
                personalize your learning experience and improve our platform.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Usage of Information</h2>
              <p>
                We use your data to provide you with tailored vocabulary
                lessons, track your progress, and offer a seamless learning
                experience. We do not share your personal information with third
                parties without your consent.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Security Measures</h2>
              <p>
                We employ industry-standard security protocols to protect your
                data. Your personal information is encrypted and stored securely
                to prevent unauthorized access or data breaches.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Cookies and Tracking</h2>
              <p>
                We use cookies and tracking technologies to enhance your
                browsing experience. You can manage cookie preferences in your
                browser settings.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Contact Us</h2>
              <p>
                If you have any questions or concerns about our Privacy Policy
                or how we handle your data, please contact us at{" "}
                <a href="/contact">contact@vocabmuster.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
