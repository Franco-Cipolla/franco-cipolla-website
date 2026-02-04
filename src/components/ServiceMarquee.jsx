import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import UseInView from "./UseInView";
import { FaTimes } from "react-icons/fa";

import FahrschuleOnepager from "../assets/FahrschuleOnepager.avif";
import DachdeckerOnepager from "../assets/DachdeckerOnepager.avif";

const projects = [
  { title: "Dachdecker Onepager", image: DachdeckerOnepager },
  { title: "Fahrschule Onepager", image: FahrschuleOnepager },
];

const ProjectMarquee = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const { ref, inView } = UseInView();

  const handleImageLoad = (title) => {
    setLoadedImages((prev) => ({ ...prev, [title]: true }));
  };

  return (
    <>
      {/* SECTION */}
      <section ref={ref} className="relative mt-24 mb-32 overflow-hidden">
        <p className="text-center text-lg text-[#000814]/80 max-w-xl mx-auto mb-10">
          Beispiele meines Lokalen-Anfragen-Systems –{" "}
          <span className="font-semibold text-[#001D3D]">
            klicken & komplette Website ansehen
          </span>
        </p>

        {inView && (
          <>
            {/* MOBILE – swipe */}
            <div className="md:hidden overflow-x-auto">
              <div className="flex gap-4 px-4 snap-x snap-mandatory">
                {projects.map((project) => (
                  <div
                    key={project.title}
                    onClick={() => setActiveProject(project)}
                    className="snap-start shrink-0 cursor-pointer"
                  >
                    <div className="w-[260px] h-[170px] overflow-hidden rounded-xl border border-black/10 bg-white shadow-md">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="w-full h-auto block"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DESKTOP – marquee */}
            <div className="hidden md:block">
              <Marquee speed={15} gradient={false} pauseOnHover autoFill>
                {projects.map((project) => (
                  <div
                    key={project.title}
                    onClick={() => setActiveProject(project)}
                    className="mx-6 cursor-pointer py-4 select-none"
                  >
                    <div className="w-[320px] h-[210px] overflow-hidden rounded-xl border border-black/10 bg-white shadow-md hover:shadow-lg transition">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="w-full h-auto block"
                      />
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </>
        )}
      </section>

      {/* POPUP */}
      {activeProject && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-4"
          onClick={() => setActiveProject(null)}
        >
          <div className="relative w-full max-w-[900px] max-h-[90vh] shadow-2xl">
            {/* FIXED CLOSE BUTTON */}
            <button
              onClick={() => setActiveProject(null)}
              className="fixed top-6 right-6 z-[10000] bg-black text-white p-3 rounded-full shadow-lg hover:scale-110 transition cursor-pointer"
            >
              <FaTimes size={18} />
            </button>

            {/* SCROLLABLE IMAGE */}
            <div className="bg-white rounded-2xl max-h-[90vh] overflow-y-auto">
              {!loadedImages[activeProject.title] && (
                <div className="w-full h-[80vh] bg-gray-200 animate-pulse rounded-t-2xl" />
              )}
              <img
                src={activeProject.image}
                alt={activeProject.title}
                draggable={false}
                className={`w-full max-w-[900px] h-auto block rounded-t-2xl ${
                  loadedImages[activeProject.title] ? "block" : "hidden"
                }`}
                onLoad={() => handleImageLoad(activeProject.title)}
                sizes="(max-width: 768px) 100vw, 900px"
                style={{ imageRendering: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectMarquee;
