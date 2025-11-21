"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  // Duplicate projects exactly 2x for seamless infinite loop (0% to -50% translation)
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="py-20 relative overflow-hidden" id="projects">
      <h1 className="heading text-black text-center mb-10">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      {/* Infinite Loop Container - Pure CSS Animation */}
      <div className="marquee-container relative w-full" style={{ "--marquee-speed": "30s" } as React.CSSProperties}>
        <div className="marquee flex gap-10 md:gap-12 lg:gap-14">
          {duplicatedProjects.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[75vw] sm:w-[50vw] md:w-[33vw] lg:w-[25vw]"
            >
              <PinContainer title={item.title} href={item.link}>
                <div className="relative flex flex-col justify-between bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-visible">
                  
                  {/* Image Section */}
                  <div className="relative flex items-center justify-center w-full h-[200px] md:h-[220px] bg-[#13162D] overflow-hidden rounded-t-3xl">
                    <div className="absolute inset-0">
                      <img
                        src="/bg.png"
                        alt="bg"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="z-10 absolute bottom-0 max-h-[230px] object-contain"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col justify-between min-h-[180px] md:min-h-[200px] bg-white/95 backdrop-blur-sm">
                    <h1 className="font-semibold text-lg md:text-xl text-gray-900 mb-2 line-clamp-1 tracking-tight">
                      {item.title}
                    </h1>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-2 mb-4">
                      {item.des}
                    </p>

                    <div className="flex items-center justify-between mt-6 pt-2 border-t border-gray-100">
                      {/* Tech Icons */}
                      <div className="flex items-center">
                        {item.iconLists.map((icon, idx) => (
                          <div
                            key={idx}
                            className="border border-gray-200 rounded-full bg-black w-8 h-8 flex justify-center items-center"
                            style={{
                              transform: `translateX(-${4 * idx}px)`,
                            }}
                          >
                            <img src={icon} alt="icon" className="p-2" />
                          </div>
                        ))}
                      </div>

                      {/* Live Site Link */}
                      <div className="flex items-center text-purple-600 text-sm font-medium">
                        <span>Check Live Site</span>
                        <FaLocationArrow className="ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
