import React from "react";
import logo from "../assets/logo.png";
import home from "../assets/home.svg";
import notification from "../assets/notification.svg";
import profile from "../assets/user.png";
import search from "../assets/search.svg";

function Nav({ active, setActive, isCompany }) {
  let notificationNb = 1;
  return (
    <nav className="w-full h-auto bg-gray-200 flex items-center justify-between   border-b-2 border-blue-600">
      <img src={logo} alt="logo" className="h-20 w-32 ml-4  " />
      <div>
        <button
          className={`text-sm mx-1 p-2  rounded-sm w-28 ${
            active === "home" ? "bg-gray-300   border-b-4 border-blue-600" : ""
          }`}
          onClick={() => setActive("home")}
        >
          <img src={home} alt="Home" className="m-auto" />
          Home
        </button>

        <button
          className={`text-sm mx-1 p-2 rounded-sm w-28  ${
            active === "notification" || active === "applicant"
              ? "bg-gray-300   border-b-4 border-blue-600"
              : ""
          }`}
          onClick={() => setActive(isCompany ? "applicant" : "notification")}
        >
          <img src={notification} alt="Home" className="m-auto" />
          {isCompany ? "Applicants" : "Notifications"}
          &nbsp;
          {!isCompany && notificationNb > 0 && (
            <small className="text-xs text-red-500 font-bold">
              {notificationNb}
            </small>
          )}
        </button>

        <button
          className={`text-sm mx-1 p-2 rounded-sm w-28 ${
            active === "profile" ? "bg-gray-300   border-b-4 border-blue-600 " : ""
          }`}
          onClick={() => setActive("profile")}
        >
          <img src={profile} alt="Home" className="m-auto h-7 w-7" />
          Profile
        </button>
      </div>

      <div className="flex ">
        {!isCompany && (
          <>
            <input
              type="text"
              className="p-1.5 w-1/2 rounded-lg border  outline-none focus:border-sky-600 ml-auto"
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
