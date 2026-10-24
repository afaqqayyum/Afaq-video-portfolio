
import React from "react";
import {
  Clapperboard,
  Film,
  Captions,
  Palette,
  Sparkles,
  Volume2,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: Clapperboard,
    title: "Short-Form Video Editing",
    description:
      "Engaging Instagram Reels, TikToks, and YouTube Shorts with fast-paced cuts, smooth transitions, and attention-grabbing hooks.",
    skills: ["Reels", "TikTok", "YouTube Shorts"],
  },
  {
    id: 2,
    icon: Film,
    title: "Long-Form Video Editing",
    description:
      "Professional YouTube videos, promotional content, real estate videos, and talking-head edits with seamless storytelling and engaging pacing.",
    skills: ["YouTube", "Real Estate", "Promotional Videos"],
  },
  {
    id: 3,
    icon: Captions,
    title: "Captions & Motion Graphics",
    description:
      "Dynamic subtitles, animated text, kinetic typography, lower thirds, and motion graphics that make your content more engaging.",
    skills: ["Subtitles", "Animated Text", "Motion Graphics"],
  },
  {
    id: 4,
    icon: Palette,
    title: "Color Correction & Grading",
    description:
      "Professional color correction and cinematic color grading to enhance the visual quality, consistency, and mood of your footage.",
    skills: ["Color Correction", "Color Grading", "Cinematic Looks"],
  },
  {
    id: 5,
    icon: Sparkles,
    title: "Visual Effects & Transitions",
    description:
      "Creative transitions, masking, motion tracking, background replacement, and visual effects that elevate your videos.",
    skills: ["VFX", "Masking", "Transitions"],
  },
  {
    id: 6,
    icon: Volume2,
    title: "Audio Editing & Sound Design",
    description:
      "Clean audio, noise reduction, background music, sound effects, and beat synchronization for a polished viewing experience.",
    skills: ["Audio Cleanup", "Sound Effects", "Beat Sync"],
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-purple-400 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            My Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            What I <span className="text-purple-400">Do.</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            From raw footage to polished visuals, I provide
            professional post-production services that bring
            your ideas to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group bg-gray-900/70 border border-gray-800 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10"
              >

                {/* Service Icon */}
                <div className="w-14 h-14 flex items-center justify-center bg-purple-500/10 rounded-xl mb-6 transition-colors duration-300 group-hover:bg-purple-500/20">
                  <Icon
                    size={28}
                    className="text-purple-400"
                  />
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-7 mb-6">
                  {service.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Have a project in mind? Let's create something amazing together.
          </p>

          <a
            href="#contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
          >
            Let's Work Together
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;
