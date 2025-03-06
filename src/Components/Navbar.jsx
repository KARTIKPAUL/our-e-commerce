import React, { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Oversized",
    link: "/oversized",
    description: "Loose and comfortable fit",
  },
  {
    name: "WindCheater",
    link: "/wind-cheater",
    description: "Light and breathable jackets",
  },
  {
    name: "Cargo Pants",
    link: "/cargo-pants",
    description: "Practical pants with large pockets",
  },
  { name: "Socks", link: "/socks", description: "Comfy and stylish socks" },
  { name: "Shorts", link: "/shorts", description: "Cool and casual shorts" },
  {
    name: "Relaxed T-Shirts",
    link: "/relaxed-tshirts",
    description: "Relaxed fit tees for comfort",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesExpanded, setIsCategoriesExpanded] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".mobile-menu")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold text-gray-800 hover:text-primary transition font-inter"
        >
          ECOMMERCE
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-sm text-gray-800 hover:bg-gray-100 px-2 py-1 rounded-md transition font-inter"
          >
            Home
          </Link>

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
                        <Link to={category.link} className="block">
                          {category.name}
                        </Link>
                        <p className="text-xs text-gray-500">
                          {category.description}
                        </p>
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>

          <Link
            to="/OnSale"
            className="text-sm text-gray-800 hover:bg-gray-100 px-2 py-1 rounded-md transition font-inter"
          >
            On Sale
          </Link>

          <Link
            to="/NewArrivals"
            className="text-sm text-gray-800 hover:bg-gray-100 px-2 py-1 rounded-md transition font-inter"
          >
            New Arrivals
          </Link>

          <Link
            to="/Brands"
            className="text-sm text-gray-800 hover:bg-gray-100 px-2 py-1 rounded-md transition font-inter"
          >
            Brands
          </Link>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="w-1/3 relative">
            <FaSearch
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10 pr-5 py-2 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition font-inter text-sm"
            />
          </div>

          <Link
            to="/manageOrders"
            className="text-gray-800 hover:bg-gray-100 p-2 rounded-md transition font-inter"
          >
            <FaShoppingCart size={20} />
          </Link>

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
                    <Link
                      to="/manageOrders"
                      className={`block px-4 py-2 text-xs ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-600"
                      } transition`}
                    >
                      Orders
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`block px-4 py-2 text-xs text-red-600 ${
                        active ? "bg-gray-100" : ""
                      } transition w-full text-left`}
                    >
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 hover:bg-gray-100 p-2 rounded-md transition font-inter"
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {/* {isMobileMenuOpen && (
          <div className="mobile-menu fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-lg p-6 overflow-y-auto">
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-800 hover:bg-gray-100 p-2 rounded-md"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <div className="mb-4">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
              </div>

              <nav className="space-y-2">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  Home
                </Link>

                <div>
                  <button
                    onClick={() => setIsCategoriesExpanded(!isCategoriesExpanded)}
                    className="w-full flex justify-between items-center py-2 px-4 text-sm text-gray-800 hover:bg-gray-100 rounded-md"
                  >
                    <span>Categories</span>
                    <span>{isCategoriesExpanded ? "-" : "+"}</span>
                  </button>
                  {isCategoriesExpanded && (
                    <div className="pl-4">
                      {categories.map((category) => (
                        <Link
                          key={category.link}
                          to={category.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
                        >
                          <div>{category.name}</div>
                          <div className="text-xs text-gray-500">{category.description}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/OnSale"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  On Sale
                </Link>
                <Link
                  to="/NewArrivals"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  New Arrivals
                </Link>
                <Link
                  to="/Brands"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  Brands
                </Link>
                <Link
                  to="/manageOrders"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100 rounded-md flex items-center gap-2"
                >
                  <FaShoppingCart size={16} /> Cart
                </Link>

                <div className="pt-4 mt-4 border-t border-gray-200">
                  <Link
                    to="/account"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100 rounded-md"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/manageOrders"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100 rounded-md"
                  >
                    Orders
                  </Link>
                  <button className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 rounded-md w-full text-left">
                    Logout
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )} */}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu fixed inset-0 bg-black bg-opacity-50 z-50">
            <Transition
              as={Fragment}
              show={isMobileMenuOpen}
              enter="transition ease-out duration-300"
              enterFrom="opacity-0 translate-x-full"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-in duration-200"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full"
            >
              <div className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-lg p-6 overflow-y-auto">
                {/* Close button and rest of the menu content */}
              </div>
            </Transition>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
