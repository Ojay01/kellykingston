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
    title: "Nebula",
    category: "Web Design",
    image: "/placeholder-1.jpg",
    link: "/works/nebula",
  },
  {
    id: "2",
    title: "Drive Tour",
    category: "Mobile App",
    image: "/placeholder-2.jpg",
    link: "/works/drive-tour",
  },
  {
    id: "3",
    title: "Sebastian Gaming",
    category: "Mobile App",
    image: "/placeholder-3.jpg",
    link: "/works/sebastian-gaming",
  },
  {
    id: "4",
    title: "Roger Dolder",
    category: "Web Design",
    image: "/placeholder-4.jpg",
    link: "/works/roger-dolder",
  },
];

const RecentWorksSection: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web Design", "Mobile App", "UI/UX"];

  const filteredWorks =
    filter === "All" ? works : works.filter((work) => work.category === filter);

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          My Recent Works
        </h2>

        <div className="flex justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`mx-2 px-4 py-2 rounded-full ${
                filter === category
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredWorks.map((work) => (
            <Link href={work.link} key={work.id} className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={work.image}
                    alt={work.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {work.title}
                  </h3>
                  <p className="text-gray-400">{work.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorksSection;
