import React from "react";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  GlobeAltIcon,
  FilmIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

// Sample portfolio data (replace with your actual data)
const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce platform with a modern design, seamless checkout process, and integrated payment gateway.",
    image:
      "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
    link: "#",
    icon: <CodeBracketIcon className="h-8 w-8 text-blue-500" />,
  },
  {
    id: 2,
    title: "Corporate Website",
    description:
      "A professional corporate website with a clean layout, responsive design, and integrated blog for content marketing.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
    link: "/portfolio/corporate",
    icon: <GlobeAltIcon className="h-8 w-8 text-green-500" />,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A sleek and modern portfolio website showcasing creative work, with smooth animations and a user-friendly interface.",
    image:
      "https://images.unsplash.com/photo-1617472592135-72a181d04b27?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
    link: "/portfolio/creative",
    icon: <PaintBrushIcon className="h-8 w-8 text-purple-500" />,
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A feature-rich blog platform with a custom CMS, SEO optimization, and social media integration.",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
    link: "/portfolio/blog",
    icon: <FilmIcon className="h-8 w-8 text-red-500" />,
  },
  {
    id: 5,
    title: "Mobile App Development",
    description:
      "A cross-platform mobile app with a sleek UI, real-time data synchronization, and push notifications.",
    image:
      "https://images.unsplash.com/photo-1559028006-448665bd7c7f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
    link: "/portfolio/mobile-app",
    icon: <DevicePhoneMobileIcon className="h-8 w-8 text-yellow-500" />,
  },
];

export default function Portfolio() {
  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Portfolio
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore some of the amazing projects we've worked on.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
              {/* Portfolio Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />

              {/* Portfolio Content Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <div className="text-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-base text-gray-300">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="mt-4 flex items-center text-sm font-semibold text-white hover:text-blue-300 transition duration-300">
                  View Project
                  <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
