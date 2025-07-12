import React from "react";

export default function PublicProfile() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-8">
        <h1 className="text-xl font-bold">Skill Swap Platform</h1>

        <div className="flex items-center gap-4">
          <button className="underline">Swap Request</button>
          <button className="underline">Home</button>
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="space-y-4">
          <button className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded">
            Request
          </button>

          <h2 className="text-2xl font-bold">Marc Demo</h2>

          <div>
            <h3 className="font-semibold mb-1">Skills Offered</h3>
            <p>JavaScript, Python</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Skills Wanted</h3>
            <p>Graphic Design, Video Editing</p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-8 md:mt-0">
          <div className="w-40 h-40 rounded-full border-2 border-white flex items-center justify-center">
            Profile Photo
          </div>
        </div>
      </div>

      {/* Rating and Feedback */}
      <div className="mt-12 text-center">
        <h3 className="text-lg font-semibold">Rating and Feedback</h3>
        <p className="mt-2 text-gray-300">⭐️⭐️⭐️⭐️☆ (4.0/5)</p>
        <p className="mt-2 max-w-xl mx-auto text-gray-400">
          "Marc is great to work with. Delivered high-quality work and was very collaborative!"
        </p>
      </div>
    </div>
  );
}
