"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface WorkItem {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
}

const works: WorkItem[] = [
  {
    id: "1",
    title: "Drives EXpress",
    category: "Web App",
    image: "/img/drive.png",
    link: "https://drivesexpress.com",
  },
  {
    id: "2",
    title: "Amene Academy",
    category: "Web App",
    image: "/img/amene.png",
    link: "https://ameneacademy.com",
  },
  {
    id: "3",
    title: "Student management system",
    category: "Web App",
    image: "/img/cohas.png",
    link: "https://new.cohasbepanda.com",
  },
  {
    id: "4",
    title: "Student Fees Management System",
    category: "Desktop App",
    image: "/img/desktop1.jpeg",
    link: "#",
  },
  {
    id: "5",
    title: "Customized gift shop",
    category: "Wep App",
    image: "/img/zinel.png",
    link: "https://zinelgifts.com",
  },
];

const RecentWorksSection: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web App", "Mobile App", "Desktop App"];
  const filteredWorks =
    filter === "All" ? works : works.filter((work) => work.category === filter);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-16">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          My Recent Works
        </h2>
        <div className="flex justify-center mb-8 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-500/20 ${
                filter === category
                  ? "bg-purple-600 text-white transform scale-105"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {filteredWorks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredWorks.map((work) => (
              <Link
                href={work.link}
                key={work.id}
                className="group block"
                target="_blank"
              >
                <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-102 hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={work.image}
                      alt={work.title}
                      layout="fill"
                      className="object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-purple-600/0 transition-all duration-300 ease-in-out group-hover:bg-purple-600/20" />
                  </div>
                  <div className="p-6 transition-all duration-300 ease-in-out group-hover:bg-gray-700">
                    <h3 className="text-white text-xl font-semibold mb-2 transition-all duration-300 ease-in-out group-hover:text-purple-400">
                      {work.title}
                    </h3>
                    <p className="text-gray-400 transition-all duration-300 ease-in-out group-hover:text-gray-300">
                      {work.category}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-white text-xl">
              {filter === "Mobile App"
                ? "Mobile app projects coming soon! Currently learning Dart and Flutter."
                : "No projects to display for this category."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentWorksSection;
