import React from "react";
import profile from "../assets/user.png";

function LeftPanel() {
  return (
    <div className="w-36  h-screen bg-gray-200 text-center">
      <div className=" m-2">
        <img src={profile} alt="Home" className="m-auto h-7 w-7" />
        <p>userName</p>
      </div>
      <p>Degree</p>
    </div>
  );
}

export default LeftPanel;
