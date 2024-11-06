"use client";
import { useEffect, useRef, useState } from "react";
import { Circle, CircleDot } from "lucide-react";

interface ExperienceProp {
  skill: string;
  years: number;
  level: "Novice" | "Beginner" | "Intermediate" | "Advanced" | "Expert";
  proficiency: number; // 0-100
}

interface ExperienceItemProps {
  item: ExperienceProp;
  index: number;
}

const ExperienceData: ExperienceProp[] = [
  {
    skill: "JavaScript",
    years: 4,
    level: "Advanced",
    proficiency: 85,
  },
  {
    skill: "React.js",
    years: 3,
    level: "Advanced",
    proficiency: 80,
  },
  {
    skill: "Node.js",
    years: 0.3,
    level: "Beginner",
    proficiency: 35,
  },
  {
    skill: "TypeScript",
    years: 1,
    level: "Intermediate",
    proficiency: 65,
  },
  {
    skill: "Python",
    years: 0.4,
    level: "Novice",
    proficiency: 20,
  },
  {
    skill: "GraphQL",
    years: 1,
    level: "Intermediate",
    proficiency: 60,
  },
  {
    skill: "MongoDB",
    years: 0.7,
    level: "Beginner",
    proficiency: 45,
  },
  {
    skill: "HTML/CSS",
    years: 6,
    level: "Expert",
    proficiency: 95,
  },
  {
    skill: "Sass/SCSS",
    years: 3,
    level: "Advanced",
    proficiency: 85,
  },
  {
    skill: "PHP",
    years: 5,
    level: "Advanced",
    proficiency: 80,
  },
  {
    skill: "WordPress",
    years: 2,
    level: "Intermediate",
    proficiency: 70,
  },
  {
    skill: "Laravel",
    years: 6,
    level: "Expert",
    proficiency: 90,
  },
  {
    skill: "CodeIgniter",
    years: 1,
    level: "Intermediate",
    proficiency: 48,
  },
  {
    skill: "Angular",
    years: 1,
    level: "Intermediate",
    proficiency: 35,
  },
  {
    skill: "Java",
    years: 3,
    level: "Intermediate",
    proficiency: 30,
  },
  {
    skill: "C++",
    years: 3,
    level: "Intermediate",
    proficiency: 55,
  },
];

const ExperienceItem: React.FC<ExperienceItemProps> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setShowProgress(true), 500 + index * 100);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "50px",
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [index]);

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "novice":
        return "bg-red-500";
      case "beginner":
        return "bg-orange-500";
      case "intermediate":
        return "bg-yellow-500";
      case "advanced":
        return "bg-green-500";
      case "expert":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const getIconColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "novice":
        return "text-red-500";
      case "beginner":
        return "text-orange-500";
      case "intermediate":
        return "text-yellow-500";
      case "advanced":
        return "text-green-500";
      case "expert":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };

  const getLevelLabel = (proficiency: number) => {
    const stages = [
      { level: "Novice", threshold: 20, filled: 1 },
      { level: "Beginner", threshold: 40, filled: 2 },
      { level: "Intermediate", threshold: 60, filled: 3 },
      { level: "Advanced", threshold: 80, filled: 4 },
      { level: "Expert", threshold: 100, filled: 5 },
    ];

    const stage =
      stages.find((s) => proficiency <= s.threshold) ||
      stages[stages.length - 1];
    return { text: stage.level, filled: stage.filled };
  };

  return (
    <div
      ref={ref}
      className={`
                bg-gray-800 p-6 rounded-lg shadow-lg 
                transform transition-all duration-700 ease-out
                ${
                  isVisible
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-8 opacity-0 scale-95"
                }
                hover:scale-105 hover:shadow-xl hover:bg-gray-750
                cursor-pointer
            `}
      style={{
        transitionDelay: `${index * 100}ms`,
        backgroundColor: isVisible ? "" : "rgba(31, 41, 55, 0)",
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3
          className={`
                    text-white font-bold text-xl
                    transform transition-all duration-700 delay-300
                    ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}
                `}
        >
          {item.skill}
        </h3>
        <div
          className={`
                    flex flex-col items-end
                    transform transition-all duration-700 delay-300
                    ${isVisible ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}
                `}
        >
          <span
            className={`
                        px-3 py-1 rounded-full text-xs font-medium text-white
                        ${getLevelColor(item.level)}
                        transform transition-all duration-500
                        hover:scale-110
                    `}
          >
            {item.level}
          </span>
          <span className="text-gray-400 text-xs mt-1">
            {item.years} {item.years === 1 ? "year" : "years"}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
          <div
            className={`
                            h-2.5 rounded-full transition-all duration-1000 ease-out
                            ${getLevelColor(item.level)}
                        `}
            style={{
              width: showProgress ? `${item.proficiency}%` : "0%",
              transitionDelay: `${index * 100}ms`,
            }}
          />
        </div>
        <div
          className={`
                    flex justify-between items-center text-xs text-gray-400
                    transition-all duration-700 delay-500
                    ${isVisible ? "opacity-100" : "opacity-0"}
                `}
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) =>
              i < getLevelLabel(item.proficiency).filled ? (
                <CircleDot
                  key={i}
                  className={`w-4 h-4 ${getIconColor(item.level)}`}
                />
              ) : (
                <Circle key={i} className="w-4 h-4 text-gray-600" />
              ),
            )}
          </div>
          <span
            className={`
                        transition-all duration-700
                        ${showProgress ? "opacity-100" : "opacity-0"}
                    `}
          >
            {item.proficiency}%
          </span>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="">
      <div
        ref={sectionRef}
        className={`
                     py-16 px-4 sm:px-6 lg:px-8
                    transition-all duration-1000 ease-out
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                `}
      >
        <div className="max-w-screen-xl mx-auto">
          <h2
            className={`
                        text-purple-500 text-4xl font-bold mb-10 text-center
                        transition-all duration-700 delay-300
                        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
                    `}
          >
            💻 My Experience
          </h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {ExperienceData.map((item, index) => (
              <ExperienceItem key={item.skill} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
