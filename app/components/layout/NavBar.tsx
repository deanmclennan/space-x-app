// NavBar component
"use client";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  // Mobile NavBar Modal

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-black">
      {/* Mobile NavBar */}
      <div className="flex justify-between items-center px-4 py-3 sm:hidden">
        <div className=" overflow-hidden">
          <Image
            src="/space-x-logo.png"
            alt="Workflow"
            width={150}
            height={50}
          />
        </div>
        <div className="-mr-2">
          <button
            type="button"
            className="bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                className="inline-flex"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* Modal Navbar */}
        </div>
      </div>
      {/* Desktop NavBar */}
      <div className="hidden sm:block sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-700 px-4 py-3">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Image
              src="/space-x-logo.svg"
              alt="Workflow"
              width={100}
              height={100}
            />
          </div>
          <div className="flex justify-end">
            <a
              href="#"
              className="text-base leading-6 text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
            >
              Product
            </a>
            <a
              href="#"
              className="ml-8 text-base leading-6 text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
            >
              Features
            </a>
            <a
              href="#"
              className="ml-8 text-base leading-6 text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
            >
              Marketplace
            </a>
            <a
              href="#"
              className="ml-8 text-base leading-6 text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
            >
              Company
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
