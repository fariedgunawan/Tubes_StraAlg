import React from "react";
import "../../src/index.css";
import { useNavigate } from "react-router-dom";

const Landing = ({ addEntry }) => { // Menerima addEntry sebagai prop
  const navigate = useNavigate();

  // Fungsi untuk menavigasi ke halaman ShowData dan menambahkan entri
  const handleShowData = () => {
    addEntry(); // Memanggil fungsi addEntry
    navigate("/showdata"); // Navigasi ke halaman ShowData
  };

  return (
    <div className="body-landing px-[35px]">
      <div className="flex justify-center items-center min-h-screen flex-col text-center md:text-left md:items-start">
        <h2 className="font-bold text-[30px] md:text-[50px]">Tubes Strategi Algoritma</h2>
        <h2 className="text-[14px] w-[300px] mt-[10px] md:text-[20px] md:w-[600px]">
          Mengetahui Jarak dan Waktu Optimal Saat Lari Pagi dan Sore Menggunakan Algoritma <span className="font-bold">Greedy</span> dan <span className="font-bold">Brute Force</span>
        </h2>
        <div className="flex flex-col items-center md:flex-row md:gap-[70px]">
          <button className="btn bg-[#415DBE] text-white hover:bg-white hover:text-[#415DBE] mt-[20px] md:text-[16px] md:px-[30px] md:rounded-2xl" onClick={handleShowData}>Tampilkan Data Lari</button>
          {/* Tombol input data masih menuju ke /inputwaktu */}
          <button className="btn bg-[#2216AB] text-white hover:bg-white hover:text-[#2216AB] mt-[20px] md:text-[16px] md:px-[30px] md:rounded-2xl" onClick={() => navigate("/inputwaktu")}>Input Data</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
