import React from "react";
import { imgs } from "../../api/api";
import { shopItems } from "../../api/api";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 mt-[50px]">
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-start sm:items-center gap-4">
        {shopItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 sm:gap-5 w-full sm:w-auto"
          >
            <img src={item.img} alt={item.title} className="  object-cover" />
            <p className="text-black text-[12px] sm:text-[13px] font-Roboto">
              {item.title}
            </p>
          </div>
        ))}
        <div className="mt-2 sm:mt-0">
          <p className="text-black text-[12px] sm:text-[13px] font-Roboto font-normal">
            4.8 Star Reviews
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
        {imgs.map((img) => (
          <img
            key={img.id}
            src={img.img}
            alt=""
            className="w-full h-auto object-cover "
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
