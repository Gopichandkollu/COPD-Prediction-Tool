'use client'; // Add this directive

import React from 'react';
import Link from 'next/link'; // Use Next.js Link
import { Home, Info, HelpCircle, MessageSquare, BarChart, Stethoscope } from 'lucide-react'; // Importing icons

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Stethoscope className="mr-2 h-8 w-8 text-white" /> {/* Using Stethoscope icon as a logo */}
          <Link href="/" className="text-white text-2xl font-bold">COPD Tool</Link> {/* Title as a link */}
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-blue-200 flex items-center transition duration-300">
              <Home className="mr-1" /> Home
            </Link>
          </li>
          <li>
            <Link href="/predict" className="text-white hover:text-blue-200 flex items-center transition duration-300">
              <BarChart className="mr-1" /> Prediction
            </Link>
          </li>
          <li>
            <Link href="/ai-chat" className="text-white hover:text-blue-200 flex items-center transition duration-300">
              <MessageSquare className="mr-1" /> AI Chat
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-blue-200 flex items-center transition duration-300">
              <Info className="mr-1" /> About
            </Link>
          </li>
          <li>
            <Link href="/help" className="text-white hover:text-blue-200 flex items-center transition duration-300">
              <HelpCircle className="mr-1" /> Help
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
