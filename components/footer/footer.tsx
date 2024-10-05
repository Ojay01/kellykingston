import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] text-white mt-auto">
      <div
        className="w-full h-16 bg-[#1a1a2e]"
        style={{
          borderTopLeftRadius: "50% 100%",
          borderTopRightRadius: "50% 100%",
          transform: "translateY(1px)",
        }}
      ></div>
      <div className="container mx-auto px-4 py-4 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="group">
              <span className="font-semibold text-lg group-hover:text-purple-400 transition-colors">
                kellykings.design
              </span>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                Full Stack Web Developer
              </p>
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-lg font-semibold mb-2 text-purple-400">
              {"Let's Connect"}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/ojong-kelly-kingston-12569522b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="hover:text-purple-400 transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Ojay01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="hover:text-purple-400 transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/OjKellyKingston"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter) profile"
                className="hover:text-purple-400 transition-colors"
              >
                <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/ojongab/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="hover:text-purple-400 transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/+237673909858"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp contact"
                className="hover:text-purple-400 transition-colors"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Kelly Kings. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
