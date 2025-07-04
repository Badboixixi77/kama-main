"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-blue-950/90 backdrop-blur-sm border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-emerald-400">
              Kama
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-emerald-300 hover:text-emerald-100 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/works"
                className="text-emerald-300 hover:text-emerald-100 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Works
              </Link>
              <Link
                href="/about"
                className="text-emerald-300 hover:text-emerald-100 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/press"
                className="text-emerald-300 hover:text-emerald-100 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Press
              </Link>
              <Link
                href="/contact"
                className="text-emerald-300 hover:text-emerald-100 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-emerald-300 hover:text-emerald-100 hover:bg-blue-900 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-950/95">
            <Link
              href="/"
              className="text-emerald-300 hover:text-emerald-100 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/works"
              className="text-emerald-300 hover:text-emerald-100 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Works
            </Link>
            <Link
              href="/about"
              className="text-emerald-300 hover:text-emerald-100 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/press"
              className="text-emerald-300 hover:text-emerald-100 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Press
            </Link>
            <Link
              href="/contact"
              className="text-emerald-300 hover:text-emerald-100 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 