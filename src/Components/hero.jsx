import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div className="text-white border border-blue-600 border-8">
      <div className="mt-[-96px] w-full h-screen mx-auto  text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          SHOWING WITH DATA ANALYTICS
        </p>
        <h1 className=" text-4xl md:text-7xl sm:text-6xl font-bold md:py-6 ">
          GROW WITH DATA
        </h1>
        <div className="md:text-5xl sm:text-4xl text-xl font-bold flex justify-center  pb-4">
          <p>Fast, flexible financing for </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-1 sm:pl-3 md:pl-4"
            strings={["BTC", "ETH", "LTC"]}
            typeSpeed={100}
            backSpeed={110}
            loop
          />
        </div>
        <div>
          <p className="text-xl md:text-2xl font-bold text-gray-500">Monitor your data analystics to increase revenue for BTB, BTC & SAAS platforms.</p>
        </div>
        <button className="p-4 bg-[#00df9a] md:w-[200px] w-[170px] rounded-md font-medium my-6 mx-auto p-2 text-black cursor-pointer  hover:bg-[#00c27a] duration-300">
          Get Started
        </button>
        
      </div>
    </div>
  );
};

export default Hero;
