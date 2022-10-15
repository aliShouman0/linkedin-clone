import React, { useState } from "react";
import AddJob from "../components/AddJob";
import Job from "./Job";

function Company() {
  const [addJob, setAddJob] = useState(false);

  let test =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, a.";
  return (
    <div className=" w-1/2 mt-2   flex flex-col items-center ">
      <button
        onClick={() => setAddJob(true)}
        className="bg-gray-500 p-2 rounded-lg w-full text-lg"
      >
        Post a Job
      </button>
  

    </div>
  );
}

export default Company;
