import React from "react";
import profile from "../assets/user.png";
import logout from "../assets/logout.png";

function LeftPanel() {
  return (
    <div className="w-1/6  h-96 rounded-b-xl bg-gray-200  flex flex-col items-center justify-between">
      <div className="text-center my-5">
        <div className=" m-2">
          <img src={profile} alt="Home" className="m-auto h-7 w-7" />
          <p>userName</p>
        </div>
        <p className="my-5">Degree</p>
      </div>
      <button className="mb-10">
        <img src={logout} alt="Home" className=" m-auto h-7 w-7" />
        Logout
      </button>
    </div>
  );
}

export default LeftPanel;
