"use client";

import React, { useState } from "react";
import { DM_Sans } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const dm = DM_Sans({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
});

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="lg:px-8 px-4 bg-transparent border-b-2 border-[#EEE] flex flex-wrap items-center py-4 shadow-md">
            <div className="flex-1 flex justify-between items-center">
                <a href="#" className="text-xl">
                    <img className="w-1/2 md:w-full" src="/logo.svg" alt="Logo" />
                </a>
            </div>

            {/* Hamburger Button */}
            <button
                className="md:hidden block focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg
                    className="w-8 h-8 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    {isOpen ? (
                        <path
                            fillRule="evenodd"
                            d="M4.293 6.707a1 1 0 011.414 0L10 11.086l4.293-4.379a1 1 0 011.414 1.414l-5 5.086a1 1 0 01-1.414 0l-5-5.086a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    ) : (
                        <path
                            fillRule="evenodd"
                            d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2z"
                            clipRule="evenodd"
                        />
                    )}
                </svg>
            </button>

            {/* Navigation Links */}
            <div className="hidden md:flex md:items-center md:w-auto w-full">
                <nav>
                    <ul
                        className={`md:flex items-center ${dm.className} justify-between text-base lg:text-2xl font-normal gap-5 text-white`}
                    >
                        <li>
                            <a className="md:p-4 py-3 px-0 block" href="#">Home</a>
                        </li>
                        <li>
                            <a className="md:p-4 py-3 px-0 block" href="#">About</a>
                        </li>
                        <li>
                            <a className="md:p-4 py-3 px-0 block" href="#">Services</a>
                        </li>
                        <li>
                            <a className="md:p-4 py-3 px-0 block" href="#">Pricing</a>
                        </li>
                        <li>
                            <a className="md:p-4 py-3 px-0 block" href="#">Review</a>
                        </li>
                        <li>
                            <a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">Careers</a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mobile Menu (Animated) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-16 left-0 w-full bg-white/5 backdrop-blur-lg text-white p-5 shadow-lg md:hidden"
                    >
                        <ul className="flex flex-col gap-5 text-lg">
                            <li>
                                <a className="block" href="#">Home</a>
                            </li>
                            <li>
                                <a className="block" href="#">About</a>
                            </li>
                            <li>
                                <a className="block" href="#">Services</a>
                            </li>
                            <li>
                                <a className="block" href="#">Pricing</a>
                            </li>
                            <li>
                                <a className="block" href="#">Review</a>
                            </li>
                            <li>
                                <a className="block" href="#">Careers</a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
