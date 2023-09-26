import { Rating } from "@smastrom/react-rating";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const ManageFeedback = () => {
  const [feedbacks, setFeedback] = useState([]);

  useEffect(() => {
    axios
      .get("https://vocab-master-server.onrender.com/feedback")
      .then((res) => {
        console.log(res.data);
        setFeedback(res.data);
      });
  }, []);

  const handleShow = (id) => {
    axios
      .patch(`https://vocab-master-server.onrender.com/feedback/show/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Feedback showed in the Home",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="bg-Backs w-full h-full">
      <p className="text-center mt-10 uppercase underline text-4xl text-red-600">
        Manage Feedback
      </p>

      <div className="grid grid-cols-1 gap-5  px-20 mt-10 w-full md:w-4/5 ml-auto rounded ">
        {feedbacks.map((feedback) => {
          return (
            <div className="bg-gradient-to-r from-red-200 to-red-600 p-2 rounded ">
              <div className="flex items-center justify-evenly mb-2">
                <p>Name: {feedback?.name}</p>
                <p>Email: {feedback?.email}</p>
                <p>Date: {feedback.date}</p>
              </div>

              <div className="mt-2 mb-4">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={feedback.star}
                  readOnly
                />
              </div>

              <div className="bg-white text-black w-full p-2 h-32 rounded">
                {feedback.feedback}
              </div>

              <div className="w-full flex justify-end mt-2 me-4">
                <button
                  onClick={() => handleShow(feedback._id)}
                  className="bg-green-700 p-3 rounded"
                >
                  Show Home
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageFeedback;
