import { useState } from "react";
import logo from "../assets/logo.png";
import login_img from "../assets/login-img.svg";

function Login() { 
  return (
    <div className="container">
      <header className="h-20 w-28">
        <img src={logo} alt="logo" className="h-14 w-28" />
      </header>
      <main className="flex">
        <div className="w-3/4 h-full m-3 p-3">
          <h1 className="text-orange-900 m-1 text-3xl font-bold tracking-wider">
            Welcome to your professional community
          </h1>
          <form className="m-3 mx-auto " onSubmit={onsubmit}>
            <input
              type="email"
              placeholder="Email"
              className="p-3 my-2 w-3/4  border border-black outline-none focus:border-sky-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              className="p-3 my-2 w-3/4  border border-black outline-none focus:border-sky-600"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="text-left w-3/4   text-sm">
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
             
          </form>
        </div>
        <div className="w-3/4 h-full m-3 p-3">
          <img className="" src={login_img} alt="login_img" />
        </div>
      </main>
    </div>
  );
}

export default Login;
