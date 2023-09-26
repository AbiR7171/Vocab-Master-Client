import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AdminIssue = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios.get("https://vocab-master-server.onrender.com/issue").then((res) => {
      console.log(res.data);
      setIssues(res.data);
    });
  }, []);
  return (
    <div className="bg-Backs w-full h-full">
      <p className="text-center mt-10 uppercase underline text-4xl text-red-600">
        Manage Issue
      </p>

      <div className="grid grid-cols-1 gap-5  px-20 mt-10 w-full md:w-4/5 ml-auto rounded ">
        {issues.map((issue) => {
          return (
            <div className="bg-gradient-to-r from-red-200 to-red-600 p-2 rounded ">
              <div className="flex items-center justify-evenly mb-2">
                <p>Name: {issue?.name}</p>
                <p>Email: {issue?.email}</p>
                <p>Date: {issue.date}</p>
              </div>

              <div className="bg-white text-black w-full p-2 h-32 rounded">
                {issue.issue}
              </div>

              <div className="w-full flex justify-end mt-2 me-4">
                <button className="bg-green-700 p-3 rounded">Solved</button>
              </div>
            </div>
          );
        })}

        <div className="w-full flex justify-end mt-2 me-4">
          <button className="bg-green-700 p-3 rounded">Solved</button>
        </div>
      </div>
    </div>
  );
};

export default AdminIssue;
