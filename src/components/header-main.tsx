import React from "react";

export default function HeaderMain() {
  return (
    <div className="max-w-8xl mx-auto">
      <header className="flex flex-col space-y-4 md:space-y-0 md:flex-row px-4 py-2 justify-between items-center bg-zinc-100 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 shadow-lg sticky">
        <p className=" text-white text-2xl font-bold ">Job Board Finder</p>
        <nav>
          <ul className="flex flex-wrap space-x-6 text-white font-bold">
            <li className="hover:bg-zinc-50 hover:flex-1">Home</li>
            <li className="hover:bg-white/50">Jobs</li>
            <li>Sign In</li>
            <li>Sign Up</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
