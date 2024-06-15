import React from "react";
import "../../src/index.css";
import { useNavigate } from "react-router-dom";
import Typing from 'react-typing-effect';

const Landing = ({ addEntry }) => {
  const navigate = useNavigate();

  const handleShowData = () => {
    addEntry();
    navigate("/showdata");
  };

  return (
    <div className="body-landing px-[35px]">
      <div className="flex justify-center items-center min-h-screen flex-col text-center md:text-left md:items-start">
        <h2 className="font-bold text-[30px] md:text-[50px]">
          <Typing
            text={['Tubes Strategi Algoritma']}
            speed={100}
            eraseSpeed={50}
            eraseDelay={1000}
            typingDelay={500}
            cursorRenderer={cursor => <span>{cursor}</span>}
            displayTextRenderer={(text, i) => {
              return (
                <h2>
                  {text.split('').map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span key={key}>{char}</span>
                    );
                  })}
                </h2>
              );
            }}
          />
        </h2>
        <h2 className="text-[14px] w-[300px] mt-[10px] md:text-[20px] md:w-[600px]">
          Mengetahui Jarak dan Waktu Optimal Saat Lari Pagi dan Sore Menggunakan Algoritma <span className="font-bold">Greedy</span> dan <span className="font-bold">Brute Force</span>
        </h2>
        <div className="flex flex-col items-center md:flex-row md:gap-[70px]">
          <button className="btn bg-[#415DBE] text-white hover:bg-white hover:text-[#415DBE] mt-[20px] md:text-[16px] md:px-[30px] md:rounded-2xl" onClick={handleShowData}>Tampilkan Data Lari</button>
          <button className="btn bg-[#2216AB] text-white hover:bg-white hover:text-[#2216AB] mt-[20px] md:text-[16px] md:px-[30px] md:rounded-2xl" onClick={() => navigate("/inputwaktu")}>Input Data</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
