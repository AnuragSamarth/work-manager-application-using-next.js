"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import UserContext from "../context/userContext";
import { UserPen } from "lucide-react";

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const context = useContext(UserContext);
  console.log(context.user);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
            >
              Work Management
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/add-task">Add Task</NavLink>
              <NavLink href="/all-task">All Tasks</NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
            {context.user ? (
                <div className="flex items-center gap-5">
                  <UserPen size={35} />
                  <Link
                    href="#!"
                    className="block w-full text-center bg-blue-500 text-white hover:bg-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors mt-2"
                  >
                    Logout
                  </Link>
                </div>
              ) : (
                <div className="ml-4 flex items-center md:ml-6">
                  <Link
                    href="/login"
                    className="block w-full text-center text-gray-600 hover:bg-gray-100 hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/sign-up"
                    className="block w-full text-center bg-blue-500 text-white hover:bg-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors mt-2"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/add-task">Add Task</MobileNavLink>
            <MobileNavLink href="/all-task">All Tasks</MobileNavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              {context.user ? (
                <div>
                  <UserPen />
                </div>
              ) : (
                <div>
                  <Link
                    href="/login"
                    className="block w-full text-center text-gray-600 hover:bg-gray-100 hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/sign-up"
                    className="block w-full text-center bg-blue-500 text-white hover:bg-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors mt-2"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:bg-gray-100 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:bg-gray-100 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors"
    >
      {children}
    </Link>
  );
}
