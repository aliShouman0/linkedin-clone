import React from "react";
import logo from "../assets/logo.png";
import home from "../assets/home.svg";
import notification from "../assets/notification.svg";
import profile from "../assets/user.png";
import search from "../assets/search.svg";

function Nav({ active, setActive, isCompany }) {
  
  let notificationNb = 1;
  return (
    <nav className="w-full h-auto bg-white flex items-center justify-between     ">
      <img src={logo} alt="logo" className="h-12 w-20 ml-4  " />
      <div>
        <button
          className={`text-xs h-full mx-1 p-1  rounded-sm w-24 ${
            active === "home" ? "bg-gray-300   border-b-2 border-black" : ""
          }`}
          onClick={() => setActive("home")}
        >
          <img src={home} alt="Home" className="m-auto h-5 w-5" />
          Home
        </button>

        <button
          className={`text-xs mx-1 p-1 rounded-sm w-24   ${
            active === "notification" || active === "applicant"
              ? "bg-gray-300   border-b-2 border-black"
              : ""
          }`}
          onClick={() => setActive(isCompany ? "applicant" : "notification")}
        >
          <img src={notification} alt="Home" className="m-auto h-5 w-5" />
          {isCompany ? "Applicants" : "Notifications"}
          &nbsp;
          {!isCompany && notificationNb > 0 && (
            <small className="text-xs text-red-500 font-bold">
              {notificationNb}
            </small>
          )}
        </button>

        <button
          className={`text-xs h-full mx-1 p-1 rounded-sm w-24 ${
            active === "profile"
              ? "bg-gray-300   border-b-2 border-black "
              : ""
          }`}
          onClick={() => setActive("profile")}
        >
          <img src={profile} alt="Home" className="m-auto h-5 w-5" />
          Profile
        </button>
      </div>

      <div className="flex ">
        {!isCompany && (
          <>
            <input
              type="text"
              className="p-1.5 w-3/4 h-8 text-sm  border  outline-none focus:border-sky-600 ml-auto"
              placeholder="Search"
            />
            <button className="ml-1 mr-4">
              <img src={search} alt="search" />
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
