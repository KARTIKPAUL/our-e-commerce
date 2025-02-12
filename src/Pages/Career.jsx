import React from 'react';

const Career = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-Time",
      description: "Build and maintain stunning user interfaces using modern frameworks like React and Tailwind CSS.",
    },
    {
      id: 2,
      title: "Marketing Specialist",
      location: "New York, NY",
      type: "Part-Time",
      description: "Develop and execute creative marketing campaigns to drive brand awareness and engagement.",
    },
    {
      id: 3,
      title: "Customer Support Representative",
      location: "Remote",
      type: "Full-Time",
      description: "Provide top-notch support to our customers and help them have the best shopping experience.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-light text-gray-800">Careers</h1>
        <p className="text-gray-600 mt-4">
          Join our team and help us shape the future of fashion. Explore exciting opportunities below.
        </p>
      </header>

      <div className="space-y-8">
        {jobOpenings.map((job) => (
          <div
            key={job.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-800">{job.title}</h2>
            <div className="text-sm text-gray-600 mt-2">
              <span className="font-medium">Location:</span> {job.location} |{" "}
              <span className="font-medium">Type:</span> {job.type}
            </div>
            <p className="text-gray-700 mt-4">{job.description}</p>
            <button className="mt-6 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
