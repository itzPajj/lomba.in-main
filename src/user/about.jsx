import React from "react";
import "boxicons";
import Navbar from "../Navbar/navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-28">
        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-[#BE2EE6] from-0% to-[#4B20DC] to-100% bg-clip-text text-transparent">Contact</h1>
        <div className="mt-28 min-h-screen w-full items-center">
          <h1 className="text-5xl mx-24 font-bold mt-5 bg-gradient-to-r from-[#BE2EE6] from-0% to-[#4B20DC] to-100% bg-clip-text text-transparent">Contact me here </h1>
          <div className="flex justify-between mt-12 mx-24">
            <div>
              <p className="text-3xl font-semibold">You can contact me via email or whatsapp</p>
              <p className="text-3xl font-semibold mt-5">See you on other side</p>
            </div>
            <div>
              <div class="mb-5 flex gap-5">
                <a href="" target="_blank" className="text-3xl text-slate-700 flex gap-2">
                  <img src="../public/instagram.png" alt="" />
                  <p className="text-gray-500">Lombain</p>
                </a>
              </div>
              <div class="mb-5 flex gap-5">
                <a href="" target="_blank" className="text-3xl text-slate-700 flex gap-2">
                  <img src="../public/facebook.png" alt="" />
                  <p className="text-gray-500">Lombain</p>
                </a>
              </div>
              <div class="mb-5 flex gap-5">
                <a href="" target="_blank" className="text-3xl text-slate-700 flex gap-2">
                  <img src="../public/twitter.png" alt="" />
                  <p className="text-gray-500">Lombain</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;