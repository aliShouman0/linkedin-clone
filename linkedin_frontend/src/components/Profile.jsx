import React, { useState } from "react";
import profile from "../assets/user.png";
import camera from "../assets/camera.svg";
import EditProfile from "./EditProfile";

function Profile() {
  const [editProfile, setEditProfile] = useState(false);
  return (
    <div className="w-full flex  flex-col justify-center items-center">
      <div className="w-full flex items-center ">
        <div className="w-1/2 text-center">
          <img src={profile} alt="Home" className="m-auto h-28 w-28" />
          <p className="font-bold text-3xl">UserName</p>
        </div>
        <div className="w-1/2 text-lg ">
          <p className="my-5">
            <b>Email:</b> <span>Lorem, ipsum.</span>
          </p>
          <p className="my-5">
            <b>Location:</b> <span>Lorem, ipsum.</span>
          </p>
          <p className="my-5">
            <b>8/4/2014:</b> <span>Lorem, ipsum.</span>
          </p>
          <p className="my-5">
            <b>Degree:</b> <span>Lorem, ipsum.</span>
          </p>
          <p className="my-5">
            <b>Experience:</b> <span>Lorem, ipsum.</span>
          </p>
        </div>
      </div>
      <button
        className=" bg-slate-500 p-2 w-3/4 rounded-lg "
        onClick={() => setEditProfile(true)}
      >
        Edit
      </button>
      {editProfile&&<EditProfile close={setEditProfile}/>}
    </div>
  );
}

export default Profile;
