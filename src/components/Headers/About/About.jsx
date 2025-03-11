import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are a team of passionate individuals dedicated to delivering
            innovative solutions for your business.
          </p>
        </div>

        {/* Grid Layout for Content */}
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Mission */}
          <div className="text-center">
            <div className="flex justify-center">
              <svg
                className="h-12 w-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Our Mission
            </h3>
            <p className="mt-2 text-gray-600">
              To empower businesses with cutting-edge technology and creative
              solutions that drive growth and success.
            </p>
          </div>

          {/* Vision */}
          <div className="text-center">
            <div className="flex justify-center">
              <svg
                className="h-12 w-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Our Vision
            </h3>
            <p className="mt-2 text-gray-600">
              To be a global leader in innovation, transforming industries and
              improving lives through technology.
            </p>
          </div>

          {/* Values */}
          <div className="text-center">
            <div className="flex justify-center">
              <svg
                className="h-12 w-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Our Values
            </h3>
            <p className="mt-2 text-gray-600">
              Integrity, innovation, collaboration, and customer-centricity are
              at the core of everything we do.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-semibold text-center text-gray-900">
            Meet Our Team
          </h3>
          <p className="mt-4 text-center text-gray-600">
            A talented group of professionals driving innovation and success.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                className="mx-auto h-48 w-48 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Team Member 1"
              />
              <h4 className="mt-6 text-xl font-semibold text-gray-900">
                Jane Doe
              </h4>
              <p className="mt-2 text-gray-600">CEO & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <img
                className="mx-auto h-48 w-48 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Team Member 2"
              />
              <h4 className="mt-6 text-xl font-semibold text-gray-900">
                John Smith
              </h4>
              <p className="mt-2 text-gray-600">CTO</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <img
                className="mx-auto h-48 w-48 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Team Member 3"
              />
              <h4 className="mt-6 text-xl font-semibold text-gray-900">
                Sarah Johnson
              </h4>
              <p className="mt-2 text-gray-600">Head of Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
