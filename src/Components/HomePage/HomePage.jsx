import React, { useState } from "react";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";



const profiles = [
  {
    name: "Marc Demo",
    skillsOffered: ["JavaScript", "Python"],
    skillsWanted: ["Music", "Graphic Designer"],
    rating: 3.9,
  },
  {
    name: "Michell",
    skillsOffered: ["JavaScript", "Python"],
    skillsWanted: ["Music", "Graphic Designer"],
    rating: 2.5,
  },
  {
    name: "Joe Wills",
    skillsOffered: ["JavaScript", "Python"],
    skillsWanted: ["Music", "Graphic Designer"],
    rating: 4.0,
  },
];

const HomePage = () => {

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center">
    <Header onClick={goToLogin} name="Login"/>
    <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-gray-800 rounded mb-5 float-right">
      {/* Availability Dropdown */}
      <div className="relative">
        <label className="mr-2 font-semibold">Availability:</label>
        <select
          onChange={(e) => setAvailability(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded"
        >
          <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </select>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded w-64"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Search
        </button>
      </div>
    </div>
      <div className="w-full max-w-3xl space-y-6 my-4">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-white/10 border border-white/30 rounded-xl p-4 rounded flex gap-x-6 items-center text-white"
          >
            <div>
                 <img src="/login.png" className='w-20 h-20 rounded-full' alt="Login" />
            </div>  
            <div>
              <h2 className="text-xl font-semibold">{profile.name}</h2>
              <p>
                <span className="text-green-400">Skills Offered: </span>
                {profile.skillsOffered.join(", ")}
              </p>
              <p>
                <span className="text-blue-400">Skills Wanted: </span>
                {profile.skillsWanted.join(", ")}
              </p>
              <p>Rating: {profile.rating}/5</p>
            </div>
            <button
            //   onClick={handleRequest}
              className="bg-teal-500 px-4 py-2 rounded hover:bg-teal-600 float-right"
            >
              Request
            </button>
          </div>
        ))}

        <div className="flex justify-center space-x-2 mt-6">
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <button
              key={num}
              className="px-3 py-1 border border-white rounded hover:bg-white hover:text-black"
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage
