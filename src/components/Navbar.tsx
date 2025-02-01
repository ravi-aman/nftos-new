"use client"

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { LinkedinIcon, Menu, X } from "lucide-react";
import { gsap } from "gsap";

function Navbar() {
    const navRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (navRef.current) {
            gsap.from(navRef.current, {
                y: -100,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            });
        }
    }, []);

    useEffect(() => {
        if (mobileMenuRef.current) {
            if (menuOpen) {
                gsap.to(mobileMenuRef.current, {
                    x: 0,
                    duration: 0.5,
                    ease: "power2.out"
                });
            } else {
                gsap.to(mobileMenuRef.current, {
                    x: "-100%",
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        }
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav
                ref={navRef}
                className="fixed top-0 left-0 right-0 z-50 bg-white border rounded-full px-6 py-4 mx-4 mt-4 flex items-center justify-between shadow-sm"
            >
                <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center">
                    <span className="text-white font-bold text-xl">T</span>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-gray-800 hover:text-gray-600">
                        HOME
                    </Link>
                    <Link href="/about" className="text-gray-800 hover:text-gray-600">
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

                <div className="flex items-center space-x-4">
                    <Link
                        href="#"
                        className="text-blue-600 hover:text-blue-700 hidden md:block"
                    >
                        <LinkedinIcon className="w-6 h-6" />
                    </Link>
                    <button className="md:hidden" onClick={toggleMenu}>
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            <div
                ref={mobileMenuRef}
                className="fixed top-0 left-0 w-2/3 max-w-xs h-screen bg-white shadow-lg z-50 transform -translate-x-full"
            >
                <div className="px-6 py-4 flex flex-col space-y-6 mt-16">
                    <Link href="/" onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-gray-600">
                        HOME
                    </Link>
                    <Link href="/about" onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-gray-600">
                        WHO WE ARE
                    </Link>
                    <Link href="#" onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-gray-600">
                        OUR BUSINESS
                    </Link>
                    <Link href="#" onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-gray-600">
                        OUR TEAM
                    </Link>
                    <Link href="#" onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-gray-600">
                        NEWS
                    </Link>
                    <Link href="#" onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-gray-600">
                        JOBS
                    </Link>
                    <Link href="#" onClick={() => setMenuOpen(false)} className="text-blue-600 hover:text-blue-700">
                        <LinkedinIcon className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;
