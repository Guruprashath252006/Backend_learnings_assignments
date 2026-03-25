import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="border-b-2 border-current sticky top-0 z-50">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-black tracking-tight uppercase">
            Guruprashath
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="font-bold hover:underline">
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
