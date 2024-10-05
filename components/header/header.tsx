"use client";
import React, { useState, useEffect } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <div
      className={`bg-gradient-to-br from-[#1a1a2e] to-[#2a0e3a] text-white font-sans ${
        mobileMenuOpen ? "h-screen overflow-hidden" : ""
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-6 px-4 md:px-16">
        <Link href="/" className="flex items-center group">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-2 group-hover:bg-purple-700 transition-colors">
            <span>K</span>
          </div>
          <span className="font-semibold group-hover:text-purple-400 transition-colors">
            kellykiings.design
          </span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-purple-400">
            Services
          </a>
          <a href="#" className="hover:text-purple-400">
            Works
          </a>
          <a href="#" className="hover:text-purple-400">
            Clients
          </a>
          <a href="#" className="hover:text-purple-400">
            Blog
          </a>
          <a href="#" className="hover:text-purple-400">
            Contact
          </a>
        </div>
        <button className="hidden md:block bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors">
          {" Let's Talk"}
        </button>
        <button
          className="md:hidden text-2xl z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <FontAwesomeIcon
            icon={mobileMenuOpen ? faTimes : faBars}
            className="w-6 h-6"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#1a1a2e] transform ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 md:hidden overflow-y-auto`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-4">
          <a
            href="#"
            className="text-2xl hover:text-purple-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#"
            className="text-2xl hover:text-purple-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Works
          </a>
          <a
            href="#"
            className="text-2xl hover:text-purple-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Clients
          </a>
          <a
            href="#"
            className="text-2xl hover:text-purple-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </a>
          <a
            href="#"
            className="text-2xl hover:text-purple-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <button
            className="mt-4 w-64 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {"Let's Talk"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
