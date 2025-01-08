"use client";
import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

interface FeedbackProp {
  name: string;
  position: string;
  company: string;
  feedback: string;
  rating: number;
  image: string;
  project: string;
}

interface FeedbackCardProps {
  feedback: FeedbackProp;
  index: number;
}

const FeedbackData: FeedbackProp[] = [
  {
    name: "FEKA LEONEL",
    position: "CEO and Founder",
    company: "ZinelGifts",
    feedback:
      "The e-commerce platform you delivered has left us all impressed. Not only was it completed ahead of schedule, but its design and functionality went above and beyond what we envisioned. Your dedication and attention to detail have truly made a difference—thank you!",
    rating: 5,
    image: "/api/placeholder/64/64",
    project: "E-commerce Platform",
  },
  {
    name: "Brahim",
    position: "Project Manager",
    company: "GasVisor",
    feedback:
      "The work you did on our dashboard application was phenomenal. Your suggestions for improvements were spot-on and added so much value. The level of expertise you demonstrated with NextJS and frontend development was exactly what we needed. Amazing job!",
    rating: 5,
    image: "/api/placeholder/64/64",
    project: "Analytics Dashboard",
  },
  {
    name: "Sophia",
    position: "Marketing Director",
    company: "CBuy",
    feedback:
      "Hey Kelly, it is Sophia from the CBUY-Team. We just wanted to take a moment to thank you for the fantastic job you did with the filters on the cbuy.expert website. Everyone here really appreciates the effort you put in—it looks great! Thank you again from all of us! :)",
    rating: 5,
    image: "/api/placeholder/64/64",
    project: "Corporate Website",
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`transition-all duration-300 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-400 text-gray-400"
          }`}
        />
      ))}
    </div>
  );
};

const FeedbackCard: React.FC<FeedbackCardProps> = ({ feedback, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    );

    const currentRef = cardRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-8
        transform transition-all duration-500 ease-out
        ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"}
        hover:shadow-2xl hover:shadow-purple-500/10
        border border-gray-700/50 hover:border-purple-500/50
        group
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Quote
        size={48}
        className={`
          absolute -top-3 -left-3 text-purple-500/20 
          transition-all duration-500
          group-hover:text-purple-500/30 group-hover:scale-110
        `}
      />
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-6 mb-6">
          <div className="relative">
            <div
              className={`
              absolute inset-0 rounded-full bg-purple-500/20
              transition-all duration-500 
              ${isHovered ? "scale-110 opacity-100" : "scale-100 opacity-0"}
            `}
            />
            <Image
              src={feedback.image}
              alt={feedback.name}
              width={64}
              height={64}
              className="relative w-16 h-16 rounded-full object-cover border-2 border-purple-500/50 group-hover:border-purple-500 transition-all duration-500"
            />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg group-hover:text-purple-400 transition-colors duration-300">
              {feedback.name}
            </h3>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
              {feedback.position} at {feedback.company}
            </p>
            <div className="mt-2">
              <StarRating rating={feedback.rating} />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="text-purple-400 text-sm font-medium mb-3 group-hover:text-purple-300 transition-colors duration-300">
            Project: {feedback.project}
          </div>
          <p className="text-gray-300 leading-relaxed italic group-hover:text-white transition-colors duration-300">
            &quot;{feedback.feedback}&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

const ClientFeedbackSection: React.FC = () => {
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

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section className="bg-gray-900 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
      <div
        ref={sectionRef}
        className={`
          relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8
          transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <div className="text-center mb-16">
          <h2
            className={`
              text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-4
              transition-all duration-700 delay-300
              ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
            `}
          >
            Client Testimonials
          </h2>
          <p
            className={`
              text-gray-400 max-w-2xl mx-auto text-lg
              transition-all duration-700 delay-500
              ${isVisible ? "opacity-100" : "opacity-0"}
            `}
          >
            Don&apos;t just take my word for it - here is what clients have to
            say about working together on their projects.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {FeedbackData.map((feedback, index) => (
            <FeedbackCard
              key={feedback.name}
              feedback={feedback}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedbackSection;
