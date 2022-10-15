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
      {addJob && <AddJob close={setAddJob} />}
      <Job name={"SE"} photo={"NA"} description={test} title="Full Stack" isCompany={true} />
      <Job name={"SE"} photo={"NA"} description={test} title="Full Stack" isCompany={true} />
      <Job name={"SE"} photo={"NA"} description={test} title="Full Stack" isCompany={true} />
      <Job name={"SE"} photo={"NA"} description={test} title="Full Stack" isCompany={true} />

    </div>
  );
}

export default Company;
