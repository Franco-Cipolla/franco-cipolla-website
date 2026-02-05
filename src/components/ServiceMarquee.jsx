import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

import FahrschulePreview from "../assets/FahrschulePreview.avif"; // kleine Preview
import DachdeckerPreview from "../assets/DachdeckerPreview.avif"; // kleine Preview

import FahrschuleFull from "../assets/FahrschuleOnepager.avif"; // Fullsize für Popup
import DachdeckerFull from "../assets/DachdeckerOnepager.avif";

const projects = [
  {
    title: "Dachdecker Onepager",
    preview: DachdeckerPreview,
    full: DachdeckerFull,
  },
  {
    title: "Fahrschule Onepager",
    preview: FahrschulePreview,
    full: FahrschuleFull,
  },
];

const ProjectCarousel = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [previewLoaded, setPreviewLoaded] = useState({});
  const [fullLoaded, setFullLoaded] = useState({});
  const [imageErrors, setImageErrors] = useState({});

  const handlePreviewLoad = (title) => {
    setPreviewLoaded((prev) => ({ ...prev, [title]: true }));
  };

  const handleFullLoad = (title) => {
    setFullLoaded((prev) => ({ ...prev, [title]: true }));
  };

  const handleError = (title) => {
    setImageErrors((prev) => ({ ...prev, [title]: true }));
    console.error(`Fehler beim Laden: ${title}`);
  };

  return (
    <>
      {/* SECTION */}
      <section className="relative mt-24 mb-32 px-5 md:px-0">
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            So könnte Ihr Lokales-Anfragen-System aussehen
          </h2>
          <p className="text-lg text-[#000814] max-w-2xl mx-auto">
             Beispiele von Websites, die auf Anfragen ausgerichtet sind. Sehen Sie, wie Ihr System aufgebaut sein könnte – <strong>klicken & komplette Website ansehen.</strong>
          </p>
          </div>


        {/* MOBILE */}
        <div className="md:hidden overflow-x-auto">
          <div className="flex gap-4 snap-x snap-mandatory px-4">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`snap-start shrink-0 ${
                  previewLoaded[project.title] && !imageErrors[project.title]
                    ? "cursor-pointer"
                    : "cursor-wait"
                }`}
                onClick={() => {
                  if (previewLoaded[project.title] && !imageErrors[project.title]) {
                    setActiveProject(project);
                  }
                }}
              >
                <div className="w-[260px] h-[170px] relative rounded-xl border border-black/10 bg-gray-100 shadow-md overflow-hidden">
                  {!previewLoaded[project.title] && !imageErrors[project.title] && (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center animate-pulse">
                      <div className="w-8 h-8 border-3 border-gray-400 border-t-gray-600 rounded-full animate-spin" />
                    </div>
                  )}
                  {imageErrors[project.title] && (
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500 text-sm text-center px-2">
                      Bild konnte nicht geladen werden
                    </div>
                  )}
                  <img
                    src={project.preview}
                    alt={project.title}
                    className={`w-full h-full object-cover block transition-opacity duration-300 ${
                      previewLoaded[project.title] ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => handlePreviewLoad(project.title)}
                    onError={() => handleError(project.title)}
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex justify-center gap-6 overflow-x-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`relative w-[320px] h-[210px] ${
                previewLoaded[project.title] && !imageErrors[project.title]
                  ? "cursor-pointer"
                  : "cursor-wait"
              }`}
              onClick={() => {
                if (previewLoaded[project.title] && !imageErrors[project.title]) {
                  setActiveProject(project);
                }
              }}
            >
              <div className="w-full h-full overflow-hidden rounded-xl border border-black/10 bg-gray-100 shadow-md hover:shadow-lg relative">
                {!previewLoaded[project.title] && !imageErrors[project.title] && (
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center animate-pulse">
                    <div className="w-10 h-10 border-4 border-gray-400 border-t-gray-600 rounded-full animate-spin" />
                  </div>
                )}
                {imageErrors[project.title] && (
                  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500 text-center">
                    Bild konnte nicht geladen werden
                  </div>
                )}
                <img
                  src={project.preview}
                  alt={project.title}
                  className={`w-full h-full object-cover object-top transition-opacity duration-300 ${
                    previewLoaded[project.title] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => handlePreviewLoad(project.title)}
                  onError={() => handleError(project.title)}
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
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

            {/* FULLSIZE IMAGE */}
            <div className="bg-white rounded-2xl max-h-[90vh] overflow-y-auto">
              {!fullLoaded[activeProject.title] && (
                <div className="w-full h-[80vh] flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-gray-400 border-t-gray-600 rounded-full animate-spin" />
                </div>
              )}
              <img
                src={activeProject.full}
                alt={activeProject.title}
                draggable={false}
                className={`w-full max-w-[900px] h-auto block rounded-t-2xl ${
                  fullLoaded[activeProject.title] ? "block" : "hidden"
                }`}
                onLoad={() => handleFullLoad(activeProject.title)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCarousel;
