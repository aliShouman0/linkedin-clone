import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import login_img from "../assets/login-img.svg";
import Footer from "../components/Footer";
import loadImg from "../assets/load22.gif";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);


  return (
    <div className="container flex flex-col h-screen justify-between">
      {load && (
        <div className="fixed   w-screen h-screen  top-1/4   ">
          <img src={loadImg} alt="loadImg" className="w-1/4 h-1/4 m-auto" />
        </div>
      )}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" p-3 my-2 w-3/4  border border-black outline-none focus:border-sky-600 "
              placeholder="Email"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
