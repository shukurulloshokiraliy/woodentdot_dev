import batea from "../../assets/img/batea.png";
const Bate = () => {
  return (
    <section className="container flex  md:flex-row justify-between items-center mt-[100px] gap-[30px]">
      <div className="flex flex-col gap-[20px] items-end">
        <h1 className="text-[33px] text-black font-Roboto font-bold">
          Batea Collection
        </h1>
        <p className="text-[18px] font-Cardo text-black ">
          Tables with storage & tray tables
        </p>
        <span className="text-[15px] text-black font-Cardo">From $272</span>
        <p className="text-[#525252] text-[18px] font-Cardo max-w-full md:max-w-[495px] leading-relaxed text-right">
          Composed of clean and rounded lines, the Batea Collection includes
          unique tables with extra functionality like a removable tray, and
          hidden storage.
        </p>
        <p className="text-[#54595F] text-[16px] font-Cardo ">
          + 3 sizes, + 6 color finishes
        </p>
        <button className="text-black text-[17px] font-Roboto mt-[50px] border-b border-black cursor-pointer">
          Shop now
        </button>
      </div>
      <div className="mt-8 md:mt-0">
        <img
          src={batea}
          alt="Cloe Modular"
          className="w-full max-w-[960px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Bate;
