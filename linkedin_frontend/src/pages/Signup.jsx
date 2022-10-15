import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import login_img from "../assets/login-img.svg";
import Footer from "../components/Footer";
import CompanyInput from "../components/CompanyInput";
import UserInput from "../components/UserInput";
import camera from "../assets/camera.svg";

function Signup() {
  const navigate = useNavigate();
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
            <input
              type="Email"
              value={email}
              className=" p-3 my-2 w-3/4  border border-black outline-none focus:border-sky-600 "
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="date"
              value={date}
              className=" p-3 my-2 w-3/4  border border-black outline-none focus:border-sky-600 "
              onChange={(e) => setdate(e.target.value)}
            />

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

              <label
                htmlFor="photo"
                className=" p-1 cursor-pointer flex flex-col items-center"
              >
                <input
                  type="file"
                  id="photo"
                  className="hidden"
                  onChange={(e) => {}}
                />
                <img src={camera} alt="camera" className=" h-7 w-7" />
                Add Photo
              </label>
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
              // disabled={disabled}
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
