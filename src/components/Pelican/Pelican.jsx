import React from "react";
import PelicanImg from "../../assets/img/Pelican.png";
const Pelican = () => {
  return (
    <section className="container flex  md:flex-row justify-between items-center mt-[100px] gap-[30px]">
      <div className="mt-8 md:mt-0">
        <img
          src={PelicanImg}
          alt="Cloe Modular"
          className="w-full max-w-[960px] h-auto object-contain"
        />
      </div>
      <div className="flex flex-col gap-[20px] items-start">
        <h1 className="text-[33px] text-black font-Roboto font-bold">
          Pelican
        </h1>
        <p className="text-[18px] font-Cardo text-black">
          Shelves with hidden hooks
        </p>
        <span className="text-[15px] text-black font-Cardo">From $89</span>
        <p className="text-[#525252] text-[18px] font-Cardo max-w-full md:max-w-[495px] leading-relaxed ">
          Store or exhibit your favorite objects in the entrance hall, modern
          hallways, living rooms and bedrooms with a decorative and minimalist
          touch.
        </p>
        <p className="text-[16px] text-[#54595F] font-Cardo">
          + 3 sizes, + 5 color finishes
        </p>
        <button className="text-black text-[17px] font-Roboto mt-[50px] border-b border-black cursor-pointer">
          Shop now
        </button>
      </div>
    </section>
  );
};

export default Pelican;
