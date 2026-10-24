
import { useState } from "react";
import { ArrowUpRight, Play, Volume2, VolumeX } from "lucide-react";

function Hero() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section
      id="home"
      className="relative bg-black text-white px-6 pt-20 pb-20 overflow-hidden"
    >
      {/* Background Purple Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[400px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Personal Introduction */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          {/* Small Heading */}
          <p className="text-purple-400 text-sm md:text-base font-semibold uppercase tracking-[0.25em] mb-6">
            Hi, I'm Afaq Qayyum
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Video Editor.
            <br />
            <span className="text-purple-400">
              Creative Storyteller.
            </span>
          </h1>

          {/* Personal Description */}
          <p className="text-gray-300 text-base md:text-lg leading-8 mt-8 max-w-3xl mx-auto">
           I transform raw footage into cinematic, engaging content that captures attention, tells stories, and keeps audiences watching.
          </p>

          {/* Experience Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 mt-8 text-sm text-gray-400">

            <span>3+ Years of Client Work</span>

            <span className="hidden sm:inline text-purple-400">
              •
            </span>

            <span>50+ Projects Delivered</span>

            <span className="hidden sm:inline text-purple-400">
              •
            </span>

            <span>Premiere Pro & CapCut Pro</span>

          </div>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

            <a
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-600/20"
            >
              Explore My Work
              <ArrowUpRight size={19} />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-600 hover:border-purple-400 hover:bg-purple-500/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Hire Me
              <ArrowUpRight size={19} />
            </a>

          </div>

        </div>

        {/* Showreel Heading */}
        <div className="text-center mb-8">

          <div className="inline-flex items-center gap-2 text-purple-400 text-sm font-semibold uppercase tracking-[0.2em]">
            <Play size={16} />
            My Creative Showreel
          </div>

          <h2 className="text-2xl md:text-4xl font-bold mt-4">
            Every Frame Tells a{" "}
            <span className="text-purple-400">
              Story.
            </span>
          </h2>

          <p className="text-gray-400 mt-4 text-sm md:text-base">
            A glimpse into my editing style, creativity,
            and visual storytelling.
          </p>

        </div>

        {/* Portfolio Video */}
        <div className="relative group rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-900/10">

          <video
            src="/video/portfolio..mp4"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            controls
            className="w-full aspect-video object-cover"
          />

          {/* Sound Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-5 right-5 z-10 flex items-center gap-2 bg-black/75 hover:bg-purple-600 text-white px-4 py-2 rounded-lg cursor-pointer transition-all duration-300"
          >
            {isMuted ? (
              <>
                <VolumeX size={18} />
                <span className="hidden sm:inline">
                  Sound Off
                </span>
              </>
            ) : (
              <>
                <Volume2 size={18} />
                <span className="hidden sm:inline">
                  Sound On
                </span>
              </>
            )}
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;
