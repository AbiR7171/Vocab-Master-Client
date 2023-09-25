import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
const LeaderBoard = () => {
  const [students, setStudent] = useState([]);

  useEffect(() => {
    axios
      .get("https://vocab-master-server.onrender.com/users/student")
      .then((res) => {
        console.log(res.data);
        setStudent(res.data);
      });
  }, [students]);
  // bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900
  
  return (
    <div className=" bg-Backs w-full h-full px-20 ">
      <h2 className="text-6xl text-center mt-6 mb-10">LeaderBoard</h2>

      <div className="overflow-x-auto px-20 p-4 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-70 w-full md:w-4/5 ml-auto rounded">
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr className="text-white text-1xl font-Sec ">
              <th>Ranking</th>
              <th>Image</th>
              <th>Name</th>
              <th>Season</th>
              <th>Diamond</th>
              <th></th>
              {/* <th>Level</th> */}
            </tr>
          </thead>
          <tbody>
            {students.map((word, index) => {
              return (
                <tr className="text-1xl font-Sec text-black ">
                  <th>{index + 1}</th>
                  <td className="font-bold">
                    <img
                      src={word?.image}
                      className="w-10 h-10 rounded-full"
                      alt=""
                    />
                  </td>
                  <td className="font-bold">{word.name}</td>
                  <td>{word.season}</td>
                  <td>{word.diamond}</td>

                  <td>
                    <Link to="/allRouts/users/message">
                      <button className=" p-4 rounded-lg text-red-600">
                        <Icon
                          icon="material-symbols:chat-sharp"
                          className="text-3xl"
                        />
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderBoard;
