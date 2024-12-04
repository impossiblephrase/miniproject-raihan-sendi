import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutShort() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 text-center pb-10 pt-10 px-4">
      <div className="max-w-4xl">
        <div className="flex-1 text-center">
          <div className="inline-block">
          <Link href="/" className="flex justify-center">
          <Image src="/eventure.png" 
                 width={180} 
                 height={180} 
                 alt="Logo"
                 />
          </Link>
          </div>
        </div>
        <p className="mt-4 text-base text-gray-600">
          Eventure is an innovative event management and online ticketing
          platform designed to simplify your event planning experience.
          Effortlessly create, manage, sell, and validate tickets for any event
          with ease.
        </p>

        <ul className="mt-6 text-gray-600 text-center space-y-2">
          <li>🎫 Event Tickets</li>
          <li>✅ Seamless Check-In</li>
          <li>📱 QR Code Scanning</li>
          <li>🪑 Registration & Seating Charts</li>
          <li>🧑‍🔬 Facial Recognition</li>
          <li>📊 Capacity Management</li>
          <li>🎉 Raffle System</li>
          <li>🚪 Access Control & Gate Management</li>
          <li>...and More!</li>
        </ul>

        <div className="mt-8">
          <Link
            href="/about"
            className="px-6 py-3 bg-cyan-700 hover:bg-cyan-500 text-white font-medium rounded-lg shadow-md transition"
          >
            More About Eventure
          </Link>
        </div>
      </div>
    </div>
  );
};

