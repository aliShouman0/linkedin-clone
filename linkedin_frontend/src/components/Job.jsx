import React from "react";
import profile from "../assets/user.png";
import { useState, useEffect } from "react";
import main from "../main";
import userEvent from "@testing-library/user-event";

function Job({ name, photo, description, title, isCompany, companyId, jobId }) {
  const [isFollow, SetIsFollow] = useState(true);

  useEffect(() => {
    const isFollow = async () => {
      const res = await main.checkIsFollow(companyId);
      SetIsFollow(res);
    };
    isFollow();
  }, []);

  const follow = async () => {
    const res = await main.follow(companyId);
    SetIsFollow(res);
  };
  const apply = async () => {
    const res = await main.apply(jobId);
    if (res.status && res.status === 200) {
      window.location.reload(false);
    }
  };

  return (
    <>
      <div className="bg-white   w-11/12 h-auto  m-2 p-2 rounded-lg    ">
        <div className="flex justify-between  ">
          <div className="flex items-center m-3">
            <img
              src={photo !== "NA" ? photo : profile}
              alt="Home"
              className=" h-10 w-10 mr-2"
            />
            <p>{name} </p>
          </div>
          {!isCompany && !isFollow && (
            <button
              className="text-xs h-7 p-1.5 m-auto   bg-gray-300 rounded-md mr-2 "
              onClick={follow}
            >
              Follow
            </button>
          )}
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
        {!isCompany && (
          <div className="text-right">
            <button
              className="p-1.5 text-sm bg-gray-300 rounded-md mr-2 "
              onClick={apply}
            >
              Apply
            </button>
          </div>
        )}
      </div>
    </>
  );
}
Job.defaultProps = {
  isCompany: false,
  companyId: false,
};
export default Job;
