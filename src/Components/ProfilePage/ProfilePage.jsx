import React from "react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-8">
        <h1 className="text-xl font-bold">Skill Swap Platform</h1>

        <div className="flex items-center gap-4">
          <button className="text-green-500 underline">Save</button>
          <button className="text-red-500 underline">Discard</button>
          <button className="underline">Swap Request</button>
          <button className="underline">Home</button>
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-white outline-none"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-1">Location</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-white outline-none"
              placeholder="Your Location"
            />
          </div>

          <div>
            <label className="block mb-2">Skills Offered</label>
            <div className="flex flex-wrap gap-2">
              {["Graphic Design", "Video Editing", "Photoshop"].map((skill) => (
                <span
                  key={skill}
                  className="bg-white text-black px-3 py-1 rounded-full flex items-center gap-1"
                >
                  {skill}
                  <button className="text-black ml-1">×</button>
                </span>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-1">Availability</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-white outline-none"
              placeholder="e.g. Weekends"
            />
          </div>

          <div>
            <label className="block mb-1">Profile</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-white outline-none"
              placeholder="Public"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col items-center gap-2">
            <div className="w-32 h-32 rounded-full border-2 border-white flex items-center justify-center">
              Profile Photo
            </div>
            <button className="underline">Add/Edit</button>
            <button className="text-red-500 underline">Remove</button>
          </div>

          <div>
            <label className="block mb-2">Skills Wanted</label>
            <div className="flex flex-wrap gap-2">
              {["Python", "Java Script", "Manager"].map((skill) => (
                <span
                  key={skill}
                  className="bg-white text-black px-3 py-1 rounded-full flex items-center gap-1"
                >
                  {skill}
                  <button className="text-black ml-1">×</button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
