import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faGlobe,
  faMobileAlt,
  faDesktop,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconDefinition;
  learnMoreUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  learnMoreUrl,
}) => (
  <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-start hover:bg-gray-700 transition-colors duration-300">
    <div className="flex items-center flex-row gap-4">
      <FontAwesomeIcon icon={icon} className="text-purple-500 mb-4" size="2x" />
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
    </div>
    <p className="text-gray-400 mb-4">{description}</p>
    <Link
      href={learnMoreUrl}
      className="mt-auto flex items-center text-purple-500 hover:text-purple-400 transition-colors duration-300"
    >
      <span className="mr-2">Learn More</span>
      <FontAwesomeIcon icon={faChevronRight} size="sm" />
    </Link>
  </div>
);

const ServicesSection: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      title: "Web Development",
      description:
        "Create responsive and dynamic websites tailored to your needs, ensuring a seamless user experience across all devices.",
      icon: faGlobe,
      learnMoreUrl: "#",
    },
    {
      title: "Mobile App Development",
      description:
        "Build innovative mobile applications for iOS and Android platforms, bringing your ideas to life in the palm of your users' hands.",
      icon: faMobileAlt,
      learnMoreUrl: "#",
    },
    {
      title: "Desktop App Development",
      description:
        "Develop powerful desktop applications for Windows, macOS, and Linux, optimizing performance and user interaction.",
      icon: faDesktop,
      learnMoreUrl: "#",
    },
  ];

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 md:px-16">
        <h2 className="text-white text-3xl font-bold mb-12 text-center">
          My Quality Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
