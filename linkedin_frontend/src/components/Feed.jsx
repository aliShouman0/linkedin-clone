import React from "react";
import profile from "../assets/user.png";

function Feed() {
  return (
    <div className="border  border-red-500 w-1/2 mt-2 h-full  flex flex-col items-center ">
      <div className="bg-gray-300 w-11/12 h-auto  m-2 p-2 rounded-lg">
        <div className="flex items-center m-3">
          <img src={profile} alt="Home" className=" h-7 w-7 mr-2" />
          <p>Company </p>
        </div>
        <div className="m-3">
          <p>
            <b>Title:</b> Lorem, ipsum.
          </p>
          <p>
            <b>Description:</b>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            sapiente accusamus minima necessitatibus, illum molestiae magni
            commodi voluptas tempora praesentium, maiores possimus deserunt
            perspiciatis rem sunt. Sunt quia a aperiam.
          </p>
        </div>
        <div className="text-right">
          <button className="p-2 bg-slate-500 rounded-md mr-2 ">Apply</button>
        </div>
      </div>
    </div>
  );
}

export default Feed;
