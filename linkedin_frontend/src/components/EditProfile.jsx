import { useState } from "react";
import CompanyInput from "../components/CompanyInput";
import UserInput from "../components/UserInput";
import camera from "../assets/camera.svg";

function EditProfile({ close }) {
  const [name, setName] = useState("");
  const [date, setdate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [company, setCompany] = useState(false);
  const [type, setType] = useState("");
  const [degree, setDescription] = useState("");
  const [description, setDegree] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");

  const submit = (e) => {
    e.preventDefault();
    // setLoad(true);
    // setdisabled(true);
    setError(false);
    if (!email) {
      setError(true);
      // setdisabled(false);
      // setLoad(false);
      return;
    }
    if (!name) {
      setError(true);
      // setdisabled(false);
      // setLoad(false);
      return;
    }
    if (!date) {
      setError(true);
      // setdisabled(false);
      // setLoad(false);
      return;
    }
    if (!location) {
      setError(true);
      // setdisabled(false);
      // setLoad(false);
      return;
    }
    if (!password) {
      setError(true);
      // setdisabled(false);
      // setLoad(false);
      return;
    }
    setName("");
    setdate("");
    setEmail("");
    setPassword("");
    //  .login(email, password, setError, setdisabled, navigate);
  };
  return (
    <div
      className="fixed top-0 left-0 w-full h-full
     bg-slate-700/90 z-10"
    >
      <form
        className="w-1/2 h-auto text-center  bg-gray-400 p-2 rounded-lg mt-5 mx-auto"
        onSubmit={(e) => submit(e)}
      >
        <div className="text-left">
          <button
            onClick={(e) => {
              e.preventDefault();
              close(false);
            }}
            className="mt-2 ml-2 text-2xl"
          >
            X
          </button>
        </div>
        <p className="font-bold text-3xl">Edit Profile</p>
        <input
          type="text"
          value={name}
          className=" p-3 my-2 w-3/4  border border-black outline-none focus:border-sky-600 "
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex w-3/4  m-auto   justify-around">
          <input
            type="Email"
            value={email}
            className=" p-3 my-2 w-1/4   border border-black outline-none focus:border-sky-600 "
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={location}
            className=" p-3 my-2 w-1/4   border border-black outline-none focus:border-sky-600 "
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="date"
            value={date}
            className=" p-3 my-2 w-1/4 text-sm border border-black outline-none focus:border-sky-600 "
            onChange={(e) => setdate(e.target.value)}
          />
          <label
            htmlFor="photo"
            className=" cursor-pointer flex flex-col items-center my-auto"
          >
            <input
              type="file"
              id="photo"
              className="hidden"
              onChange={(e) => {}}
            />
            <img src={camera} alt="camera" className=" h-5 w-5" />
            Change
          </label>
        </div>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 my-2 w-3/4  border border-black outline-none focus:border-sky-600 "
          placeholder="Password"
        />

        {company ? (
          <CompanyInput
            type={type}
            setType={setType}
            description={description}
            setDescription={setDescription}
          />
        ) : (
          <UserInput
            degree={degree}
            setDegree={setDegree}
            experience={experience}
            setExperience={setExperience}
          />
        )}
        {error && (
          <p className=" mx-auto  w-1/2    rounded-md  text-red-900">
            Some Thing is Wrong :(
          </p>
        )}
        <input
          type={"submit"}
          // disabled={disabled}
          value="Edit"
          className="bg-sky-600 text-white px-5 py-3 rounded-full my-3  w-3/4 cursor-pointer"
        />
      </form>
    </div>
  );
}

export default EditProfile;
