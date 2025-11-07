"use client";

import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="projects">
      <h1 className="heading text-black text-center mb-10">
        A small selection of{" "}
        <span className="text-purple-600">recent projects</span>
      </h1>

      {/* Horizontal Carousel */}
      <motion.div
        className="flex overflow-x-auto gap-10 px-10 snap-x snap-mandatory scrollbar-hide cursor-grab"
        whileTap={{ cursor: "grabbing" }}
      >
        {projects.map((item) => (
          <motion.div
            key={item.id}
            className="snap-center flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[28vw]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Card */}
            <div className="relative bg-white shadow-lg rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 ease-in-out">
              {/* Image Section */}
              <div className="relative w-full h-[250px] flex justify-center items-center bg-[#13162D]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-contain max-h-[250px] z-10"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="font-bold text-xl text-black mb-2 line-clamp-1">
                  {item.title}
                </h2>

                <p
                  className="text-gray-500 text-sm line-clamp-2 mb-4"
                  style={{ color: "#6b7280" }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between">
                  {/* Tech Icons */}
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-full bg-black w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="tech" className="p-2" />
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default RecentProjects;
