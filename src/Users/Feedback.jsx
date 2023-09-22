import moment from "moment";
import React from "react";
import useUsers from "../hooks/useUsers";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Feedback = () => {
  const [userInfo] = useUsers();
  const [rating, setRating] = useState(0);

  const handleIssue = (event) => {
    event.preventDefault();
    const feedback = event.target.issue.value;

    //  console.log(issue);

    axios
      .post("https://vocab-master-server.onrender.com/feedback", {
        name: userInfo[0].name,
        email: userInfo[0].email,
        date: moment().format("DD, MMM, yyyy"),
        feedback,
        rating,
      })
      .then((res) => {
        console.log(res.data);

        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your sent feedback successfully",
            showConfirmButton: false,
            timer: 1500,
          });

          event.target.reset();
        }
      });
  };

  // bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900
  return (
    <div className="bg-Backs w-full h-full">
      {/* <p className="text-4xl font-semibold text-center text-white ms-72  ">Send us Your Valuable Feedback and Rating</p> */}
      <div className="text-center text-lg md:text-4xl font-semibold text-white md:ms-72 ">
        <Typewriter
          options={{
            strings: "Send us Your Valuable Feedback and Rating",
            autoStart: true,
            loop: true,
            cursor: "|",
            typeSpeed: 50,
            deleteSpeed: 10,
          }}
          onInit={(typewriter) => {
            typewriter.pauseFor(1000).deleteAll().typeString("").start();
          }}
        />
      </div>

      <div className="w-full md:w-4/5 ml-auto flex justify-center items-center min-h-screen">
        <form
          onSubmit={handleIssue}
          className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-80 shadow-md rounded w-full md:w-2/5 px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <Rating
              style={{ maxWidth: 280 }}
              value={rating}
              onChange={setRating}
              isRequired
            />
          </div>
          <div className="mb-4">
            <label
              className="block  text-black text-lg font-bold mb-2"
              htmlFor="issue"
            >
              Feedback
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              name="issue"
              placeholder="Describe your issue..."
              rows="6"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
