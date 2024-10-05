"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
  faThreads,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import CountUp from "react-countup";

const Intro = () => {
  return (
    <section className="">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-16">
        <div className="max-w-2xl mb-8 md:mb-0">
          <h1 className="text-3xl md:text-7xl font-bold mb-4">
            I am OJONG KELLY KINGSTON
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-purple-400 mb-4">
            Full Stack Developer{" "}
          </h2>
          <p className="text-gray-300 mb-8">
            I am <b>Ojong Kelly Kingston Besongnyang.</b> As a full stack
            developer, I focus on breaking down complex user experience
            challenges to create simple, effective solutions that connect with
            people. My goal is to make sure that the products I work on are not
            only functional but also easy and enjoyable to use. By simplifying
            complicated problems, I ensure that users have a smooth and engaging
            experience, helping businesses build stronger relationships with
            their audience through thoughtful and intuitive design.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors flex items-center justify-center">
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 mr-2" />
              Hire me now
            </button>
            <button className="border border-purple-400 text-purple-400 px-6 py-3 rounded-full hover:bg-purple-400 hover:text-white transition-colors flex items-center justify-center">
              <FontAwesomeIcon icon={faDownload} className="w-5 h-5 mr-2" />
              Download CV
            </button>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/ojong-kelly-kingston-12569522b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-6 text-2xl h-6 hover:text-purple-400 cursor-pointer"
              />
            </a>
            <a
              href="https://github.com/Ojay01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="w-6 h-12 text-2xl hover:text-purple-400 cursor-pointer"
              />
            </a>
            <a
              href="https://x.com/OjKellyKingston"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                className="w-6 text-2xl h-6 hover:text-purple-400 cursor-pointer"
              />
            </a>
            <a
              href="https://www.instagram.com/ojongab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-6 text-2xl h-6 hover:text-purple-400 cursor-pointer"
              />
            </a>
            <a
              href="https://wa.me/+237673909858"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="w-6 text-2xl h-6 hover:text-purple-400 cursor-pointer"
              />
            </a>
            <a
              href="mailto:okellykings220@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-6 text-2xl h-6 hover:text-purple-400 cursor-pointer"
              />
            </a>
            <a
              href="https://www.threads.net/ojongab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faThreads}
                className="w-6 text-2xl h-6 hover:text-purple-400 cursor-pointer"
              />
            </a>
            <a
              href="https://www.discord.com/kelly.kingston"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faDiscord}
                className="w-6 text-2xl h-6 hover:text-purple-400 cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="relative w-64 h-80 md:w-80 md:h-96 transform rotate-6 transition-transform hover:rotate-0 duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg shadow-xl"></div>
          <img
            src="/me.jpeg"
            alt="Gerold"
            className="absolute inset-0 w-full h-full object-cover rounded-lg mix-blend-overlay"
          />
        </div>
      </div>
      <div className="container mx-auto mt-10 md:mt-20 px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: 5, label: "Years of Experience" },
          { value: 35, label: "Projects Completed" },
          { value: 25, label: "Happy Clients" },
          { value: 5, label: "Tech Stack Mastered" },
        ].map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col text-center transform transition-transform translate-y-0 opacity-100 duration-700 `}
          >
            <p className="text-2xl md:text-4xl font-bold mb-2">
              <CountUp start={0} end={stat.value} duration={2} />+
            </p>
            <p className="text-sm md:text-base text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Intro;
