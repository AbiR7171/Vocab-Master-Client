import { useState } from "react";
import emailjs from "@emailjs/browser";

import contactImg from "../../../assets/images/contact-img.svg";
import { useLocation } from "react-router";

export const Contact = () => {
  const location = useLocation();
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .sendForm(
        "service_57llb9s",
        "template_c70h907",
        e.target,
        "8MVsDKJSxcg_N6-um"
      )
      .then(
        (result) => {
          setButtonText("Send");
          setFormDetails(formInitialDetails);
          setStatus({
            success: true,
            message: "Message sent successfully",
          });
        },
        (error) => {
          setButtonText("Sorry");
          setStatus({
            success: false,
            message: "Something went wrong, please try again later.",
          });
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <div className="container mx-auto px-4 py-12 mb-12">
        <h2 className="text-5xl font-semibold text-white mb-6 text-center lg:py-6 py-4">
          {location.pathname === "/contact" ? "Contact Us " : "Get In Touch"}
        </h2>
        <div className="flex flex-wrap mx-0">
          <div className="w-full md:w-1/2 px-4 mb-4">
            <img
              src={contactImg}
              alt="Contact Us"
              className="lg:w-[600px] h-auto mr-0"
            />
          </div>
          <div className="w-full md:w-1/2 px-o text-[#6756CB] font-bold">
            <form onSubmit={handleSubmit}>
              <div className="">
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full md:w-1/2 px-2 mb-4">
                    <input
                      type="text"
                      name="firstName"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                      className="w-full px-3 py-4 border border-gray-300  focus:outline-none focus:border-blue-500 rounded-3xl"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2 mb-4 ">
                    <input
                      type="text"
                      name="lastName"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                      className="w-full px-3 py-4 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formDetails.email}
                  placeholder="Email Address"
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                  className="w-full px-3 py-4 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  name="phone"
                  value={formDetails.phone}
                  placeholder="Phone No."
                  onChange={(e) => onFormUpdate("phone", e.target.value)}
                  className="w-full px-3 py-4 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <textarea
                  rows="6"
                  name="message"
                  value={formDetails.message}
                  placeholder="Message"
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-[#853a67] text-white px-4 py-4 rounded-3xl hover:bg-[#541f3f] transition duration-300 w-full"
                >
                  {buttonText}
                </button>
              </div>
              {status.message && (
                <div>
                  <p
                    className={
                      status.success ? "text-green-500" : "text-red-500"
                    }
                  >
                    {status.message}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
