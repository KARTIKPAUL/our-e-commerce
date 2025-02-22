import React from 'react';

const Career = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="container mx-auto py-12 px-6">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center mb-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Build Your Career With Us</h1>
            <p className="text-lg text-gray-700 mb-6">
              Join a team where you can grow, innovate, and make an impact. At The Variable, we believe in building careers, not just filling jobs.
              Explore opportunities to work with some of the most creative minds in the industry.
            </p>
            <a
              href="#open-positions"
              className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-600 transition"
            >
              Explore Opportunities
            </a>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad"
              alt="Team Collaboration"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Why Work With Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                alt="Creative Environment"
                className="rounded-lg mb-4 w-full"
              />
              <h3 className="text-xl font-semibold mb-2">Creative Environment</h3>
              <p className="text-gray-700">
                Be part of a team that values creativity and collaboration. We encourage new ideas and foster innovation in everything we do.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
                alt="Growth Opportunities"
                className="rounded-lg mb-4 w-full"
              />
              <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
              <p className="text-gray-700">
                We’re committed to helping our employees grow their skills and advance in their careers through training and mentorship.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1593642634443-44adaa06623a"
                alt="Flexible Work"
                className="rounded-lg mb-4 w-full"
              />
              <h3 className="text-xl font-semibold mb-2">Flexible Work</h3>
              <p className="text-gray-700">
                Enjoy a healthy work-life balance with our flexible working policies, allowing you to thrive both personally and professionally.
              </p>
            </div>
          </div>
        </div>

        {/* Open Positions Section */}
        <div id="open-positions" className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Open Positions</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold mb-2">Marketing Specialist</h3>
            <p className="text-gray-700">Location: New York, NY</p>
            <p className="text-gray-700">Type: Full-Time</p>
            <a
              href="#"
              className="text-red-500 font-semibold mt-2 inline-block hover:underline"
            >
              View Details
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold mb-2">Graphic Designer</h3>
            <p className="text-gray-700">Location: Remote</p>
            <p className="text-gray-700">Type: Part-Time</p>
            <a
              href="#"
              className="text-red-500 font-semibold mt-2 inline-block hover:underline"
            >
              View Details
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
            <p className="text-gray-700">Location: San Francisco, CA</p>
            <p className="text-gray-700">Type: Full-Time</p>
            <a
              href="#"
              className="text-red-500 font-semibold mt-2 inline-block hover:underline"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Career;
