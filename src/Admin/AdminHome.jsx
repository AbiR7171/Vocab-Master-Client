import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UserChart from "../Chartjs/UserChart";
import UserSeasonChart from "../Chartjs/UserSeasonChart";
import WordReques from "./WordReques";
import WordChart from "../Chartjs/WordChart";
import axios from "axios";
import useWords from "../hooks/useWords";

const AdminHome = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://vocab-master-server.onrender.com/users").then((data) => {
      // console.log(data.data);
      setUsers(data.data);
    });
  }, []);

  const season = users.map((user) => user.season);
  const diamond = users.map((user) => user.diamond);

  const totalDiamond = diamond.reduce((previous, current) => {
    const sum = previous + current;

    return sum;
  }, 0);

  const avgDiamond = totalDiamond / users.length;
  const diamondFixed = avgDiamond.toFixed(2);

  const totalSeason = season.reduce((previous, current) => {
    return previous + current;
  }, 0);

  console.log(totalSeason);

  const avgSeason = totalSeason / users.length;

  const avgFixed = avgSeason.toFixed(2);

  console.log(avgSeason);

  const [words] = useWords();

  console.log(words);

  const category = words.map((word) => word.category);
  console.log(category);

  const uniqueWords = {};
  const newArray = [];

  for (const word of category) {
    if (!uniqueWords[word]) {
      uniqueWords[word] = true;
      newArray.push(word);
    }
  }

  console.log(newArray);

  return (
    <div className="w-full h-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <div className="h-full w-full container mx-auto  px-2 mt-2 ">
        <Tabs>
          <TabList className="bg-black p-4 rounded-lg flex space-x-5">
            <Tab className="text-white px-3">Users</Tab>
            <Tab className="text-white px-3">Words</Tab>
            <Tab className="text-white px-3"></Tab>
          </TabList>

          <TabPanel>
            <div className="container mx-auto">
              <div className="px-20 mb-10 mt-10 flex gap-4">
                <div className="w-64 h-32 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg shadow-lg p-2">
                  {/* Content goes here */}
                  <p className="text-white text-2xl uppercase font-bold font-serif text-center">
                    TOTAL USER
                  </p>
                  <p className="text-center text-7xl">{users?.length}</p>
                </div>

                <div className="w-64 h-32 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg shadow-lg p-2">
                  {/* Content goes here */}
                  <p className="text-white text-2xl uppercase font-bold font-serif text-center">
                    Avg Season
                  </p>
                  <p className="text-center text-7xl">{avgFixed}</p>
                </div>

                <div className="w-64 h-32 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg shadow-lg p-2">
                  {/* Content goes here */}
                  <p className="text-white text-2xl uppercase font-bold font-serif text-center">
                    avg diamond
                  </p>
                  <p className="text-center text-7xl">{diamondFixed}</p>
                </div>

                {/* <div className="w-56 h-32 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg shadow-lg p-2">
                 
                  <p className="text-white text-2xl uppercase font-bold font-serif text-center">TOTAL USER</p> 
                  <p className="text-center text-7xl">{users?.length}</p>
                </div> */}
              </div>

              <div className=" mt-4">
                <li className="text-2xl  text-red-600 ms-20 font-Sec">
                  Users Grow Chart
                </li>
                <UserChart />
              </div>

              <div className="mt-4">
                <li className="text-2xl  text-red-600 ms-20 font-Sec">
                  Users Season Chart
                </li>
                <UserSeasonChart />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="w-full">
              <div className="px-32 mb-10 mt-10 flex gap-4">
                <div className="w-64 h-32 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg shadow-lg p-2">
                  {/* Content goes here */}
                  <p className="text-white text-2xl uppercase font-bold font-serif text-center">
                    TOTAL words
                  </p>
                  <p className="text-center text-7xl">{words?.length}</p>
                </div>

                <div className="w-64 h-32 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg shadow-lg p-2">
                  {/* Content goes here */}
                  <p className="text-white text-2xl uppercase font-bold font-serif text-center">
                    total Season
                  </p>
                  <p className="text-center text-7xl">7</p>
                </div>

                <div className="w-64 h-32 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg shadow-lg p-2">
                  {/* Content goes here */}
                  <p className="text-white text-2xl uppercase font-bold font-serif text-center">
                    Total category
                  </p>
                  <p className="text-center text-7xl">{newArray?.length}</p>
                </div>

                {/* <div className="w-56 h-32 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg shadow-lg p-2">
 
  <p className="text-white text-2xl uppercase font-bold font-serif text-center">TOTAL USER</p> 
  <p className="text-center text-7xl">{users?.length}</p>
</div> */}
              </div>
              <div>
                <li className="text-2xl  text-red-600 ms-20 font-Sec">
                  Words Chart
                </li>
                <WordChart />
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminHome;
