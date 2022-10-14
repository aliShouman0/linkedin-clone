import { useState } from "react";
import logo from "../assets/logo.png";
import login_img from "../assets/login-img.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container">
      <header className="h-20 w-28">
        <img src={logo} alt="logo" className="h-14 w-28" />
      </header>
      <main className="block h-full w-full m-auto text-center md:flex">
        <div className="w-3/4 h-full m-3 p-3 mx-auto">
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
                placeholder=" "
              />
              <label
                for="floating_filled"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-6 right-96 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Email
              </label>
            </div>
      
            <div class="relative mx-auto">
              <input
                type="text"
                id="floating_filled"
                className="  peer
                p-3 my-2 w-3/4  border border-black outline-none focus:border-sky-600
                "
                placeholder=" "
              />
              <label
                for="floating_filled"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-6 right-80
                mr-9 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Password
              </label>
            </div>
            <p className="text-center m-auto md:text-left w-3/4   text-sm">
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
            {/* {error && <p className="error">Some Thing is Wrong  :( </p>} */}
          </form>
        </div>
        <div className="w-3/4 h-full m-3 p-3 mx-auto">
          <img className="" src={login_img} alt="login_img" />
        </div>
      </main>
    </div>
  );
}

export default Login;
