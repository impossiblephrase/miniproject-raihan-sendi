"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
   
  return (
    <footer className="bg-gray-900 py-4 text-sm">
      <div className="container mx-auto px-6 pt-7">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Company Info */}
          <div className="mb-6 md:mb-0">
            <div className="flex-1 text-center md:text-left">
               <Link href="/" className="flex md:justify-start">
                 <Image src="/eventure.png" 
                 width={150} 
                 height={150} 
                 alt="Logo"
                 />
               </Link>
            </div>            
        
            <p className="text-gray-400 mt-2 text-xs">
            Crafting Experiences, Creating Memories           
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm text-white font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm text-white font-semibold">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/testimonials" className="text-gray-400 hover:text-white">
                    Testimonials
                  </Link>
                </li>
                <li>
                <button
                  className="text-gray-400 hover:text-white">     
                  Contact Us
                </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm text-white font-semibold">Follow Us</h3>
              <div className="mt-4 flex space-x-4">
                <a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.46 2a9.32 9.32 0 0 1-2.89 1.1A4.52 4.52 0 0 0 16 0c-2.53 0-4.48 2.01-4.48 4.5 0 .35.04.7.12 1.03C7.69 5.43 4.07 3.62 1.64 1A4.5 4.5 0 0 0 3 7.3a4.36 4.36 0 0 1-2.03-.56v.06c0 2.16 1.53 3.95 3.56 4.36a4.49 4.49 0 0 1-2.02.08 4.52 4.52 0 0 0 4.23 3.14A9.05 9.05 0 0 1 0 19a12.8 12.8 0 0 0 6.92 2c8.29 0 12.8-6.86 12.8-12.8 0-.19-.01-.37-.02-.56A9.18 9.18 0 0 0 23 3z" />
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.406.595 24 1.325 24H12.82V14.708h-3.1v-3.62h3.1V8.413c0-3.066 1.87-4.74 4.601-4.74 1.31 0 2.437.097 2.764.141v3.204H18.68c-1.487 0-1.775.707-1.775 1.742v2.284h3.548l-.463 3.62h-3.085V24h6.054c.729 0 1.324-.594 1.324-1.324V1.325C24 .595 23.406 0 22.675 0" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.024-3.033-1.848-3.033-1.852 0-2.136 1.445-2.136 2.939v5.663H9.354V9.749h3.414v1.463h.047c.475-.899 1.635-1.848 3.368-1.848 3.6 0 4.266 2.369 4.266 5.451v5.637zM5.337 8.287a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zm1.782 12.165H3.554V9.749h3.565v10.703zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.543C0 23.226.791 24 1.771 24h20.451C23.205 24 24 23.226 24 22.271V1.729C24 .774 23.205 0 22.225 0" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 text-center text-xs font-serif text-gray-400">
          <p>&copy; {new Date().getFullYear()} eventure by Raihan & Sendi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer }
