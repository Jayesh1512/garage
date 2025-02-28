import Navbar from "@/components/Navbar/Navbar";
import { DM_Sans } from "next/font/google";
import React from "react";

const dm = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"]
});

const page = () => {
  return (
    <main className="hero min-h-screen space-y-10">
      <Navbar />

      {/* /hero */}

      <div className="lg:px-8 px-4">
        <div className="relative border-b-4 border-r-4 border-l-4 justify-between flex p-10">
          {/* Flex */}
          <div className="absolute -left-1 top-0 px-10 border-l-4 border-[#D6313E]">
            <p className={`text-white text-7xl md:max-w-lg lg:max-w-xl ${dm.className}`}>
              Premium Two Wheeler services at{" "}
              <span className="text-[#D6313E]">doorstep</span>
            </p>
          </div>
          <div></div>
          {/* Baju chi image */}
          <div className="w-1/3 mr-20">
            <img src="/Hero/illus-1.png" className="" />
          </div>
        </div>
      </div>

      <div className="lg:px-8 px-4 relative">
        <img src="/Hero/stats.png" className="" />
      </div>
    </main>
  );
};

export default page;
