'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-amber-900/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-2xl font-bold text-white hover:text-amber-200 transition-colors tracking-wider"
            >
              KAMA
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link 
              href="/about" 
              className="text-white hover:text-amber-200 transition-colors text-sm uppercase tracking-wider font-medium relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/works" 
              className="text-white hover:text-amber-200 transition-colors text-sm uppercase tracking-wider font-medium relative group"
            >
              Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/press" 
              className="text-white hover:text-amber-200 transition-colors text-sm uppercase tracking-wider font-medium relative group"
            >
              Press
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-amber-200 transition-colors text-sm uppercase tracking-wider font-medium relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-amber-200 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden transition-all duration-300 ease-in-out`}
      >
        <div className="px-4 pt-4 pb-3 space-y-3 bg-amber-900/90 backdrop-blur-sm">
          <Link 
            href="/about" 
            className="block text-white hover:text-amber-200 transition-colors text-sm uppercase tracking-wider font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/works" 
            className="block text-white hover:text-amber-200 transition-colors text-sm uppercase tracking-wider font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Works
          </Link>
          <Link 
            href="/press" 
            className="block text-white hover:text-amber-200 transition-colors text-sm uppercase tracking-wider font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Press
          </Link>
          <Link 
            href="/contact" 
            className="block text-white hover:text-amber-200 transition-colors text-sm uppercase tracking-wider font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 