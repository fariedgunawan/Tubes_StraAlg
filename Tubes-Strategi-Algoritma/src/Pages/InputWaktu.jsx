import React from "react";
import { useNavigate } from "react-router-dom";

const InputWaktu = () => {
  const navigate = useNavigate();

  return (
    <div className="body-input px-[35px]">
      <div className="flex justify-center items-center min-h-screen">
        <div className="card backdrop-blur-md backdrop-filter px-[30px] py-[30px] flex flex-col items-center text-center">
          <h2 className="font-bold text-[25px] flex sm:text-[30px]">
            Kalkulasi Optimal <span className="hidden md:flex ml-2">Waktu Lari Pagi dan Sore</span>
          </h2>
          <h2 className="text-[16px] mt-[10px] md:text-[20px]">Pilih Waktu Lari</h2>
          <div className="mt-[40px]">
            <button className="btn bg-transparent text-white hover:bg-white hover:text-black border-2 border-white px-[30px] mr-[40px] md:mr-[90px] md:px-[50px]" onClick={() => navigate("/showdata")}>
              Pagi
            </button>
            <button className="btn bg-transparent text-white hover:bg-white hover:text-black border-2 border-white px-[30px] md:px-[50px]" onClick={() => navigate("/inputjarak")}>
              Sore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputWaktu;
