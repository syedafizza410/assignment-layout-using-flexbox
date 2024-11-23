import Image from "next/image";
import img from "../assets/cover.1d863e39.png";

const HeroSection = () => {
  return (
    <main className="flex flex-col sm:flex-row gap-4 md:gap-8 mx-4 sm:mx-6 md:mx-10 lg:mx-20 bg-offwhite">
      <div className="w-1/2 h-96 mt-3 ml-12">
        <h1 className="text-blue-900 mt-28 ml-96 text-7xl font-bold">
          Governor Sindh
        </h1>
        <h1 className="text-blue-900 ml-96 text-5xl">Kamran Khan Tessori</h1>
        <h1 className="ml-96 text-4xl font-bold text-blue-300 mt-7">
          Certified Cloud
        </h1>
        <h1 className="ml-96 text-4xl font-bold text-blue-300">
          Applied Generative AI
        </h1>
        <h1 className="ml-96 text-4xl font-bold text-blue-300">
          Engineer (GenEng)
        </h1>
        <h1 className="ml-96 mt-6 text-2xl font-extrabold text-blue-900">
          Earn up to $5,000 / month
        </h1>
        <h1 className="ml-96 mt-6 text-3xl font-extrabold text-blue-900">
          Now admissions are open in
        </h1>
        <h1 className="ml-96 text-3xl font-extrabold text-blue-900">
          Hyderabad
        </h1>
      </div>
      <div className="absolute mt-80 ml-96 flex items-center space-x-20">
        <button className="mt-64 bg-blue-900 text-white px-4 py-2 rounded w-44 h-12 ml-12">
          APPLY NOW
        </button>
        <div className="mt-64 flex flex-col items-center">
          <p className="font-extrabold text-blue-900 text-4xl">562,143</p>
          <p className="text-blue-900">Accepted Applications</p>
        </div>
      </div>
      <div className="mt-8">
        <Image src={img} alt="Cover image" width={900}/>
      </div>
    </main>
  );
};

export default HeroSection;
