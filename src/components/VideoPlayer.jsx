import React, { useCallback, useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────
   VideoPlayer: eigener UI-Player für eine MP4-Datei
   - Start per Klick mit Ton (Browser erlauben Autoplay mit Ton nicht)
   - Controls: Play/Pause, Fortschritt (Klick/Ziehen/Pfeiltasten), Zeit,
     Ton, Tempo, Untertitel (wenn captions übergeben), Vollbild
   - Tastatur im Player: Leertaste/K, M, F, Pfeil links/rechts (5 s)
   - Endscreen mit CTA (onCta) → Conversion direkt nach dem Video
   - onEvent("play" | "pause" | "progress_25/50/75" | "complete" | "cta_click")
     für dein Tracking (z. B. Plausible/GA4)
   - Ohne JS-Overhead: preload="metadata", kein Autoplay, kein Fremd-Script
───────────────────────────────────────────────────────────── */

const fmt = (t) => {
  if (!Number.isFinite(t)) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
};

const BLUE = "#2F7BFF";
const SPEEDS = [1, 1.25, 1.5];

/* ── Icons ── */
const Icon = ({ d, fill = false, size = 20, children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill={fill ? "currentColor" : "none"} stroke={fill ? "none" : "currentColor"} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    {d ? <path d={d} /> : children}
  </svg>
);
const PlayI = (p) => <Icon fill {...p} d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />;
const PauseI = (p) => <Icon fill {...p}><rect x="6" y="5" width="4.2" height="14" rx="1.2" /><rect x="13.8" y="5" width="4.2" height="14" rx="1.2" /></Icon>;
const VolI = (p) => <Icon {...p}><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z" fill="currentColor" stroke="none" /><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" /></Icon>;
const MuteI = (p) => <Icon {...p}><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z" fill="currentColor" stroke="none" /><path d="m16 9.5 5 5M21 9.5l-5 5" /></Icon>;
const FsI = (p) => <Icon {...p}><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></Icon>;
const FsExitI = (p) => <Icon {...p}><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" /></Icon>;
const CcI = (p) => <Icon {...p}><rect x="3" y="5.5" width="18" height="13" rx="2.5" /><path d="M10.2 10.2a2 2 0 1 0 0 3.6M16.2 10.2a2 2 0 1 0 0 3.6" /></Icon>;
const ReplayI = (p) => <Icon {...p}><path d="M4 12a8 8 0 1 0 2.6-5.9M4 4v4.5h4.5" /></Icon>;

const CtrlBtn = ({ label, onClick, pressed, children, className = "" }) => (
  <button
    type="button"
    aria-label={label}
    aria-pressed={pressed}
    title={label}
    onClick={onClick}
    className={`flex h-9 w-9 flex-none items-center justify-center rounded-full text-white/90 outline-none transition hover:bg-white/15 hover:text-white focus-visible:ring-2 focus-visible:ring-white/80 ${className}`}
  >
    {children}
  </button>
);

const VideoPlayer = ({
  src,
  poster,
  title = "Erklärvideo",
  captions, // optional: { src: "/video/untertitel.vtt", srcLang: "de", label: "Deutsch" }
  ctaLabel = "Kostenlose Analyse sichern",
  onCta,
  onEvent,
  className = "",
}) => {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const barRef = useRef(null);
  const hideTimer = useRef(null);
  const fired = useRef({});

  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [speed, setSpeed] = useState(1);
  const [speedOpen, setSpeedOpen] = useState(false);
  const [ccOn, setCcOn] = useState(false);
  const [full, setFull] = useState(false);
  const [uiVisible, setUiVisible] = useState(true);
  const [scrubbing, setScrubbing] = useState(false);

  const emit = useCallback(
    (name, data) => {
      if (typeof onEvent === "function") onEvent(name, { title, ...data });
    },
    [onEvent, title]
  );
  const once = useCallback(
    (name) => {
      if (fired.current[name]) return;
      fired.current[name] = true;
      emit(name);
    },
    [emit]
  );

  /* UI nach 2,5 s ausblenden, solange das Video läuft */
  const poke = useCallback(() => {
    setUiVisible(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused && !scrubbing) setUiVisible(false);
    }, 2500);
  }, [scrubbing]);

  useEffect(() => () => clearTimeout(hideTimer.current), []);

  const toggle = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused || v.ended) {
      if (v.ended) v.currentTime = 0;
      setStarted(true);
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, []);

  const seekTo = useCallback((t) => {
    const v = videoRef.current;
    if (!v || !duration) return;
    const next = Math.max(0, Math.min(duration, t));
    v.currentTime = next;
    setTime(next);
  }, [duration]);

  const toggleMute = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }, []);

  const toggleFull = useCallback(() => {
    const el = wrapRef.current;
    const v = videoRef.current;
    if (!el || !v) return;
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    } else if (el.requestFullscreen) {
      el.requestFullscreen().catch(() => {});
    } else if (v.webkitEnterFullscreen) {
      v.webkitEnterFullscreen(); /* iPhone Safari */
    }
  }, []);

  useEffect(() => {
    const onFs = () => setFull(document.fullscreenElement === wrapRef.current);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  /* Untertitel an/aus */
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !v.textTracks || !v.textTracks.length) return;
    v.textTracks[0].mode = ccOn ? "showing" : "hidden";
  }, [ccOn, started]);

  const changeSpeed = (s) => {
    const v = videoRef.current;
    if (v) v.playbackRate = s;
    setSpeed(s);
    setSpeedOpen(false);
  };

  /* Fortschrittsbalken: Zeigen, Ziehen, Tastatur */
  const posToTime = (clientX) => {
    const r = barRef.current.getBoundingClientRect();
    return ((clientX - r.left) / r.width) * duration;
  };
  const onBarDown = (e) => {
    if (!duration) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setScrubbing(true);
    seekTo(posToTime(e.clientX));
  };
  const onBarMove = (e) => {
    if (scrubbing) seekTo(posToTime(e.clientX));
  };
  const onBarUp = () => setScrubbing(false);
  const onBarKey = (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); seekTo(time - 5); }
    if (e.key === "ArrowRight") { e.preventDefault(); seekTo(time + 5); }
    if (e.key === "Home") { e.preventDefault(); seekTo(0); }
    if (e.key === "End") { e.preventDefault(); seekTo(duration); }
  };

  /* Tastaturkürzel im Player */
  const onKeyDown = (e) => {
    if (e.target.closest("[role='slider'], input")) return;
    const k = e.key.toLowerCase();
    if (k === " " || k === "k") { e.preventDefault(); toggle(); }
    else if (k === "m") toggleMute();
    else if (k === "f") toggleFull();
    else if (k === "arrowleft") seekTo(time - 5);
    else if (k === "arrowright") seekTo(time + 5);
    poke();
  };

  /* Video-Events */
  const onTimeUpdate = () => {
    const v = videoRef.current;
    if (!v) return;
    setTime(v.currentTime);
    if (v.buffered.length) setBuffered(v.buffered.end(v.buffered.length - 1));
    if (v.duration) {
      const p = v.currentTime / v.duration;
      if (p >= 0.25) once("progress_25");
      if (p >= 0.5) once("progress_50");
      if (p >= 0.75) once("progress_75");
    }
  };

  const pct = duration ? (time / duration) * 100 : 0;
  const bufPct = duration ? (buffered / duration) * 100 : 0;
  const showControls = started && !ended && (uiVisible || !playing || scrubbing);

  return (
    <div
      ref={wrapRef}
      role="region"
      aria-label={title}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseMove={started ? poke : undefined}
      onTouchStart={started ? poke : undefined}
      className={`group relative isolate w-full select-none overflow-hidden bg-[#010d1a] outline-none focus-visible:ring-2 focus-visible:ring-[#2F7BFF] ${
        full ? "" : "rounded-[22px]"
      } ${className}`}
      style={{ aspectRatio: full ? undefined : "16 / 9" }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="metadata"
        playsInline
        crossOrigin={captions ? "anonymous" : undefined}
        onClick={toggle}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={onTimeUpdate}
        onProgress={onTimeUpdate}
        onPlay={() => { setPlaying(true); setEnded(false); emit("play", { at: videoRef.current?.currentTime }); poke(); }}
        onPause={() => { setPlaying(false); setUiVisible(true); if (!videoRef.current?.ended) emit("pause", { at: videoRef.current?.currentTime }); }}
        onEnded={() => { setPlaying(false); setEnded(true); setUiVisible(true); once("complete"); }}
        className="h-full w-full cursor-pointer bg-black object-contain"
      >
        {captions && <track kind="captions" src={captions.src} srcLang={captions.srcLang || "de"} label={captions.label || "Deutsch"} />}
      </video>

      {/* Verlaufsschatten für Lesbarkeit der Controls */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${showControls ? "opacity-100" : "opacity-0"}`}
      />

      {/* Start-Overlay */}
      {!started && (
        <button
          type="button"
          onClick={toggle}
          aria-label={`${title} mit Ton abspielen`}
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-t from-[#010d1a]/70 via-[#010d1a]/10 to-transparent outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
        >
          <span className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center sm:h-24 sm:w-24">
            <span className="vp-ring absolute inset-0 rounded-full bg-white/40" />
            <span className="relative flex h-full w-full items-center justify-center rounded-full bg-white pl-1 text-[#001D3D] shadow-[0_12px_40px_-8px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:scale-105">
              <PlayI size={34} />
            </span>
          </span>
          <span className="flex items-center gap-2 rounded-full bg-black/45 px-3.5 py-1.5 text-[13px] font-semibold text-white backdrop-blur-md">
            <VolI size={15} />
            Mit Ton ansehen{duration ? `, ${fmt(duration)} Min.` : ""}
          </span>
        </button>
      )}

      {/* Pause-Anzeige */}
      {started && !playing && !ended && (
        <button
          type="button"
          onClick={toggle}
          aria-label="Weiter abspielen"
          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 pl-1 text-white backdrop-blur-md outline-none transition hover:bg-black/60 focus-visible:ring-2 focus-visible:ring-white"
        >
          <PlayI size={28} />
        </button>
      )}

      {/* Endscreen mit CTA */}
      {ended && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#010d1a]/85 px-6 text-center backdrop-blur-sm">
          <p className="max-w-[24rem] text-[clamp(18px,2.4vw,26px)] font-semibold leading-snug text-white">
            Bereit für die kostenlose Analyse Ihrer Website?
          </p>
          {onCta && (
            <button
              type="button"
              onClick={() => { emit("cta_click"); onCta(); }}
              className="rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-[#001D3D] outline-none transition-transform hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-[#2F7BFF] active:scale-95"
            >
              {ctaLabel}
            </button>
          )}
          <button
            type="button"
            onClick={toggle}
            className="flex items-center gap-1.5 text-[13px] font-medium text-white/70 outline-none transition hover:text-white focus-visible:underline"
          >
            <ReplayI size={15} /> Nochmal ansehen
          </button>
        </div>
      )}

      {/* Control-Leiste */}
      <div
        className={`absolute inset-x-0 bottom-0 px-2.5 pb-2.5 transition-all duration-300 sm:px-4 sm:pb-3.5 ${
          showControls ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fortschritt */}
        <div
          ref={barRef}
          role="slider"
          tabIndex={0}
          aria-label="Position im Video"
          aria-valuemin={0}
          aria-valuemax={Math.round(duration) || 0}
          aria-valuenow={Math.round(time)}
          aria-valuetext={`${fmt(time)} von ${fmt(duration)}`}
          onPointerDown={onBarDown}
          onPointerMove={onBarMove}
          onPointerUp={onBarUp}
          onPointerCancel={onBarUp}
          onKeyDown={onBarKey}
          className="group/bar relative mx-1 flex h-5 cursor-pointer touch-none items-center outline-none focus-visible:[&>div]:ring-2 focus-visible:[&>div]:ring-white/80"
        >
          <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/25 transition-all group-hover/bar:h-1.5">
            <div className="absolute inset-y-0 left-0 bg-white/30" style={{ width: `${bufPct}%` }} />
            <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${pct}%`, background: BLUE }} />
          </div>
          <span
            aria-hidden="true"
            className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-white shadow transition-transform group-hover/bar:scale-100"
            style={{ left: `${pct}%`, transform: scrubbing ? "translate(-50%,-50%) scale(1)" : undefined }}
          />
        </div>

        {/* Buttons */}
        <div className="mt-0.5 flex items-center gap-0.5 sm:gap-1">
          <CtrlBtn label={playing ? "Pause" : "Abspielen"} onClick={toggle}>
            {playing ? <PauseI /> : <PlayI />}
          </CtrlBtn>

          <div className="group/vol flex items-center">
            <CtrlBtn label={muted || volume === 0 ? "Ton einschalten" : "Ton ausschalten"} onClick={toggleMute}>
              {muted || volume === 0 ? <MuteI /> : <VolI />}
            </CtrlBtn>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={muted ? 0 : volume}
              aria-label="Lautstärke"
              onChange={(e) => {
                const val = Number(e.target.value);
                const v = videoRef.current;
                if (v) { v.volume = val; v.muted = val === 0; }
                setVolume(val);
                setMuted(val === 0);
              }}
              className="vp-vol hidden h-1 w-0 cursor-pointer appearance-none rounded-full bg-white/30 opacity-0 transition-all duration-200 focus-visible:w-16 focus-visible:opacity-100 group-hover/vol:w-16 group-hover/vol:opacity-100 sm:block"
            />
          </div>

          <span className="ml-1 text-[12px] font-medium tabular-nums text-white/90 sm:ml-2 sm:text-[13px]">
            {fmt(time)} <span className="text-white/50">/ {fmt(duration)}</span>
          </span>

          <span className="flex-1" />

          <div className="relative">
            <button
              type="button"
              aria-label="Wiedergabegeschwindigkeit"
              aria-haspopup="menu"
              aria-expanded={speedOpen}
              onClick={() => setSpeedOpen((o) => !o)}
              className="flex h-9 min-w-9 items-center justify-center rounded-full px-2 text-[12px] font-semibold tabular-nums text-white/90 outline-none transition hover:bg-white/15 hover:text-white focus-visible:ring-2 focus-visible:ring-white/80"
            >
              {speed}x
            </button>
            {speedOpen && (
              <div role="menu" className="absolute bottom-11 right-0 min-w-[4.5rem] overflow-hidden rounded-xl bg-[#0B2540]/95 p-1 shadow-xl backdrop-blur-md">
                {SPEEDS.map((s) => (
                  <button
                    key={s}
                    role="menuitemradio"
                    aria-checked={speed === s}
                    type="button"
                    onClick={() => changeSpeed(s)}
                    className={`block w-full rounded-lg px-3 py-1.5 text-left text-[13px] font-medium tabular-nums outline-none transition hover:bg-white/15 focus-visible:bg-white/15 ${speed === s ? "text-[#60a5ff]" : "text-white/90"}`}
                  >
                    {s}x
                  </button>
                ))}
              </div>
            )}
          </div>

          {captions && (
            <CtrlBtn label={ccOn ? "Untertitel ausschalten" : "Untertitel einschalten"} pressed={ccOn} onClick={() => setCcOn((c) => !c)} className={ccOn ? "!bg-white/20 !text-white" : ""}>
              <CcI />
            </CtrlBtn>
          )}

          <CtrlBtn label={full ? "Vollbild beenden" : "Vollbild"} onClick={toggleFull}>
            {full ? <FsExitI /> : <FsI />}
          </CtrlBtn>
        </div>
      </div>

      <style>{`
        .vp-ring{animation:vp-pulse 2.4s cubic-bezier(.22,.61,.36,1) infinite}
        @keyframes vp-pulse{0%{transform:scale(1);opacity:.55}80%,100%{transform:scale(1.55);opacity:0}}
        .vp-vol::-webkit-slider-thumb{appearance:none;width:12px;height:12px;border-radius:50%;background:#fff;border:0}
        .vp-vol::-moz-range-thumb{width:12px;height:12px;border-radius:50%;background:#fff;border:0}
        @media (prefers-reduced-motion:reduce){.vp-ring{animation:none}}
      `}</style>
    </div>
  );
};

export default VideoPlayer;
