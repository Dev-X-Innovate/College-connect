import React from "react";
import HeroBg from "../img/hero_bg.png";
import TimelineObserver from "react-timeline-animation";
import HomeCards from "./HomeCards";
// import SearchInputEl from "./SearchInput";




const HeroSection = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-screen"
      id="home"
    >
      <div className="flex-1 flex flex-col items-start justify-center gap-6 p-8">
        <p className="text-[2.5rem] text-center md:text-left lg:text-[3.5rem] font-bold tracking-wide text-headingColor md:w-[85%] md:leading-tight">
          <span className="text-lightPrimary text-[3rem] lg:text-[4rem]">
            Make the most of
          </span>{" "}
          Your Campus Space
        </p>

        <p className="text-center md:text-justify text-lighttextGray text-sm md:w-[85%] flex flex-wrap gap-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially...
        </p>

        {/*
                <div className="text-center md:w-[85%] flex flex-wrap gap-1 md:gap-3">
                    <input type="text" className="md:w-3/4 border px-2 py-3 rounded-lg " placeholder="Search Jobs"/>
                    <button className="bg-lightPrimary text-lightCard md:px-7 px-4 py-3   text-sm rounded-lg">Search</button>
                </div>
                */}
      </div>
      <div className="flex-1 flex items-center relative -mt-24 md:mt-0">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />
      </div>
    
      
    </section>
  );
};

export default HeroSection;
