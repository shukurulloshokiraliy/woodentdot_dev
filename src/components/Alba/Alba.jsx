import React from "react";
import AlbaImg from "../../assets/img/Alba.png";
import AlbaBrand from "../../assets/img/brandAlba.svg";

const Alba = () => {
  return (
    <section className="container flex  md:flex-row justify-between items-center mt-[100px] gap-[30px]">
      <div className="mt-8 md:mt-0">
        <img
          src={AlbaImg}
          alt="Cloe Modular"
          className="w-full max-w-[960px] h-auto object-contain"
        />
      </div>
      <div className="flex flex-col gap-[20px] items-start">
        <h1 className="text-[33px] text-black font-Roboto font-bold">
          Alba Collection
        </h1>
        <p className="text-[18px] font-Cardo text-black">
          Modular bedside table & shelf
        </p>
        <span className="text-[15px] text-black font-Cardo">From $272</span>
        <p className="text-[#525252] text-[18px] font-Cardo max-w-full md:max-w-[495px] leading-relaxed ">
          A versatile and modular piece with a sculptural touch that can be used
          as a wall shelf or as a bedside table with concealed storage.
        </p>
        <p className="text-[16px] text-[#54595F] font-Cardo">
          + 6 color finishes, infinite combinations
        </p>
        <button className="text-black text-[17px] font-Roboto mt-[50px] border-b border-black cursor-pointer">
          Shop now
        </button>
        <img src={AlbaBrand} alt="" />
      </div>
    </section>
  );
};

export default Alba;
