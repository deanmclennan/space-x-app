// NavBar component
"use client";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  // Mobile NavBar Modal

  const [isOpen, setIsOpen] = useState(false);

  const genericHamburgerLine = `h-[3px] w-6 my-[2px] rounded-full bg-white transition ease transform duration-300`;

  const openHandler = () => {
    console.log("clicked");
    if (!isOpen) {
      setIsOpen(true);
      console.log(isOpen);
    } else {
      setIsOpen(false);
    }
  };

  //   function checkMenuStatus() {
  //     setInterval(() => {
  //       console.log(isOpen);
  //     }, 1000);
  //   }

  //   checkMenuStatus();

  return (
    <nav className=" bg-black">
      {/* Mobile NavBar */}
      <div className="flex justify-between items-center px-4 py-3 sm:hidden">
        <div>
          <Image
            src="/space-x-logo.png"
            alt="Workflow"
            width={150}
            height={50}
          />
        </div>
        <div className="-mr-2">
          {/* <button
            onClick={() => {
              if (!isOpen) {
                setIsOpen(true);
                console.log(isOpen);
              } else {
                setIsOpen(false);
              }
            }}
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
          </button> */}
          <button
            className="flex flex-col h-12 w-12 border-2  border-black rounded justify-center items-center group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-[2px] -translate-x-1 opacity-50 mt-1 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-3 -translate-x-1 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>
        </div>
      </div>
      {/* Modal Navbar */}
      <div
        className={`${
          isOpen ? "absolute " : "hidden"
        } sm:hidden w-full bg-black border-b-2 border-gray-700 `}
      >
        <div className="px-2 pt-2 pb-3 ">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Product
          </a>
          <a
            href="#"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Features
          </a>
          <a
            href="#"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Marketplace
          </a>
          <a
            href="#"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Company
          </a>
        </div>
      </div>

      {/* Desktop NavBar */}
      <div className="hidden container mx-auto sm:block sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-700 px-4 py-3">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Image
              src="/space-x-logo.png"
              alt="Workflow"
              width={150}
              height={50}
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
