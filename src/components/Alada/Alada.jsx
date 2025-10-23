import AladaImg from "../../assets/img/Alada.png";
const Alada = () => {
  return (
    <section className="container flex  md:flex-row justify-between items-center mt-[100px] gap-[30px]">
      <div className="flex flex-col gap-[20px] items-end">
        <p className="text-[#BC1414] text-[14px] font-Cardo">New Favorite!</p>
        <h1 className="text-[33px] text-black font-Roboto font-bold">Alada</h1>
        <p className="text-[18px] font-Cardo text-black ">
          Floating folding desk
        </p>
        <span className="text-[15px] text-black font-Cardo">From $534</span>
        <p className="text-[#525252] text-[18px] font-Cardo max-w-full md:max-w-[495px] leading-relaxed text-right">
          A timeless and discreet folding desk that seamlessly transforms into a
          decorative shelf in seconds.
        </p>
        <p className="text-[#54595F] text-[16px] font-Cardo ">
          + 4 color finishes
        </p>
        <button className="text-black text-[17px] font-Roboto mt-[50px] border-b border-black cursor-pointer">
          Shop now
        </button>
      </div>
      <div className="mt-8 md:mt-0">
        <img
          src={AladaImg}
          alt="Cloe Modular"
          className="w-full max-w-[960px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Alada;
