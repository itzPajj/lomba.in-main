import React from "react";
import Button from "../components/Button";
import Medsos from "../components/Medsos";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";

function Home(props) {
  const { textColor = "bg-gradient-to-r from-[#BE2EE6] from-0% to-[#4B20DC] to-100% bg-clip-text text-transparent" } = props;
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center w-full min-h-screen mt-10">
        <div>
          <p className={`text-xl ${textColor}`}>Selamat Datang!</p>
          <p className={`text-8xl font-bold ${textColor}`}>LOMBAIN</p>
          <p className={`text-2xl ${textColor}`}>Cari kompetensi di ajang bergengsi!</p>
          <p className="mt-3 text-lg font-semibold text-slate-400">Website penyedia informasi kompetensi akademik yang memiliki informasi terupdate</p>
          <div className="mt-10 flex gap-7">
            <Link to={"/buatlomba"}>
              <Button title="Buat Lomba" textColor="text-white" size="xl" />
            </Link>
            <Link to={"/daftarlomba"}>
              <Button color="bg-white" title="Lihat Lomba" />
            </Link>
          </div>
          <Medsos />
        </div>
        <div>
          <img src="../public/img-home.png" className="w-[700px] h-full" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
