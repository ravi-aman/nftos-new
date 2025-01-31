import Link from "next/link"
import React from 'react'
import { Linkedin, LinkedinIcon } from "lucide-react"
function Navbar() {
    return (
        <div>
            {/* Navigation */}
            <nav className="border rounded-full px-6 py-4 mx-4 mt-4 flex items-center justify-between">
                {/* Logo */}
                <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center">
                    <span className="text-white font-bold text-xl">T</span>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="#" className="text-gray-800 hover:text-gray-600">
                        HOME
                    </Link>
                    <Link href="#" className="text-gray-800 hover:text-gray-600">
                        WHO WE ARE
                    </Link>
                    <Link href="#" className="text-gray-800 hover:text-gray-600">
                        OUR BUSINESS
                    </Link>
                    <Link href="#" className="text-gray-800 hover:text-gray-600">
                        OUR TEAM
                    </Link>
                    <Link href="#" className="text-gray-800 hover:text-gray-600">
                        NEWS
                    </Link>
                    <Link href="#" className="text-gray-800 hover:text-gray-600">
                        JOBS
                    </Link>
                </div>

                {/* LinkedIn Icon */}
                <Link href="#" className="text-blue-600 hover:text-blue-700">
                    <LinkedinIcon className="w-6 h-6" />
                </Link>
            </nav>
        </div>
    )
}

export default Navbar
