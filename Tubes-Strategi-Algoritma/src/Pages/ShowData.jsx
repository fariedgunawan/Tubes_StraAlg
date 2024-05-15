import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ShowData = ({ data }) => {
  const navigate = useNavigate();
  console.log("Data Array:", data);
  return (
    <div className="px-[35px]">
      <div>
        <div className="header flex justify-between pt-[30px] items-center">
          <FaAngleLeft className="text-white text-[25px] hover:text-[30px] md:text-[30px]" onClick={() => navigate("/")} />
          <h2 className="text-[30px] font-bold md:text-[35px]">Data Lari</h2>
        </div>
        <div className="mt-[20px]">
          <button className="btn bg-[#2216AB] text-white px-[30px] hover:text-[#2216AB] hover:bg-white md:px-[55px]" onClick={() => navigate("/result")}>
            Hitung
          </button>
        </div>
        <div className="mt-[30px]">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center justify-between border-2 px-[10px] py-[10px] rounded-md md:rounded-2xl mt-[30px] md:px-[30px]">
              <h2 className="md:text-[25px] font-bold">{entry.date}</h2>
              <h2 className="md:text-[25px] font-bold">{entry.time}</h2>
              <h2 className="md:text-[25px] font-bold">{entry.distance}</h2>
              <h2 className="md:text-[25px] font-bold">{entry.duration}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowData;
