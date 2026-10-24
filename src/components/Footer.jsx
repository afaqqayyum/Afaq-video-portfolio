
import React from "react";
import {
  Camera,
  Mail,
  MessageCircle,
  ArrowUpRight,
  Heart,
} from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { name: "Home", href: "#home" },
    { name: "My Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About Me", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#08080d] text-white border-t border-purple-500/15 px-6 pt-16 pb-8 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[450px] h-[250px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-block text-3xl font-extrabold tracking-tight mb-4"
            >
              AFAQ
              <span className="text-purple-400">.</span>
            </a>

            <p className="text-gray-300 font-medium mb-3">
              Video Editor & Visual Storyteller
            </p>

            <p className="text-gray-500 text-sm leading-7 max-w-xs">
              Turning ideas into compelling visual stories
              through creative editing, cinematic visuals,
              and powerful storytelling.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:mx-auto">
            <h3 className="text-lg font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Let's Connect
            </h3>

            <p className="text-gray-400 text-sm leading-7 mb-6">
              Have a project in mind? I'm always open
              to exciting creative collaborations.
            </p>

            <div className="flex items-center gap-3">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/afaq.qayyyum/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 flex items-center justify-center bg-gray-900 border border-gray-800 rounded-xl text-gray-400 hover:text-purple-400 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300"
              >
                <Camera size={21} />
              </a>

              {/* Email */}
              <a
                href="mailto:afaqqayyum106@gmail.com?subject=Video%20Editing%20Project%20Inquiry"
                aria-label="Email"
                className="w-12 h-12 flex items-center justify-center bg-gray-900 border border-gray-800 rounded-xl text-gray-400 hover:text-blue-400 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
              >
                <Mail size={21} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923157387916?text=Hi%21%20I%20came%20across%20your%20video%20editing%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-12 h-12 flex items-center justify-center bg-gray-900 border border-gray-800 rounded-xl text-gray-400 hover:text-green-400 hover:border-green-500 hover:-translate-y-1 transition-all duration-300"
              >
                <MessageCircle size={21} />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm text-center">
            © {year} Afaq Qayyum. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm flex items-center gap-2">
            Crafted with
            <Heart
              size={15}
              className="text-purple-400"
              fill="currentColor"
            />
            & Creativity
            <ArrowUpRight
              size={15}
              className="text-purple-400"
            />
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
