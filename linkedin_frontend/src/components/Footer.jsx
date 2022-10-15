import React from "react";
import logo from "../assets/logo.png";
function Footer() {
  return (
    <div
      className="w-screen p-3 mt-3 md:flex md:items-center md:justify-between  dark:bg-gray-500 text-white  
    "
    >
      <div className="h-20 w-28">
        <img src={logo} alt="logo" className="h-14 w-28" />
      </div>
      LinkedIn© 2022 User Agreement Privacy Policy Community Guidelines Cookie
      Policy Copyright Policy Send Feedback Language
    </div>
  );
}

export default Footer;
