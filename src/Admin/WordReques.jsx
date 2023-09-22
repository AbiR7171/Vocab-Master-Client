import { Icon } from "@iconify/react";
import axios from "axios";
import { key } from "localforage";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const WordReques = () => {
  const [wordRequest, setWordRequest] = useState([]);
  useEffect(() => {
    fetch("https://vocab-master-server-new.vercel.app/user/wordrequest")
      .then((res) => res.json())
      .then((data) => setWordRequest(data));
  }, [wordRequest]);

  const handleDeleteWord = (word) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://vocab-master-server-new.vercel.app/user/deleteRequestWord/${word._id}`
          )
          .then((data) => {
            console.log(data);
            if (data.data.deletedCount > 0) {
              // refresh()
              Swal.fire("Deleted!", `${word.word} is deleted`, "success");
            }
          });
      }
    });
  };

  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 w-full h-full">
      <h2 className="text-3xl sm:text-5xl block font-extrabold  text-center my-12 rounded ">
        Request to add word
      </h2>
      <div className="container  mx-auto  rounded-lg border border-black bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 shadow-md  mt-20">
        <div className="overflow-x-auto px-20 p-4">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-white text-1xl font-Sec ">
                <th></th>
                <th>word</th>
                <th>user</th>
              </tr>
            </thead>
            <tbody>
              {wordRequest.map((word, index) => {
                return (
          
                    <tr
                      key={index}
                      className="text-1xl font-Sec text-black     "
                    >
                      <th>{index + 1}</th>
                      <td className="font-bold">{word.word}</td>
                      <td>{word.userName || word.userEmail}</td>
                      <td>
                        <Link to={`/allRouts/approveWord/${word._id}`}>
                          <button className="bg-red-700 p-4 rounded-lg text-white">
                            Edit And Approve
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDeleteWord(word)}
                          className="bg-red-700 p-4 rounded-lg text-white"
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
           
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WordReques;
