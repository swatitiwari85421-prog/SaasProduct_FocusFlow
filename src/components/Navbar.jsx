import React from 'react'
import { Zap, Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="w-full bg-gray/10 backdrop-blur-xl px-6 md:px-16 py-5 flex justify-between items-center shadow-sm">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <Zap size={28} className="text-violet-600" fill="#7c3aed" />
        <h1 className="text-2xl font-bold text-gray-900">
          FocusFlow
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">

        <a href="#home" className="hover:text-violet-600">Home</a>
        <a href="#features" className="hover:text-violet-600">Features</a>
        <a href="#how-it-works" className="hover:text-violet-600">How It Works</a>
        <a href="#pricing" className="hover:text-violet-600">Pricing</a>
        <a href="#contact" className="hover:text-violet-600">Contact</a>

      </div>

      {/* Button */}
      <a
        href="#contact"
        className="hidden md:block bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition"
      >
        Get Started
      </a>

      <button className="md:hidden text-gray-800" aria-label="Menu">
        <Menu size={27} />
      </button>

    </nav>
  )
}

export default Navbar