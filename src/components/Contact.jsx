
import React from "react";
import {
  Camera,
  Mail,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const contactOptions = [
  {
    id: 1,
    name: "Instagram",
    subtitle: "Let's connect on Instagram",
    description:
      "Explore my creative work and reach out through Instagram direct messages.",
    icon: Camera,
    action: "Send a DM",
    link: "https://www.instagram.com/afaq.qayyyum/",
    color: "text-purple-400",
    iconBg: "bg-purple-500/10",
  },
  {
    id: 2,
    name: "Email",
    subtitle: "For professional inquiries",
    description:
      "Have a project brief, business inquiry, or collaboration proposal? Let's talk.",
    icon: Mail,
    action: "Send an Email",
    link: "mailto:afaqqayyum106@gmail.com?subject=Video%20Editing%20Project%20Inquiry",
    color: "text-blue-400",
    iconBg: "bg-blue-500/10",
  },
  {
    id: 3,
    name: "WhatsApp",
    subtitle: "Let's discuss your project",
    description:
      "Prefer a quick conversation? Message me directly on WhatsApp.",
    icon: MessageCircle,
    action: "Start a Chat",
    link: "https://wa.me/923157387916?text=Hi%21%20I%20came%20across%20your%20video%20editing%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you.",
    color: "text-green-400",
    iconBg: "bg-green-500/10",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-black text-white px-6 py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-purple-400 text-sm font-semibold uppercase tracking-[0.25em] mb-5">
            <Sparkles size={17} />
            Let's Collaborate
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Let's Create{" "}
            <span className="text-purple-400">
              Something Great.
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            Have a video project in mind? Whether it's a
            scroll-stopping reel, a cinematic promotional video,
            or professional YouTube content, I'd love to help
            bring your vision to life.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactOptions.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.id}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-gradient-to-b from-gray-900 to-[#10101c] border border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/70 hover:shadow-xl hover:shadow-purple-500/10"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-7 ${contact.iconBg}`}
                >
                  <Icon
                    size={30}
                    className={contact.color}
                  />
                </div>

                {/* Contact Name */}
                <h3 className="text-2xl font-bold mb-2">
                  {contact.name}
                </h3>

                {/* Subtitle */}
                <p className="text-purple-300 text-sm font-medium mb-4">
                  {contact.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-7 mb-8">
                  {contact.description}
                </p>

                {/* Action */}
                <div className="mt-auto flex items-center justify-between border-t border-gray-800 pt-5">
                  <span className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {contact.action}
                  </span>

                  <ArrowUpRight
                    size={22}
                    className="text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />
                </div>
              </a>
            );
          })}
        </div>

        {/* Availability */}
        <div className="flex items-center justify-center gap-3 mt-14 text-center">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40 animate-ping" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
          </span>

          <p className="text-gray-400 text-sm">
            Available for freelance projects and creative
            collaborations worldwide.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;
