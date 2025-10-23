import woodentnot from "../../assets/img/Woodentnot.svg";

const Header = () => {
  return (
    <header className="relative w-full">
      <div className="fixed top-0 left-0 w-full bg-white/50 backdrop-blur-md shadow-sm z-50">
        <nav className="container flex items-center justify-between py-4">
          <ul className="hidden md:flex items-center gap-8">
            {["Wooden Furniture", "About", "Stories"].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="font-Cardo text-[16px] text-gray-800 hover:text-gray-600 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center">
            <img
              src={woodentnot}
              alt="Woodentnot Logo"
              className="w-[150px] sm:w-[180px] md:w-[200px] object-contain"
            />
          </div>
        </nav>
      </div>

      <section className="relative bg-[url('/imgs/banner.png')] bg-cover bg-center min-h-[700px] flex flex-col items-center justify-center mt-[70px]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container flex flex-col items-center text-center text-white gap-5 px-4">
          <p className="font-Roboto font-bold leading-snug max-w-[700px] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]">
            Furniture designed to live in harmony, creating distinctive and
            timeless spaces
          </p>

          <button
            className="mt-4 w-[180px] sm:w-[200px] md:w-[220px] h-[45px] 
            border border-white rounded-md font-Cardo 
            text-[16px] sm:text-[18px] hover:bg-white hover:text-black 
            transition-colors duration-300 cursor-pointer"
          >
            Discover now
          </button>
        </div>
        <div className="max-w-[1200px] mx-auto justify-center items-center">
          <button
            className="absolute bottom-6 left-[70px]
          w-[280px] sm:w-[324px] h-[45px] sm:h-[50px] 
          bg-black text-white text-[14px] sm:text-[15px] font-Cardo 
          flex items-center justify-center hover:bg-gray-900 transition-colors duration-300 cursor-pointer"
          >
            Do you know what is your decor style?
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
