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
  const [previewLoaded, setPreviewLoaded] = useState({});
  const [imageErrors, setImageErrors] = useState({});
  const { ref, inView } = UseInView();

  const handleImageLoad = (title) => {
    setLoadedImages((prev) => ({ ...prev, [title]: true }));
  };

  const handlePreviewLoad = (title) => {
    setPreviewLoaded((prev) => ({ ...prev, [title]: true }));
  };

  const handleImageError = (title) => {
    setImageErrors((prev) => ({ ...prev, [title]: true }));
    console.error(`Fehler beim Laden: ${title}`);
  };

  return (
    <>
      {/* SECTION */}
      <section ref={ref} className="relative mt-24 mb-32 overflow-hidden">
        <p className="text-center text-lg text-[#000814]/80 max-w-xl mx-auto mb-10">
          So sieht eine Website aus, die auf messbare Anfragen ausgerichtet ist –{" "}
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
                    onClick={(e) => {
                      e.preventDefault();
                      if (previewLoaded[project.title] && !imageErrors[project.title]) {
                        setActiveProject(project);
                      }
                    }}
                    className={`snap-start shrink-0 ${
                      previewLoaded[project.title] && !imageErrors[project.title]
                        ? "cursor-pointer"
                        : "cursor-wait"
                    }`}
                  >
                    <div className="w-[260px] h-[170px] overflow-hidden rounded-xl border border-black/10 bg-gray-100 shadow-md relative">
                      {!previewLoaded[project.title] && !imageErrors[project.title] && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                          <div className="w-8 h-8 border-3 border-gray-400 border-t-gray-600 rounded-full animate-spin" />
                        </div>
                      )}
                      {imageErrors[project.title] && (
                        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500 text-sm px-4 text-center">
                          Bild konnte nicht geladen werden
                        </div>
                      )}
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="eager"
                        decoding="async"
                        draggable={false}
                        className={`w-full h-full object-cover block ${
                          previewLoaded[project.title] ? "opacity-100" : "opacity-0"
                        }`}
                        onLoad={() => handlePreviewLoad(project.title)}
                        onError={() => handleImageError(project.title)}
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
                    onClick={(e) => {
                      e.preventDefault();
                      if (previewLoaded[project.title] && !imageErrors[project.title]) {
                        setActiveProject(project);
                      }
                    }}
                    className={`mx-6 py-4 select-none ${
                      previewLoaded[project.title] && !imageErrors[project.title]
                        ? "cursor-pointer"
                        : "cursor-wait"
                    }`}
                  >
                    <div className="w-[320px] h-[210px] overflow-hidden rounded-xl border border-black/10 bg-gray-100 shadow-md hover:shadow-lg transition relative">
                      {!previewLoaded[project.title] && !imageErrors[project.title] && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                          <div className="w-10 h-10 border-4 border-gray-400 border-t-gray-600 rounded-full animate-spin" />
                        </div>
                      )}
                      {imageErrors[project.title] && (
                        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500">
                          Bild konnte nicht geladen werden
                        </div>
                      )}
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="eager"
                        decoding="async"
                        draggable={false}
                        className={`w-full h-full object-cover block transition-opacity duration-300 ${
                          previewLoaded[project.title] ? "opacity-100" : "opacity-0"
                        }`}
                        onLoad={() => handlePreviewLoad(project.title)}
                        onError={() => handleImageError(project.title)}
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
          <div
            className="relative w-full max-w-[900px] max-h-[90vh] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
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
                <div className="w-full h-[80vh] bg-gray-200 animate-pulse rounded-t-2xl flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-gray-400 border-t-gray-600 rounded-full animate-spin" />
                </div>
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
