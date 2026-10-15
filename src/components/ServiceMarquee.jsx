import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

import BackgroundVideo from "../assets/bg.mp4";
import FahrschulePreview from "../assets/FahrschulePreview.avif";
import HandwerkerPreview from "../assets/HandwerkerOnepagerHero.png";

import FahrschuleFull from "../assets/FahrschuleOnepager.avif";
import HandwerkerFull from "../assets/HandwerkerOnepager.avif";

const projects = [
  {
    title: "Handwerker Onepager",
    preview: HandwerkerPreview,
    full: HandwerkerFull,
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
    setImageErrors((prev) => ({ ...prev, [title]: false }));
  };

  const handleFullLoad = (title) => {
    setFullLoaded((prev) => ({ ...prev, [title]: true }));
  };

  const handleError = (title) => {
    setImageErrors((prev) => ({ ...prev, [title]: true }));
    console.error(`Fehler beim Laden: ${title}`);
  };

  // ESC schließt das Projekt-Popup.
  useEffect(() => {
    if (!activeProject) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const openProject = (project) => {
    if (previewLoaded[project.title] && !imageErrors[project.title]) {
      setActiveProject(project);
    }
  };

  const renderProjectCard = (project, mobile = false) => {
    const loaded = previewLoaded[project.title];
    const hasError = imageErrors[project.title];

    return (
      <button
        key={project.title}
        type="button"
        onClick={() => openProject(project)}
        disabled={!loaded || hasError}
        aria-label={`${project.title} vollständig ansehen`}
        className={`
          group relative shrink-0 overflow-hidden rounded-2xl
          border border-white/15 bg-white/5 text-left
          shadow-xl transition-all duration-300
          hover:border-sky-300/60 hover:shadow-2xl
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-sky-300
          disabled:cursor-wait
          ${
            mobile
              ? "w-[min(78vw,320px)] aspect-[320/210] snap-center"
              : "w-full max-w-[380px] aspect-[320/210]"
          }
        `}
      >
        {!loaded && !hasError && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/10">
            <div className="h-9 w-9 animate-spin rounded-full border-4 border-white/30 border-t-white" />
          </div>
        )}

        {hasError && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#001D3D] px-4 text-center text-sm text-white/75">
            Vorschau konnte nicht geladen werden.
          </div>
        )}

        <img
          src={project.preview}
          alt={`Vorschau: ${project.title}`}
          loading="lazy"
          decoding="async"
          draggable={false}
          onLoad={() => handlePreviewLoad(project.title)}
          onError={() => handleError(project.title)}
          className={`
            absolute inset-0 h-full w-full object-cover object-top
            transition duration-500 group-hover:scale-[1.03]
            ${loaded ? "opacity-100" : "opacity-0"}
          `}
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#000814]/95 via-[#000814]/55 to-transparent p-4 pt-12 sm:p-5 sm:pt-14">
          <p className="text-base font-semibold text-white sm:text-lg">
            {project.title}
          </p>

          <p className="mt-1 text-xs text-white/70 sm:text-sm">
            Klicken, um das Projekt anzusehen
          </p>
        </div>
      </button>
    );
  };

  return (
    <>
      {/* FULLSCREEN VIDEO SECTION */}
      <section
        aria-labelledby="projects-heading"
        className="
          relative isolate flex min-h-screen w-full
          items-center justify-center overflow-hidden
          bg-[#001D3D]
          px-4 py-20
          sm:px-6 sm:py-24
          lg:px-10 lg:py-28
        "
      >
        {/* VIDEO BACKGROUND */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            tabIndex={-1}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={BackgroundVideo} type="video/mp4" />
          </video>
        </div>

        {/* SOFT BLUR AT TOP */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-x-0 top-0 z-0
            h-24 sm:h-32 md:h-40
            backdrop-blur-sm
            [mask-image:linear-gradient(to_bottom,black,transparent)]
          "
        />

        {/* SOFT BLUR AT BOTTOM */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-x-0 bottom-0 z-0
            h-24 sm:h-32 md:h-40
            backdrop-blur-sm
            [mask-image:linear-gradient(to_top,black,transparent)]
          "
        />

        {/* LIGHT OVERLAY: VIDEO REMAINS VISIBLE */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[#001D3D]/20"
        />

        {/* SUBTLE GRADIENT FOR TEXT CONTRAST */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 z-0
            bg-gradient-to-b
            from-[#001D3D]/25
            via-transparent
            to-[#000814]/45
          "
        />

        {/* TOP FADE: WEBSITE BACKGROUND -> VIDEO */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-x-0 top-0 z-0
            h-32 sm:h-44 md:h-56 lg:h-64
            bg-gradient-to-b
            from-[#001D3D]
            via-[#001D3D]/70
            to-transparent
          "
        />

        {/* BOTTOM FADE: VIDEO -> WEBSITE BACKGROUND */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-x-0 bottom-0 z-0
            h-32 sm:h-44 md:h-56 lg:h-64
            bg-gradient-to-t
            from-[#001D3D]
            via-[#001D3D]/70
            to-transparent
          "
        />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          {/* HEADING */}
          <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16">
            <h2
              id="projects-heading"
              className="
                text-balance text-3xl font-bold leading-tight
                tracking-tight text-white
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              So könnte Ihre Website aussehen
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
              Beispiele von Websites, die auf Anfragen ausgerichtet sind.
              Entdecken Sie, wie durchdachtes Design Vertrauen schafft und
              Besucher zur Kontaktaufnahme führt.
            </p>

            <p className="mt-4 text-sm font-medium text-white sm:text-base">
              Klicken & komplette Website ansehen
            </p>
          </header>

          {/* MOBILE: HORIZONTAL SNAP CAROUSEL */}
          <div className="md:hidden">
            <div
              className="
                -mx-4 flex snap-x snap-mandatory gap-4
                overflow-x-auto overscroll-x-contain
                px-[max(16px,calc((100vw-320px)/2))]
                pb-5 pt-2
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              {projects.map((project) => renderProjectCard(project, true))}
            </div>

            <p className="mt-2 text-center text-xs text-white/60">
              Wische, um weitere Projekte zu entdecken
            </p>
          </div>

          {/* TABLET AND DESKTOP */}
          <div className="mx-auto hidden w-full max-w-4xl grid-cols-2 items-start justify-items-center gap-5 md:grid md:gap-6 lg:gap-8">
            {projects.map((project) => renderProjectCard(project))}
          </div>
        </div>
      </section>

      {/* PROJECT POPUP */}
      {activeProject && (
        <div
          className="
            fixed inset-0 z-[9999] flex items-center justify-center
            bg-black/80 p-3 backdrop-blur-sm
            sm:p-6
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveProject(null);
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
        >
          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={() => setActiveProject(null)}
            aria-label="Projekt schließen"
            className="
              fixed right-3 top-3 z-[10000] flex h-11 w-11
              items-center justify-center rounded-full
              border border-white/20 bg-black/80 text-white
              shadow-xl transition hover:scale-105 hover:bg-black
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-sky-300
              sm:right-6 sm:top-6 sm:h-12 sm:w-12
            "
          >
            <FaTimes size={19} />
          </button>

          {/* FULL WEBSITE IMAGE */}
          <div className="relative max-h-[92dvh] w-full max-w-[1000px] overflow-y-auto overscroll-contain rounded-xl bg-white shadow-2xl sm:max-h-[90dvh] sm:rounded-2xl">
            {!fullLoaded[activeProject.title] && (
              <div className="flex min-h-[50dvh] items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-gray-800" />
              </div>
            )}

            <img
              key={activeProject.title}
              src={activeProject.full}
              alt={`Vollständige Website: ${activeProject.title}`}
              draggable={false}
              onLoad={() => handleFullLoad(activeProject.title)}
              onError={() =>
                handleError(`${activeProject.title} – Fullsize`)
              }
              className={`
                block h-auto w-full
                ${fullLoaded[activeProject.title] ? "opacity-100" : "hidden"}
              `}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCarousel;
