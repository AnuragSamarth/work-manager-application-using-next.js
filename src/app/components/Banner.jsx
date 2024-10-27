import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Manage Your Work Efficiently</h1>
        <p className="text-xl mb-8">Streamline your tasks and boost productivity with our powerful work management tool</p>
      <Link href="/add-task">
        <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-blue-100 transition duration-300">
          Get Started
        </button>
      </Link>
      </div>
    </div>
  );
};

export default Banner;