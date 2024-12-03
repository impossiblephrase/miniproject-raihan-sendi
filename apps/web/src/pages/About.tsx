import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 text-center pt-24 pb-32 px-4 py-8">
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
      <div className="max-w-3xl">
        <p className="text-base text-gray-700 mb-4">
          Eventure is a leading event management and online ticketing platform dedicated to streamlining your event planning process. Our comprehensive suite of tools empowers you to effortlessly create, manage, sell, and validate tickets for any event, ensuring a seamless experience for both organizers and attendees.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
        <p className="text-base text-gray-700 mb-4">
          At Eventure, our mission is to revolutionize the event industry by providing innovative solutions that enhance efficiency, engagement, and accessibility. We strive to make event management simpler and more effective, enabling organizers to focus on delivering exceptional experiences.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Services</h2>
        <ul className="text-base text-gray-700 list-disc list-inside mb-4">
          <li>🎫 Comprehensive Ticketing Solutions</li>
          <li>✅ Seamless Check-In Processes</li>
          <li>📱 Advanced QR Code Scanning</li>
          <li>🪑 Customizable Seating Charts</li>
          <li>🧑‍🔬 Facial Recognition Technology</li>
          <li>📊 Real-Time Capacity Management</li>
          <li>🎉 Interactive Raffle Systems</li>
          <li>🚪 Robust Access Control & Gate Management</li>
          <li>...and much more!</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Choose Eventure?</h2>
        <p className="text-base text-gray-700 mb-4">
          With a proven track record of success across various event types—including concerts, seminars, sports events, and exhibitions—Eventure is your trusted partner in event management. Our platform is designed to handle events of all sizes, ensuring a professional and efficient experience every time.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Get in Touch</h2>
        <p className="text-base text-gray-700 mb-4">
          Have questions or need assistance? Our dedicated support team is here to help. <br/> Contact us at 
          <Link href="mailto:support@eventure.com" className="text-blue-600 hover:underline"> support@eventure.com</Link> or call us at (123) 456-7890.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="px-6 py-3 bg-cyan-700 hover:bg-cyan-500 text-white font-medium rounded-lg shadow-md transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

