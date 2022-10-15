import React from "react";
import logo from "../assets/logo.png";
import home from "../assets/home.svg";
import notification from "../assets/notification.svg";
import profile from "../assets/user.png";
import search from "../assets/search.svg";

function Nav({ active, setActive }) {
  return (
    <nav className="w-screen h-auto bg-gray-200 flex items-center justify-between ">
      <img src={logo} alt="logo" className="h-12 w-20 ml-4  " />
      <div>
        <button
          className={`text-sm mx-1 p-2  rounded-sm  ${
            active === "home" ? "bg-gray-300   border-b-2 border-black" : ""
          }`}
          onClick={() => setActive("home")}
        >
          <img src={home} alt="Home" className="m-auto" />
          Home
        </button>

        <button
          className={`text-sm mx-1 p-2 rounded-sm  ${
            active === "notification"
              ? "bg-gray-300   border-b-2 border-black"
              : ""
          }`}
          onClick={() => setActive("notification")}
        >
          <img src={notification} alt="Home" className="m-auto" />
          Notifications
        </button>

        <button
          className={`text-sm mx-1 p-2 rounded-sm ${
            active === "profile" ? "bg-gray-300   border-b-2 border-black" : ""
          }`}
          onClick={() => setActive("profile")}
        >
          <img src={profile} alt="Home" className="m-auto h-7 w-7" />
          Profile
        </button>
      </div>
      <div className="flex ">
        <input
          type="text"
          className="p-1.5 w-1/2 rounded-lg border border-black outline-none focus:border-sky-600 ml-auto"
          placeholder="Search"
        />
        <button className="ml-1 mr-4">
          <img src={search} alt="search" />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
