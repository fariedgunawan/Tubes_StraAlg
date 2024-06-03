import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/index.css";

const InputTempuh = () => {
  const navigate = useNavigate();
  return (
    <div className="body-tempuh">
      <div className="flex flex-col items-center justify-center min-h-screen gap-[30px] sm:gap-[40px]">
        <h2 className="text-[25px] font-bold sm:text-[40px]">Masukan Waktu Tempuh</h2>
        <div className="flex items-center border-b-2 w-[200px]">
          <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Waktu" className="bg-transparent focus:outline-none w-full text-[20px] sm:text-[30px]" />
          <h2 className="font-semibold text-[20px] sm:text-[30px]">Menit</h2>
        </div>
        <button className="btn text-white hover:bg-white bg-[#41BE46] hover:text-[#41BE46] border-0 px-[40px] sm:px-[50px] sm:text-[20px]" onClick={() => document.getElementById("my_modal_5").showModal()}>
          Submit
        </button>
        <dialog id="my_modal_5" className="modal modal-center sm:modal-middle">
          <div className="modal-box bg-transparent backdrop-blur-xl backdrop-filter">
            <h3 className="font-bold text-lg">Halo!</h3>
            <p className="py-4">Apakah Kamu Yakin Telah Input Data Dengan Sesuai? Klik OK untuk Submit</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn bg-[#41BE46] text-white" onClick={() => navigate("/")}>
                  Ok
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default InputTempuh;
