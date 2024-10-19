"use client";
import React, { useEffect, useRef } from "react";

interface EducationItemProps {
  period: string;
  course: string;
  institution: string;
}

interface EducationItemComponentProps {
  item: EducationItemProps;
  index: number;
}

const educationData: EducationItemProps[] = [
  {
    period: "2021 - Present",
    course: "COMPUTER SCIENCE",
    institution: "University of Buea",
  },
  {
    period: "2020 - 2021",
    course: "MATHEMATICS",
    institution: "University of Douala",
  },
  {
    period: "2018 - 2020",
    course: "GCE A LEVEL",
    institution: "Lybibe-GBHS Bepanada (4 papers)",
  },
  {
    period: "2016 - 2017",
    course: "LOWER SIXTH",
    institution: "GBHS Limbe Mile Two",
  },
  {
    period: "2011 - 2016",
    course: "GCE O LEVEL",
    institution: "GHS Kembong (8 papers)",
  },
  {
    period: "2005 - 2011",
    course: "First School Living Certificate",
    institution: "GPS Kembong (List A)",
  },
];

// EducationItem component with proper typing
const EducationItem: React.FC<EducationItemComponentProps> = ({
  item,
  index,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeInUp");
        } else {
          entry.target.classList.remove("animate-fadeInUp");
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl opacity-0"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <span className="text-purple-400 text-sm font-semibold">
        {item.period}
      </span>
      <h3 className="text-white font-bold text-xl my-2">{item.course}</h3>
      <p className="text-gray-400 text-sm">{item.institution}</p>
    </div>
  );
};

const EducationSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        } else {
          entry.target.classList.remove("animate-fadeIn");
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
    <div
      ref={sectionRef}
      className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 opacity-0"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-purple-500 text-4xl font-bold mb-10 text-center">
          🎓 My Education
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {educationData.map((item, index) => (
            <EducationItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Custom animations in a CSS style block
const customAnimations = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
}

.animate-fadeInUp {
  animation: fadeInUp 0.5s ease-out forwards;
}
`;

const EducationSectionWithStyles: React.FC = () => (
  <section className="bg-gray-900">
    <style>{customAnimations}</style>
    <EducationSection />
  </section>
);

export default EducationSectionWithStyles;
