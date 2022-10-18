import React from "react";
import profile from "../assets/user.png";
import logout from "../assets/logout.png";
import main from "../main";
import { useNavigate } from "react-router-dom";

function LeftPanel() {
  const navigate = useNavigate();
  const { name, photo, location } = JSON.parse(
    localStorage.getItem("user_info")
  ); 
  return (
    <div className="w-[13%]   h-96 m-2 rounded-xl bg-white flex flex-col items-center justify-between   ">
      <div className="text-center my-5">
        <div className=" m-2">
          <img
            src={photo && photo === "NA" ? profile : photo}
            alt="Home"
            className="m-auto h-7 w-7"
          />
          <p>{name}</p>
        </div>
        <p className="my-5">{location}</p>
      </div>
      <button className="mb-10" onClick={() => main.logout(navigate)}>
        <img src={logout} alt="Home" className=" m-auto h-7 w-7" />
        Logout
      </button>
    </div>
  );
}

export default LeftPanel;
