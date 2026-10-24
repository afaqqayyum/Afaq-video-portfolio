
import React from "react";
import { Film, BriefcaseBusiness, Clapperboard, ArrowUpRight } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Film,
    number: "3+",
    label: "Years of Client Work",
  },
  {
    id: 2,
    icon: BriefcaseBusiness,
    number: "1",
    label: "Year of Company Experience",
  },
  {
    id: 3,
    icon: Clapperboard,
    number: "50+",
    label: "Projects Edited",
  },
];

const tools = [
  "Adobe Premiere Pro",
  "CapCut Pro",
  "Video Storytelling",
  "Motion Graphics",
  "Color Grading",
  "Sound Design",
];

function About() {
  return (
    <section
      id="about"
      className="bg-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Profile Image */}
          <div className="relative">

            <div className="absolute -inset-3 bg-purple-600/15 blur-3xl rounded-3xl"></div>

            <div className="relative overflow-hidden rounded-2xl border border-purple-500/30">

              <img
  src="/images/about.jpg"
  alt="Video Editor Portfolio Portrait"
  className="w-full h-[450px] object-cover object-center md:h-auto md:object-contain"
/>

            </div>

            <div className="absolute bottom-5 left-5 bg-black/80 backdrop-blur-md border border-purple-500/30 px-5 py-3 rounded-xl">
              <p className="text-purple-400 font-semibold text-sm">
                VIDEO EDITOR
              </p>
              <p className="text-gray-300 text-xs mt-1">
                Creative Post-Production
              </p>
            </div>

          </div>

          {/* About Content */}
          <div>

            <p className="text-purple-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              Get to Know Me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              The Editor Behind
              <span className="text-purple-400"> the Frames.</span>
            </h2>

            <p className="text-gray-300 mt-6 leading-8">
              Hey, I'm Afaq, a passionate video editor focused on
              transforming raw footage into engaging visual stories.
              I specialize in short-form content, YouTube videos,
              promotional edits, and creative post-production.
            </p>

            <p className="text-gray-400 mt-4 leading-8">
              With over three years of client editing experience and
              professional company experience at Predawn Solutions,
              I understand how to combine storytelling, pacing,
              sound, and visuals to create content that connects
              with audiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-8">

              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.id}
                    className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center hover:border-purple-500 transition-all duration-300"
                  >
                    <Icon
                      size={22}
                      className="text-purple-400 mx-auto mb-3"
                    />

                    <h3 className="text-2xl font-bold text-white">
                      {stat.number}
                    </h3>

                    <p className="text-gray-400 text-xs mt-2">
                      {stat.label}
                    </p>
                  </div>
                );
              })}

            </div>

            {/* Tools and Skills */}
            <h3 className="text-xl font-semibold mt-9 mb-4">
              Tools & Expertise
            </h3>

            <div className="flex flex-wrap gap-3">

              {tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-purple-500/10 text-purple-300 border border-purple-500/20 px-4 py-2 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}

            </div>

            {/* Contact Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-7 py-4 rounded-xl font-semibold mt-9 transition-all duration-300 hover:scale-105"
            >
              Let's Connect
              <ArrowUpRight size={20} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
