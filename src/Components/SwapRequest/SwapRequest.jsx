import React from "react";

export default function SwapRequest() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-8">
        <h1 className="text-xl font-bold">Skill Swap Platform</h1>

        <div className="flex items-center gap-4">
          <button className="underline">Home</button>
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-8">
        <select className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-600">
          <option>Pending</option>
          <option>Accepted</option>
          <option>Rejected</option>
        </select>

        <div className="flex">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-l bg-gray-800 border border-gray-600 text-white"
          />
          <button className="bg-gray-700 px-4 py-2 rounded-r hover:bg-gray-600">
            Search
          </button>
        </div>
      </div>

      {/* Requests List */}
      <div className="space-y-6">
        {/* Request Card */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border border-gray-600 p-4 rounded">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center">
              Profile Photo
            </div>
            <div>
              <h2 className="text-lg font-bold">Marc Demo</h2>
              <p>
                <span className="text-green-400">Skills Offered =&gt; </span>
                JavaScript
              </p>
              <p>
                <span className="text-blue-400">Skill Wanted =&gt; </span>
                Photoshop
              </p>
              <p className="mt-2">Rating: 3.9/5</p>
            </div>
          </div>

          <div className="mt-4 md:mt-0 md:text-right">
            <p className="text-gray-300 mb-2">Status: Pending</p>
            <button className="text-green-400 mr-4 hover:underline">
              Accept
            </button>
            <button className="text-red-400 hover:underline">Reject</button>
          </div>
        </div>

        {/* Another Request Card */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border border-gray-600 p-4 rounded">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center">
              Profile Photo
            </div>
            <div>
              <h2 className="text-lg font-bold">Name</h2>
              <p>
                <span className="text-green-400">Skills Offered =&gt; </span>
                Python
              </p>
              <p>
                <span className="text-blue-400">Skill Wanted =&gt; </span>
                JavaScript
              </p>
              <p className="mt-2">Rating: 3.9/5</p>
            </div>
          </div>

          <div className="mt-4 md:mt-0 md:text-right">
            <p className="text-red-400 mb-2">Status: Rejected</p>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <button className="text-white hover:text-gray-400">&lt;</button>
        <button className="text-white font-bold underline">1</button>
        <button className="text-white hover:text-gray-400">2</button>
        <button className="text-white hover:text-gray-400">3</button>
        <button className="text-white hover:text-gray-400">&gt;</button>
      </div>
    </div>
  );
}
