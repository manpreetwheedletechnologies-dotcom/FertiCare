"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Heart, Stethoscope } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Counseling", path: "/counseling" },
    { name: "Consultations", path: "/consultations" },
    { name: "Wellness", path: "/wellness" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white backdrop-blur-md shadow-lg" : "bg-white shadow-md"
    }`}>
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
               <img src="logo.png" className="h-16 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4 bg-white rounded-xl shadow-lg p-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="block text-gray-700 hover:text-primary-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}