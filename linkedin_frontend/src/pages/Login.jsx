import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import login_img from "../assets/login-img.svg";
import Footer from "../components/Footer";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

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
    if (!password) {
      setError(true);
      // setdisabled(false);
      // setLoad(false);
      return;
    }
    setEmail("");
    setPassword("");
    // e_learning.login(email, password, setError, setdisabled, navigate);
  };

  return (
    <div className="container flex flex-col h-screen justify-between">
      <header className="h-20 w-28">
        <img src={logo} alt="logo" className="h-14 w-28" />
      </header>
      <main className="block  h-auto w-screen m-auto text-center md:flex  ">
        <div className="w-3/4 h-1/2 md:h-full  m-3 p-3 mx-auto">
          <h1 className="text-orange-900 m-1 md:text-3xl font-bold tracking-wider">
            Welcome to your professional community
          </h1>
          <form className="m-3 mx-auto " onSubmit={(e) => submit(e)}>
            <input
              type="text"
              id="floating_filled"
              className=" p-3 my-2 w-3/4  border border-black outline-none focus:border-sky-600 "
              placeholder="Email"
            />

            <input
              type="text"
              id="floating_filled"
              className="p-3 my-2 w-3/4  border border-black outline-none focus:border-sky-600 "
              placeholder="Password"
            />
            {error && (
              <p className=" mx-auto  w-1/2    rounded-md  text-red-900">
                Some Thing is Wrong :(
              </p>
            )}
            <input
              type={"submit"}
              // disabled={disabled}
              value="Login in"
              className="bg-sky-600 text-white px-5 py-3 rounded-full my-3  w-3/4 cursor-pointer"
            />
            <button
              className="md:text-center text-left w-3/4 text-sm  transition-all delay-500 ease-in-out hover:text-sky-600"
              onClick={(e) => {
                e.preventDefault();
                navigate("/signup");
              }}
            >
              New to LinkedIn? Join now
            </button>
          </form>
        </div>
        <div className="w-3/4 h-1/2 md:h-full m-3 p-3 mx-auto">
          <img className="h-full w-full" src={login_img} alt="login_img" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
