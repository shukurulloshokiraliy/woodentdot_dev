import CloeImg from "../../assets/img/CloeImg.png";
const Cloe = () => {
  return (
    <section className="container flex  md:flex-row justify-between items-center mt-[100px] gap-[30px]">
      <div className="flex flex-col gap-[20px] items-end">
        <h1 className="text-[33px] text-black font-Roboto font-bold">Cloe</h1>
        <p className="text-[18px] font-Cardo text-black">
          Modular Storage System
        </p>
        <span className="text-[15px] text-black font-Cardo">From $1.176</span>
        <p className="text-[#525252] text-[18px] font-Cardo max-w-full md:max-w-[495px] leading-relaxed text-right">
          An expansive way to furnish your space exactly how you need it and
          like it. Transform it in exactly what you need like a bookshelf, tv
          stand or show rack, you pick.
        </p>
        <button className="text-black text-[17px] font-Roboto mt-[50px] border-b border-black cursor-pointer">
          Shop now
        </button>
      </div>
      <div className="mt-8 md:mt-0">
        <img
          src={CloeImg}
          alt="Cloe Modular"
          className="w-full max-w-[960px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Cloe;
