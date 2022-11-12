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
      {error && (
        <p className=" w-full  text-center text-4xl   rounded-md  text-white">
          Some Thing is Wrong :(
        </p>
      )}
      {load && !error && (
        <div className="fixed   w-screen h-screen  top-1/4   ">
          <img src={loadImg} alt="loadImg" className="w-1/4 h-1/4 m-auto" />
        </div>
      )}
      {jobs.map((job, idx) => (
        <Job
          jobId={job._id}
          key={idx}
          name={"SE"}
          photo={"NA"}
          description={job.description}
          title={job.title}
          companyId={job.company_id}
        />
      ))}
    </div>
  );
}

export default Feed;
