import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Import the icons

export default function ContactSection() {
    return (
        <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 font-poppins" id="contact">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left Side - Contact Info */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's get in touch</h2>
                    <p className="text-lg sm:text-xl mb-6">
                        Ready to take your triathlon performance to the next level? Reach out today and let's create a personalized training plan for you.
                    </p>

                    {/* Contact details in a single column */}
                    <div className="flex flex-col justify-center lg:justify-start gap-6 text-lg">
                        {/* Phone */}
                        <a href="tel:(416) 471-4465" className="flex items-center gap-2 hover:text-[#0094D9]">
                            <FaPhone className="h-6 w-6" />
                            (416) 471-4465
                        </a>

                        {/* Email */}
                        <a href="mailto:info@ppsgroupinc.ca" className="flex items-center gap-2 hover:text-[#0094D9]">
                            <FaEnvelope className="h-6 w-6" />
                            info@ppsgroupinc.ca
                        </a>

                        {/* Address */}
                        <a
                            href="https://maps.app.goo.gl/uL7t2tvsAzeUfxBVA" // Replace with actual Google Maps link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-[#0094D9]"
                        >
                            <FaMapMarkerAlt className="h-6 w-6" />
                            PPS Group Inc. <br/> 5635 Finch Ave E Unit #7 <br/> Toronto, ON, M1B 5K9
                        </a>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="lg:w-1/2 bg-gray-800 rounded-xl shadow-lg p-8">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-lg">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full mt-2 p-3 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Full Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-lg">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full mt-2 p-3 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Email Address"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-lg">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full mt-2 p-3 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Phone Number"
                            />
                        </div>

                        <div>
                            <label htmlFor="company" className="block text-lg">
                                Company Name
                            </label>
                            <textarea
                                id="company"
                                name="company"
                                rows="4"
                                className="w-full mt-2 p-3 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Company Name"
                            ></textarea>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-lg">
                                Interests/Questions
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full mt-2 p-3 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Interests/Questions"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-[#0980b8] hover:bg-[#056592] text-white font-semibold rounded-md transition duration-300"
                        >
                            Submit Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
