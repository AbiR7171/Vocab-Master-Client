import React from "react";
import Banner from "../Banner/Banner";
import NavBar from "../../../Shared/NavBar";
import Footer from "../../../Shared/Footer";
import EarnPoints from "../section/EarnPoints";
import QuizSection from "../section/QuizSection";
import Sponsor from "./Sponsor";

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "#4158D0",
        backgroundImage:
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      }}
    >
      <NavBar />
      <Banner />
      <EarnPoints />
      <QuizSection />
      <Sponsor></Sponsor>
      <Footer />
    </div>
  );
};

export default Home;
