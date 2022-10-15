import React from "react";
import Job from "./Job";

function Feed() {
  let test =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, a.";
  return (
    <div className=" w-1/2 mt-2   flex flex-col items-center ">
      <Job name={"SE"} photo={"NA"} description={test} title="Full Stack" />
      <Job name={"SE"} photo={"NA"} description={test} title="Full Stack" />
    </div>
  );
}

export default Feed;
