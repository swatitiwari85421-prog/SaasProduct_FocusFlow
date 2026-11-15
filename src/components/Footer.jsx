import React from 'react'
import { Zap } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'

const Footer = () => {

  return (

    <footer className="bg-gray-30 text-white px-6 md:px-16 pt-16 pb-8 border m-2 border-white/20">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* Logo */}

        <div>

          <div className="flex items-center gap-2 mb-5">

            <Zap size={27} className="text-violet-500" fill="#8b5cf6"/>

            <h2 className="text-2xl font-bold">
              FocusFlow
            </h2>

          </div>

          <p className="text-gray-400 text-sm leading-7">
            Focus better, work smarter and achieve
            more every day with FocusFlow.
          </p>

          <div className="flex gap-4 mt-6 text-gray-400">

            <a href="https://github.com" aria-label="GitHub">
             <FaGithub size={20}/>
            </a>

            <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram size={20}/>
            </a>

            <a href="https://linkedin.com" aria-label="LinkedIn">
            <FaLinkedin size={20}/>
            </a>

          </div>

        </div>

        {/* Product */}

        <div>

          <h3 className="font-bold text-lg mb-5">
            Product
          </h3>

          <div className="flex flex-col gap-4 text-gray-400 text-sm">

            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#how-it-works" className="hover:text-white">How It Works</a>

          </div>

        </div>

        {/* Company */}

        <div>

          <h3 className="font-bold text-lg mb-5">
            Company
          </h3>

          <div className="flex flex-col gap-4 text-gray-400 text-sm">

            <a href="#home" className="hover:text-white">About Us</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#home" className="hover:text-white">Home</a>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="font-bold text-lg mb-5">
            Get In Touch
          </h3>

          <p className="text-gray-400 text-sm leading-7">
            Have questions about FocusFlow?
          </p>

          <a
            href="#contact"
            className="inline-block mt-5 text-violet-400 hover:text-white"
          >
            Contact Us →
          </a>

        </div>

      </div>

      <div className="border-t border-gray-800 mt-14 pt-7 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">

        <p>© 2026 FocusFlow. All rights reserved.</p>

        <p>Made with ❤️ for better productivity.</p>

      </div>

    </footer>

  )
}

export default Footer