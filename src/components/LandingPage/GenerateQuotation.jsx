import React from "react";
import rightArrow from "/assets/quotation-arrow.png";
import twoWheeler from "/assets/two-wheeler.png";
import trucks from "/assets/trucks.png";
import packersMovers from "/assets/packers-movers.png";
import intercity from "/assets/intercity.png";
import { NavLink } from "react-router-dom";
import SelectCityDropdown from "../SelectCityDropdown";
import HeroLandingPage from "/assets/heroLandingPage.png";

const QuotationConfig = [
  {
    id: 1,
    title: "Two Wheeler ",
    imgUrl: twoWheeler,
  },
  {
    id: 2,
    title: "Trucks",
    imgUrl: trucks,
  },
  {
    id: 3,
    title: "Packers & Movers",
    imgUrl: packersMovers,
  },
  {
    id: 4,
    title: "Storage Spaces",
    imgUrl: intercity,
  },
];

const GenerateQuotation = () => {
  return (
    <div className="sm:h-[130svh]">
      <section className="hero bg-white w-[100svw] h-[70svh]">
        {/* ugly way to add height to element, added cause absolute section below is overflowing above content */}
        <div className="relative">
          <img
            src={HeroLandingPage}
            className="h-[90svh] w-[100%] object-cover object-center inset-0"
            alt="Hero JK Bros"
          />
        </div>
      </section>

      <duv className="flex w-[100%] justify-center">
        <div
          className="
                            bg-white md:min-w-[70%] md:max-w-[70%] w-[100%] z-10
                            rounded-3xl 
                            shadow-[0_0_100px_0_rgba(0,0,0,0.1)] shadow-[#4871FF]   
                            drop-shadow-4xl p-6
                        "
        >
          <SelectCityDropdown />
          <div className="grid grid-cols-12 lg:grid-cols-10 gap-2 px-2">
            {QuotationConfig.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-span-6 sm:col-span-3 min-w-[8rem] lg:col-span-2 border-2 border-[#DBE3FF] h-[240px] p-2 rounded-3xl bg-[#F5F7FE] hover:bg-primary-50 transition cursor-pointer"
                >
                  <div className="card-image border-2 border-[#DBE3FF] h-[80%] rounded-3xl">
                    <img
                      src={item.imgUrl}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div className="h-[20%] m-auto items-center flex justify-center">
                    <p className="text-primary-400 font-semibold text-sm">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="md:block hidden lg:col-span-2 col-span-12">
              <div className="flex w-full justify-center md-block">
                <NavLink
                  to="/home"
                  className="group bg-primary rounded-3xl md:p-1 hover:bg-primary-200 tranition w-full"
                >
                  <div className="min-w-[10rem] max-h-max relative p-6 flex lg:flex-col justify-between">
                    <h1 className="w-[7rem] text-xl font-semibold text-white tracking-wide">
                      Get Quotation
                    </h1>
                    <br />
                    <h1 className="w-[7rem] text-2xl font-thin text-[#48aeff] tracking-wide group-hover:text-primary-400 transition">
                      <span className="text-white">In just 2 mins</span>
                    </h1>
                    <img src={rightArrow} className="mt-[1rem] w-[4rem] " />
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </duv>
    </div>
  );
};

export default GenerateQuotation;
