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
        <div className="">
          <h1 className="text-orange-900 text-lg font-bold tracking-wider">
            Welcome to your professional community
          </h1>
          <form className="m-3" onSubmit={onsubmit}></form>
        </div>
        <div className="">
          <img className="" src={login_img} alt="login_img" />
        </div>
      </main>
    </div>
  );
}

export default Login;
