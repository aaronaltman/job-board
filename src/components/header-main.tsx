import React from "react";

export default function HeaderMain() {
  return (
    <div className="max-w-6xl mx-auto mt-20">
      <header className="flex flex-col space-y-4 md:space-y-0 md:flex-row px-4 py-2 justify-between items-center bg-zinc-100 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 shadow-lg sticky rounded-lg">
        <p className=" text-white text-xl font-bold uppercase ">Job Finder</p>
      </header>
    </div>
  );
}
