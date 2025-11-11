"use client";

import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <section className="py-20 relative overflow-visible" id="projects">
      <h1 className="heading text-black text-center mb-10">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      {/* Horizontal Scroll Carousel */}
      <motion.div
        className="flex overflow-x-auto overflow-y-visible gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 snap-x snap-mandatory scrollbar-hide cursor-grab pb-10"
        whileTap={{ cursor: "grabbing" }}
        style={{ overscrollBehaviorX: "contain" }}
      >
        {projects.map((item) => (
          <motion.div
            key={item.id}
            className="snap-center flex-shrink-0 w-[80vw] sm:w-[55vw] md:w-[35vw] lg:w-[25vw] relative overflow-visible"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="relative overflow-visible">
              <PinContainer
                title={item.title}
                href={item.link}
              >
                {/* Card */}
                <div className="relative flex flex-col justify-between bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-visible">
                  
                  {/* Image Section */}
                  <div className="relative flex items-center justify-center w-full h-[200px] md:h-[220px] bg-[#13162D] overflow-visible rounded-t-3xl">
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

                    <p
                      className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-2 mb-4"
                    >
                      {item.des}
                    </p>

                    <div className="flex items-center justify-between mt-6 pt-2 border-t border-gray-100">
                      {/* Tech Icons */}
                      <div className="flex items-center">
                        {item.iconLists.map((icon, index) => (
                          <div
                            key={index}
                            className="border border-gray-200 rounded-full bg-black w-8 h-8 flex justify-center items-center"
                            style={{
                              transform: `translateX(-${4 * index}px)`,
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default RecentProjects;
