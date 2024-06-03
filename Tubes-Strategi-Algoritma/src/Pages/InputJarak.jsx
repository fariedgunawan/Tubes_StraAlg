import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/index.css";

const InputJarak = () => {
  const navigate = useNavigate();
  return (
    <div className="body-jarak">
      <div className="flex flex-col items-center justify-center min-h-screen gap-[30px] sm:gap-[40px]">
        <h2 className="text-[30px] font-bold sm:text-[40px]">Masukan Jarak Lari</h2>
        <div className="flex items-center border-b-2 w-[200px]">
          <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="Jarak" className="bg-transparent focus:outline-none w-full text-[20px] sm:text-[30px]" />
          <h2 className="font-semibold text-[20px] sm:text-[30px]">Km</h2>
        </div>
        <button className="btn text-white hover:bg-white bg-[#415DBE] hover:text-[#415DBE] border-0 px-[40px] sm:px-[50px] sm:text-[20px]" onClick={() => navigate("/")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default InputJarak;
