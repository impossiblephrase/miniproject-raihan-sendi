"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MenuIcon, XIcon, ChevronDoubleDownIcon, UserIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu
  const [menuOpen, setMenuOpen] = useState(false); // Slide-in menu
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
  const dropdownRef1 = useRef<HTMLDivElement>(null);
  const dropdownRef2 = useRef<HTMLDivElement>(null);
  const dropdownRef3 = useRef<HTMLDivElement>(null);
  const dropdownRef4 = useRef<HTMLDivElement>(null);

  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
    setIsDropdownOpen2(false); // Close the other dropdown
    setIsDropdownOpen3(false); 
    setIsDropdownOpen4(false); 
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    setIsDropdownOpen1(false); // Close the other dropdown
    setIsDropdownOpen3(false); 
    setIsDropdownOpen4(false); 
  };

  const toggleDropdown3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3);
    setIsDropdownOpen1(false); // Close the other dropdown
    setIsDropdownOpen2(false); 
    setIsDropdownOpen4(false); 
  };

  const toggleDropdown4 = () => {
    setIsDropdownOpen4(!isDropdownOpen4);
    setIsDropdownOpen1(false); // Close the other dropdown
    setIsDropdownOpen2(false); 
    setIsDropdownOpen3(false); 
  };

  // Close all dropdowns if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef1.current &&
        !dropdownRef1.current.contains(event.target as Node) &&
        dropdownRef2.current &&
        !dropdownRef2.current.contains(event.target as Node) &&
        dropdownRef3.current &&
        !dropdownRef3.current.contains(event.target as Node) &&
        dropdownRef4.current &&
        !dropdownRef4.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen1(false);
        setIsDropdownOpen2(false);
        setIsDropdownOpen3(false);
        setIsDropdownOpen4(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 p-3 z-50 shadow-md">
      <div className="flex w-full items-center justify-between">

        {/* Mobile Menu Button (Left for Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {/* Logo (Centered for Mobile) */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block"> {/* Wrapping the logo in a smaller container*/}
          <Link href="/" className="flex justify-center md:justify-start">
          <Image src="/eventure.png" 
                 width={120} 
                 height={120} 
                 alt="Logo"
                 />
          </Link>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4 text-sm">
          <Link href="/concerts" className="block text-center bg-transparent text-white py-2 px-2 rounded-md hover:bg-gray-500 focus:outline-non">
            Concerts
          </Link>
          <Link href="/search-events" className="block text-center bg-transparent text-white py-2 px-2 rounded-md hover:bg-gray-500 focus:outline-non">
            Events
          </Link>

            {/* Dropdown Trigger 1 */}
            <div className="relative" ref={dropdownRef1}>
              <button
                onClick={toggleDropdown1}
                className="block text-center bg-transparent text-white py-2 px-2 rounded-md hover:bg-gray-500 focus:outline-none"
              >
                Learn More ▾
              </button>

              {/* Dropdown Menu1 */}
              {isDropdownOpen1 && (
               <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                 <Link href="/services/service1">
                   <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                     Service 1
                   </span>
                 </Link>
                 <Link href="/services/service2">
                   <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                     Service 2
                   </span>
                 </Link>
                 <Link href="/services/service3">
                   <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                     Service 3
                   </span>
                 </Link>
               </div>
              )}
            </div>

            {/* Dropdown Trigger 2 */}
            <div className="relative" ref={dropdownRef2}>
              <button
                onClick={toggleDropdown2}
                className="block text-center bg-transparent text-white py-2 px-2 rounded-md hover:bg-gray-500 focus:outline-none"
              >
                About Us ▾
              </button>

              {/* Dropdown Menu 2 */}
              {isDropdownOpen2 && (
               <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                 <Link href="/services/service1">
                   <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                     Service 1
                   </span>
                 </Link>
                 <Link href="/services/service2">
                   <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                     Service 2
                   </span>
                 </Link>
                 <Link href="/services/service3">
                   <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                     Service 3
                   </span>
                 </Link>
               </div>
              )}
            </div>

          {/* Auth Buttons */}
          <div className="flex px-9">
            <Link href="/login" className="block text-center text-xs bg-gray-700 text-white px-4 py-2 m-2 rounded hover:bg-gray-400 hover:text-black">
              Log In
            </Link>
            <Link href="/signup" className="block text-center text-xs bg-gray-700 text-white px-4 py-2 m-2 rounded hover:bg-gray-400 hover:text-black">
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
          <div
            className={`fixed top-0 left-0 w-72 h-full bg-gray-800 text-white shadow-lg z-50 transform transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
        
          <div className="text-sm">
            <h1 className="shadow-md p-3 shadow-gray-600">NAVIGATION</h1> <br />
            <Link href="/search-events" className="block bg-transparent p-3 w-full text-left text-white rounded-md hover:bg-gray-500 focus:outline-none">
              Events
            </Link>
            <Link href="/create-event" className="block bg-transparent p-3 w-full text-left text-white rounded-md hover:bg-gray-500 focus:outline-none">
              Create Event
            </Link>
            
            {/* Dropdown Trigger 3 */}
            <div className="relative" ref={dropdownRef3}>
              <button
                onClick={toggleDropdown3}
                className="block bg-transparent p-3 w-full text-left text-white rounded-md hover:bg-gray-500 focus:outline-none"
              >
                Learn More ▾
              </button>

              {/* Dropdown Menu 3 */}
              {isDropdownOpen3 && (
               <div className="absolute mt-2 w-full bg-gray-800 border border-gray-200 rounded-md shadow-lg z-10">
                 <Link href="/services/service1">
                   <span className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black cursor-pointer">
                     Service 1
                   </span>
                 </Link>
                 <Link href="/services/service2">
                   <span className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black cursor-pointer">
                     Service 2
                   </span>
                 </Link>
                 <Link href="/services/service3">
                   <span className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black cursor-pointer">
                     Service 3
                   </span>
                 </Link>
               </div>
              )}
            </div>

             {/* Dropdown Trigger 4 */}
             <div className="relative" ref={dropdownRef4}>
              <button
                onClick={toggleDropdown4}
                className="block bg-transparent p-3 w-full text-left text-white rounded-md hover:bg-gray-500 focus:outline-none"
              >
                About Us ▾
              </button>

              {/* Dropdown Menu 4 */}
              {isDropdownOpen4 && (
               <div className="absolute mt-2 w-full bg-gray-800 border border-gray-200 rounded-md shadow-lg z-10">
                 <Link href="/services/service1">
                   <span className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black cursor-pointer">
                     Service 1
                   </span>
                 </Link>
                 <Link href="/services/service2">
                   <span className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black cursor-pointer">
                     Service 2
                   </span>
                 </Link>
                 <Link href="/services/service3">
                   <span className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black cursor-pointer">
                     Service 3
                   </span>
                 </Link>
               </div>
              )}
            </div>
         </div>
       </div>

        {/* Slide-In Menu Button (Right for All Screens) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white md:text-right focus:outline-none">
            {/* User icon for mobile screens */}
            <UserIcon className="h-5 w-5 block sm:hidden" />
            {/* Chevron icon for larger screens */}
            <ChevronDoubleDownIcon className="h-4 w-4 hidden sm:block" />
        </button>
      </div>
    
        {/* Slide-In Menu */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
         <div
           className={`fixed top-0 right-0 w-72 h-full bg-gray-800 text-white shadow-lg z-50 transform transition-transform ${
             menuOpen ? "translate-x-0" : "translate-x-full"
           }`}
          >
        {/* User Info */}
        <div className="p-3 text-sm">
          <div className="flex items-center space-x-4 mt-6">
            <Image
              src="/user.webp"
              alt="User Profile"
              width={110}
              height={110}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">Hello, Guest</p>
            </div>
          </div>

          {/* Login & Sign Up */}
          <div className="mt-6 border-t border-gray-600 pt-4">
            <Link
              href="/login"
              className="block text-center bg-gray-700 text-white py-2 rounded-md hover:bg-gray-500"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="block text-center bg-gray-700 text-white py-2 rounded-md hover:bg-gray-500 mt-2"
            >
              Sign Up
            </Link>
          </div>


          {/* Language Switch */}
          <div className="mt-4 border-t border-gray-600">
            <div className="flex justify-center space-x-4 mt-2">
              <Link href="?lang=en" className="block text-center bg-transparent text-white py-2 px-4 rounded-md hover:bg-gray-500">
                English
              </Link>
              <Link href="?lang=id" className="block text-center bg-transparent text-white py-2 px-4 rounded-md hover:bg-gray-500">
                Bahasa
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="mt-3 border-t border-gray-600 pt-4 space-y-4">
            <li>
              <Link href="/profile" className="block text-left bg-transparent text-white py-2 px-4 rounded-md hover:bg-gray-500">
                My Profile
              </Link>
            </li>
            <li>
              <Link href="/tickets" className="block text-left bg-transparent text-white py-2 px-4 rounded-md hover:bg-gray-500">
                My Ticket History
              </Link>
            </li>
            <li>
              <Link href="/my-events" className="block text-left bg-transparent text-white py-2 px-4 rounded-md hover:bg-gray-500">
                My Events
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Header }
