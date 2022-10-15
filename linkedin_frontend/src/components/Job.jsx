import React from "react";

import profile from "../assets/user.png";

function Job({ name, photo, description, title }) {
  return (
    <>
      <div className="bg-gray-300 w-11/12 h-auto  m-2 p-2 rounded-lg">
        <div className="flex justify-between">
          <div className="flex items-center m-3">
            <img
              src={photo !== "NA" ? photo : profile}
              alt="Home"
              className=" h-10 w-10 mr-2"
            />
            <p>{name} </p>
          </div>
          <button className="text-xs h-7 p-1.5 m-auto   bg-slate-500 rounded-md mr-2 ">
            Follow
          </button>
        </div>
        <div className="m-3">
          <p>
            <b>Title:</b> {title}
          </p>
          <p>
            <b>Description:</b>
            {description}
          </p>
        </div>
        <div className="text-right">
          <button className="p-1.5 text-sm bg-slate-500 rounded-md mr-2 ">
            Apply
          </button>
        </div>
      </div>
    </>
  );
}

export default Job;
