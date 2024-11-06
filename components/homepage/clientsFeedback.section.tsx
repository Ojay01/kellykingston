// "use client";
// import { useEffect, useRef, useState } from "react";
// import { Star, Quote } from "lucide-react";

// interface FeedbackProp {
//   name: string;
//   position: string;
//   company: string;
//   feedback: string;
//   rating: number;
//   image: string;
//   project: string;
// }

// interface FeedbackCardProps {
//   feedback: FeedbackProp;
//   index: number;
// }

// const FeedbackData: FeedbackProp[] = [
//   {
//     name: "Sarah Johnson",
//     position: "Product Manager",
//     company: "TechCorp Solutions",
//     feedback:
//       "Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and exceeded our expectations in terms of functionality and design. Their attention to detail and problem-solving skills are exceptional.",
//     rating: 5,
//     image: "/api/placeholder/64/64",
//     project: "E-commerce Platform",
//   },
//   {
//     name: "Michael Chen",
//     position: "CEO",
//     company: "InnovateLabs",
//     feedback:
//       "Outstanding work on our company's dashboard application. The developer showed great initiative in suggesting improvements we hadn't even considered. Their technical expertise in React and Node.js is truly impressive.",
//     rating: 5,
//     image: "/api/placeholder/64/64",
//     project: "Analytics Dashboard",
//   },
//   {
//     name: "Emma Davis",
//     position: "Marketing Director",
//     company: "Growth Media",
//     feedback:
//       "The WordPress site they built for us is not only beautiful but also incredibly fast and user-friendly. Their understanding of both design principles and technical requirements made the whole process smooth and effective.",
//     rating: 5,
//     image: "/api/placeholder/64/64",
//     project: "Corporate Website",
//   },
//   {
//     name: "Alex Thompson",
//     position: "Startup Founder",
//     company: "NextGen Apps",
//     feedback:
//       "Exceptional problem-solving skills and great communication throughout the project. They took our MVP from concept to launch in record time, while maintaining code quality and performance.",
//     rating: 5,
//     image: "/api/placeholder/64/64",
//     project: "Mobile App MVP",
//   },
// ];

// const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
//   return (
//     <div className="flex gap-1">
//       {[...Array(5)].map((_, i) => (
//         <Star
//           key={i}
//           size={16}
//           className={`${
//             i < rating
//               ? "fill-yellow-400 text-yellow-400"
//               : "fill-gray-400 text-gray-400"
//           }`}
//         />
//       ))}
//     </div>
//   );
// };

// const FeedbackCard: React.FC<FeedbackCardProps> = ({ feedback, index }) => {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       {
//         threshold: 0.1,
//         rootMargin: "50px",
//       },
//     );

//     if (cardRef.current) {
//       observer.observe(cardRef.current);
//     }

//     return () => {
//       if (cardRef.current) {
//         observer.unobserve(cardRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={cardRef}
//       className={`
//                 relative bg-gray-800 rounded-xl p-6 shadow-lg
//                 transform transition-all duration-700 ease-out
//                 ${
//                   isVisible
//                     ? "translate-y-0 opacity-100 scale-100"
//                     : "translate-y-8 opacity-0 scale-95"
//                 }
//                 hover:shadow-2xl hover:scale-105
//             `}
//       style={{ transitionDelay: `${index * 150}ms` }}
//     >
//       <Quote size={40} className="absolute text-purple-500/10 -top-2 -left-2" />
//       <div className="flex flex-col h-full">
//         <div className="flex items-center gap-4 mb-4">
//           <img
//             src={feedback.image}
//             alt={feedback.name}
//             className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
//           />
//           <div>
//             <h3 className="text-white font-semibold text-lg">
//               {feedback.name}
//             </h3>
//             <p className="text-gray-400 text-sm">
//               {feedback.position} at {feedback.company}
//             </p>
//             <div className="mt-1">
//               <StarRating rating={feedback.rating} />
//             </div>
//           </div>
//         </div>
//         <div className="mb-4">
//           <div className="text-purple-400 text-sm font-medium mb-2">
//             Project: {feedback.project}
//           </div>
//           <p className="text-gray-300 leading-relaxed">"{feedback.feedback}"</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ClientFeedbackSection: React.FC = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 },
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section className="bg-gray-900 py-20">
//       <div
//         ref={sectionRef}
//         className={`
//                     max-w-6xl mx-auto px-4 sm:px-6 lg:px-8
//                     transition-all duration-1000 ease-out
//                     ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
//                 `}
//       >
//         <div className="text-center mb-12">
//           <h2
//             className={`
//                         text-4xl font-bold text-purple-500 mb-4
//                         transition-all duration-700 delay-300
//                         ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
//                     `}
//           >
//             Client Testimonials
//           </h2>
//           <p
//             className={`
//                         text-gray-400 max-w-2xl mx-auto
//                         transition-all duration-700 delay-500
//                         ${isVisible ? "opacity-100" : "opacity-0"}
//                     `}
//           >
//             Don't just take my word for it - here's what clients have to say
//             about working together on their projects.
//           </p>
//         </div>
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
//           {FeedbackData.map((feedback, index) => (
//             <FeedbackCard
//               key={feedback.name}
//               feedback={feedback}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientFeedbackSection;
