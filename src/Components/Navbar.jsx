import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


const categories = [
  { name: "Oversized", link: "/oversized", description: "Loose and comfortable fit" },
  { name: "WindCheater", link: "/windcheater", description: "Light and breathable jackets" },
  { name: "Cargo Pants", link: "/cargo-pants", description: "Practical pants with large pockets" },
  { name: "Socks", link: "/socks", description: "Comfy and stylish socks" },
  { name: "Shorts", link: "/shorts", description: "Cool and casual shorts" },
  { name: "Relaxed T-Shirts", link: "/relaxed-tshirts", description: "Relaxed fit tees for comfort" },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-semibold text-gray-800 hover:text-primary transition font-inter"
        >
          ECOMMERCE
        </a>

        {/* Left Side: Home and Categories */}
        <div className="flex items-center space-x-6">
          <a
            href="/"
            className="text-sm text-gray-800 hover:bg-gray-100 px-2 py-1 rounded-md transition font-inter"
          >
            Home
          </a>

          <Menu as="div" className="relative">
            <Menu.Button className="text-sm text-gray-800 hover:bg-gray-100 px-2 py-1 rounded-md transition font-inter font-bold">
              Categories
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2">
                {categories.map((category, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <div
                        className={`block px-4 py-2 text-xs ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-600"
                        } transition`}
                      >
                        <a href={category.link} className="block">{category.name}</a>
                        <p className="text-xs text-gray-500">{category.description}</p>
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        {/* Center Section: On Sale, New Arrivals, Cart, Brands */}
        <div className="flex items-center space-x-6">
          <a href="/on-sale" className="text-sm text-gray-800 hover:bg-gray-100 px-2 py-1 rounded-md transition font-inter">
            On Sale
          </a>
          <Link to="/NewArrivals" className="text-sm text-gray-800 hover:bg-gray-100 px-2 py-1 rounded-md transition font-inter">
            New Arrivals
          </Link>


          {/* Brands below Cart */}
          <a href="/brands" className="text-sm text-gray-800 hover:bg-gray-100 px-2 py-1 rounded-md transition font-inter">
            Brands
          </a>
        </div>

        {/* Right Side: Search Bar */}
        <div className="hidden md:flex w-1/3 relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full pl-10 pr-5 py-2 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition font-inter text-sm"
          />
        </div>

        
          {/* Cart Icon */}
          <Link to="manageOrders" className="text-gray-800 hover:bg-gray-100 p-2 rounded-md transition font-inter">
            <FaShoppingCart size={20} />
          </Link>

        {/* Profile Dropdown */}
        <div className="flex items-center space-x-4">
          <Menu as="div" className="relative">
            <Menu.Button className="text-gray-800 hover:bg-gray-100 p-2 rounded-md transition font-inter">
              <FaUser size={20} />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/account"
                      className={`block px-4 py-2 text-xs ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-600"
                      } transition`}
                    >
                      Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/orders"
                      className={`block px-4 py-2 text-xs ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-600"
                      } transition`}
                    >
                      Orders
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/logout"
                      className={`block px-4 py-2 text-xs text-red-600 ${
                        active ? "bg-gray-100" : ""
                      } transition`}
                    >
                      Logout
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
