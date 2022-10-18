import Job from "./Job";
import main from "../main";
import { useState, useEffect } from "react";
import loadImg from "../assets/load22.gif";

function Feed() {
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(true);
  const [jobs, setJobs] = useState([]);

  const { id } = JSON.parse(localStorage.getItem("user_info"));
  useEffect(() => {
    const getJob = async () => {
      const res = await main.getJob(id, setError, setLoad);
      setJobs(res);
    };
    getJob();
  }, []);
  console.log(jobs);
  return (
    <div className=" w-1/2 mt-2   flex flex-col items-center ">
     
    </div>
  );
}

export default Feed;
