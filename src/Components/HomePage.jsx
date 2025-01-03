import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("There was an error fetching the users", error);
      });
  }, []);

  const handleViewAll = () => {
    setViewAll(true);
  };

  const displayedUsers = viewAll ? users : users.slice(0, 4);

  return (
    <div className="bg-[#FFFFFF]">
      <Header />
      <div className="lg:grid-cols-4 grid lg:gap-4 pt-[3em] lg:px-[10em] grid-cols-2 gap-4 px-[2em]">
        {/* desktop views only */}
        {users.map((user) => (
          <div key={user.id} className="hidden md:block mb-4">
            <div className="border text-[#000] lg:justify-items-center rounded pt-[3em] pb-[3em] text-[12px] lg:text-[20px] pl-[2em]">
              <h2 className="text-center text-[20px] capitalize">name</h2>
              <div>{user.name}</div>
              <div className="border border-[#000] mt-[1em] w-[100px] h-[40px] p-[5px] text-[15px] bg-[#000] text-[#FFFFFF] rounded-[3px]">
                <Link to={`/user/${user.id}`}>view details</Link>
              </div>
            </div>
          </div>
        ))}
         {/* mobile views only */}
        {displayedUsers.map((user) => (
          <div key={user.id} className={`mb-4 ${viewAll ? "" : "md:hidden"}`}>
            <div className="border text-[#000] lg:justify-items-center rounded pt-[3em] pb-[3em] text-[12px] lg:text-[20px] pl-[2em]">
              <h2 className="text-center text-[20px] capitalize">name</h2>
              <div>{user.name}</div>
              <div className="border border-[#000] mt-[1em] w-[100px] h-[40px] p-[5px] text-[15px] bg-[#000] text-[#FFFFFF] rounded-[3px]">
                <Link to={`/user/${user.id}`}>view details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!viewAll && (
        <button
          onClick={handleViewAll}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded lg:hidden ml-[6em]"
        >
          View All Users
        </button>
      )}
    </div>
  );
};

export default HomePage;
