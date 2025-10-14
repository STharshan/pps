import React from 'react';
import { Activity, Twitter, Instagram, Music2, Mail, ExternalLink, Facebook } from 'lucide-react';

export default function Footer() {
    const sections = [
        { title: 'Home', href: '#home' },
        { title: 'About', href: '#about' },
        { title: 'Services', href: '#services' },
        { title: 'Client', href: '#testimonials' },
        { title: 'Contact', href: '#contact' }
    ];

    const socials = [
        { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/ppsgroupinc/' },
        { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/ppsgroupinc/' },
        { name: 'Twitter', icon: Twitter, href: 'https://x.com/ppsgroupinc/' }
    ];

    return (
        <footer className="bg-black text-white font-poppins">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 mb-12">

                    {/* Left Section - Brand Info */}
                    <div className="col-span-1">
                        <div className="text-black mb-6">
                            <img
                                src="/logo.png" // Replace with your logo image path
                                alt="PPS Group Logo"
                                className="w-40 h-auto object-contain mx-auto" // Increased size and centered
                            />
                        </div>

                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 text-center sm:text-left">
                            Improve your triathlon performance with personalized training plans guided by an experienced coach committed to your success.
                        </p>

                        <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
                            Powered by{" "}
                            <a
                                href="https://www.ansely.co.uk"  // Replace with the actual website URL
                                target="_blank"               // Opens in a new tab
                                rel="noopener noreferrer"     // Security and privacy best practices
                                className="text-white font-semibold hover:text-blue-400 transition-colors cursor-pointer"
                            >
                                Ansely
                            </a>
                        </p>
                    </div>

                    {/* Middle Section - Links */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-6 text-white">Sections</h3>
                        <nav className="space-y-4">
                            {sections.map((section, index) => (
                                <a
                                    key={index}
                                    href={section.href}
                                    className=" text-gray-400 hover:text-[#0094D9] transition-colors duration-300 text-sm sm:text-base group flex items-center gap-2"
                                >
                                    <span>{section.title}</span>
                                    <span className="inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <ExternalLink className="w-4 h-4" />
                                    </span>
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Right Section - Social Links */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-6 text-white">Socials</h3>
                        <div className="space-y-4">
                            {socials.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target='_blank'
                                        className="flex items-center gap-3 text-gray-400 hover:text-[#0094D9] transition-colors duration-300 group text-sm sm:text-base"
                                    >
                                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                        <span>{social.name}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>
            </div>

        </footer>
    );
}
