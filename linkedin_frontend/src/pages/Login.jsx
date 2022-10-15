import { useState } from "react";
import logo from "../assets/logo.png";
import login_img from "../assets/login-img.svg";
import Footer from "../components/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container flex flex-col h-screen justify-between">
      <header className="h-20 w-28">
        <img src={logo} alt="logo" className="h-14 w-28" />
      </header>
      <main className="block h-full w-full m-auto text-center md:flex ">
        <div className="w-3/4 h-1/2 md:h-full  m-3 p-3 mx-auto">
          <h1 className="text-orange-900 m-1 text-3xl font-bold tracking-wider">
            Welcome to your professional community
          </h1>
          <form className="m-3 mx-auto " onSubmit={onsubmit}>
            <div class="relative mx-auto">
              <input
                type="text"
                id="floating_filled"
                className="  peer
                p-3 my-2 w-3/4  border border-black outline-none focus:border-sky-600
                "
                placeholder="Email"
              />
            </div>

            <div class="relative mx-auto">
              <input
                type="text"
                id="floating_filled"
                className="  peer
                p-3 my-2 w-3/4  border border-black outline-none focus:border-sky-600
                "
                placeholder="Password"
              />
            </div>
            <p className=" m-auto md:text-left w-3/4   text-sm">
              By clicking Agree & Join, you agree to the LinkedIn User
              Agreement, Privacy Policy, and Cookie Policy.
            </p>
            <input
              type={"submit"}
              // disabled={disabled}
              value="
              Agree & Join
            "
              className="bg-sky-600 text-white px-5 py-3 rounded-full my-3  w-3/4 cursor-pointer"
            />
            <p>
              {" "}
              <a
                href="#e"
                className="m-auto md:text-left w-3/4 text-sm  transition-all delay-500 ease-in-out hover:text-sky-600   "
              >
                Already on LinkedIn? Sign in
              </a>
            </p>
            {/* {error && <p className="error">Some Thing is Wrong  :( </p>} */}
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
