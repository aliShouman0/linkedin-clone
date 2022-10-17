import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import login_img from "../assets/login-img.svg";
import Footer from "../components/Footer";
import CompanyInput from "../components/CompanyInput";
import UserInput from "../components/UserInput";
import camera from "../assets/camera.svg";
import loadImg from "../assets/load20.gif";
import main from "../main";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [date, setdate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [company, setCompany] = useState(false);
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [degree, setDegree] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [load, setLoad] = useState(false);
  const [photo, setphoto] = useState("NA");



  if (load) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen">
        <img src={loadImg} alt="loadImg" className="w-screen h-screen" />
      </div>
    );
  }
  return (
    <div className="container flex flex-col h-screen justify-between overflow-x-hidden">
      <header className="h-20 w-28">
        <img src={logo} alt="logo" className="h-14 w-28" />
      </header>
      <main className="block  h-auto w-screen m-auto text-center md:flex ">
        <div className="w-3/4 h-auto md:h-full    p-3 mx-auto">
          <h1 className="text-orange-900 m-1 md:text-3xl font-bold tracking-wider">
            Join the biggest professional community
          </h1>
          <form className="m-1 mx-auto " onSubmit={(e) => submit(e)}>
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
                Add Photo
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
            <div className=" w-3/4 m-auto flex  ">
              <div className=" flex  items-center">
                <input
                  type="checkbox"
                  id="isCompany"
                  onChange={(e) => {
                    setCompany(!company);
                  }}
                />
                <label htmlFor="isCompany" className=" p-1">
                  Company
                </label>
              </div>
            </div>
            <p className=" m-auto md:text-left w-3/4   text-sm">
              By clicking Agree & Join, you agree to the LinkedIn User
              Agreement, Privacy Policy, and Cookie Policy.
            </p>
            {error && (
              <p className=" mx-auto  w-1/2    rounded-md  text-red-900">
                Some Thing is Wrong :(
              </p>
            )}
            <input
              type={"submit"} 
              value="Agree & Join"
              className="bg-sky-600 text-white px-5 py-3 rounded-full my-3  w-3/4 cursor-pointer"
            />
            <button
              className="md:text-center text-left w-3/4 text-sm  transition-all delay-500 ease-in-out hover:text-sky-600"
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
            >
              {" "}
              Already on LinkedIn? Sign in
            </button>
            {/* {error && <p className="error">Some Thing is Wrong  :( </p>} */}
          </form>
        </div>
        <div className="w-3/4 h-1/2 md:h-full   p-3 mx-auto">
          <img className="h-full w-full" src={login_img} alt="login_img" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Signup;
