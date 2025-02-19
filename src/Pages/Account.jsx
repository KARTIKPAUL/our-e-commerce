import React from "react";

const Account = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Background and Cover */}
      <div className="relative w-full h-64 bg-green-200 rounded-lg">
        <img
          src="https://30percentclub.org/wp-content/uploads/2021/07/placeholder-image.png"
          alt="Cover"
          className="absolute w-full h-full object-cover rounded-lg"
        />
        <button className="absolute top-4 right-4 px-4 py-2 bg-white text-gray-700 text-sm rounded-lg shadow-md">
          Change Cover
        </button>
      </div>

      {/* Main Content */}
      <div className="mt-16 px-8 flex flex-col md:flex-row gap-8">
        {/* Left Section - Profile */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMI5YxZE03Vnj-s-sth2_JxlPd30Zy7yEGg&s"
            alt="Profile"
            className="w-32 h-32 rounded-full bg-gray-300 border-4 border-white shadow-md"
          />
          <h2 className="mt-4 text-xl font-bold text-gray-800">John Carter</h2>
          <p className="text-sm text-gray-600">User Interface Designer</p>

          <div className="mt-8 space-y-4 w-full text-center">
            <div className="flex justify-between items-center px-4 py-2 bg-gray-50 rounded-lg shadow-sm">
              <span className="text-gray-700 font-medium">Product Store</span>
              <span className="text-green-600 font-bold">56</span>
            </div>
            <div className="flex justify-between items-center px-4 py-2 bg-gray-50 rounded-lg shadow-sm">
              <span className="text-gray-700 font-medium">Product Sale</span>
              <span className="text-green-600 font-bold">32</span>
            </div>
            <div className="flex justify-between items-center px-4 py-2 bg-gray-50 rounded-lg shadow-sm">
              <span className="text-gray-700 font-medium">Demo Text</span>
              <span className="text-green-600 font-bold">11</span>
            </div>
          </div>

          <div className="mt-6 w-full space-y-2">
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
              View Public Profile
            </button>
            <button className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300">
              Favorites
            </button>
          </div>
        </div>

        {/* Right Section - Account Settings */}
        <div className="w-full md:w-2/3">
          {/* Tabs */}
          <div className="flex space-x-6 border-b pb-2">
            <button className="text-green-600 font-medium border-b-2 border-green-600">
              Account Settings
            </button>
            <button className="text-gray-600 hover:text-green-600">
              Security
            </button>
            <button className="text-gray-600 hover:text-green-600">
              Documents
            </button>
            <button className="text-gray-600 hover:text-green-600">
              Shipping
            </button>
            <button className="text-gray-600 hover:text-green-600">
              Notifications
            </button>
          </div>

          {/* Form */}
          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-700 font-medium">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="text-gray-700 font-medium">Last Name</label>
                <input
                  type="text"
                  placeholder="Carter"
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-700 font-medium">Phone Number</label>
                <input
                  type="text"
                  placeholder="+1234 5662"
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="text-gray-700 font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="user@example.com"
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div>
              <label className="text-gray-700 font-medium">Address</label>
              <input
                type="text"
                placeholder="Florida"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-700 font-medium">City</label>
                <input
                  type="text"
                  placeholder="West"
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="text-gray-700 font-medium">Country</label>
                <input
                  type="text"
                  placeholder="USA"
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <button className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
