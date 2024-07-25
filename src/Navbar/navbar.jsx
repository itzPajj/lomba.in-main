import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Navbar() {
  return (
    <div className="bg-gradient-to-r from-[#BE2EE6] from-0% to-[#4B20DC] to-100% p-5 rounded-b-lg fixed top-0 right-0 left-0">
      <div className="flex justify-center">
        <div className="mr-auto">
          <Link to={"/"} className="text-4xl font-bold text-white px-5">
            LOMBA.IN
          </Link>
        </div>
        <div className="flex gap-12 mx-auto items-center px-10">
          <Link to={"/"} className="text-xl font-semibold text-white hover:text-slate-400">
            Home
          </Link>
          <Link to={"/about"} className="text-xl font-semibold text-white hover:text-slate-400">
            About
          </Link>
          <Link to={"/contact"} className="text-xl font-semibold text-white hover:text-slate-400">
            Contact
          </Link>
        </div>
        <div className="flex gap-5 items-center pr-2 ml-auto">
          <Button color="bg-white" title= "Login" textColor = "text-black" size= "lg" />
          <Button color ="bg-blue-600" title= "Register" textColor = "text-white" size= "lg"/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
