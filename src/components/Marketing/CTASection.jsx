"use client";
import React from "react";
import { ArrowRight, CircleCheck } from "lucide-react";

export default function DemoCTASection() {
    const brand = "#0094D9"; // primary brand blue

    return (
        <section className="py-5 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl ">
                {/* Card */}
                <div className="relative flex flex-col gap-6 py-1 bg-[#0094D9] rounded-xl shadow-lg overflow-hidden border-0 text-white">
    
                    {/* Glow Elements */}
                    <div
                        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-30"
                        style={{ backgroundColor: "#00BFFF" }}
                    ></div>
                    <div
                        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20"
                        style={{ backgroundColor: brand }}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-16 sm:py-20 text-center space-y-8">
                        {/* Heading */}
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            Experience the difference custom technology makes
                        </h2>

                        {/* Description */}
                        <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            We invested in building our own software so you get service quality that
                            other cleaning companies can’t deliver. See the difference for yourself.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                            {/* Primary Button */}
                            <button className="inline-flex items-center justify-center gap-2 bg-white text-[#1C3B45] text-lg font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-100 transition-all duration-300">
                                Schedule Your Demo
                                <ArrowRight className="h-5 w-5 ml-2" />
                            </button>

                            {/* Secondary Button */}
                            <button className="inline-flex items-center justify-center gap-2 border border-white text-white text-lg font-semibold px-8 py-3 rounded-md hover:bg-white/10 transition-all duration-300">
                                Contact Sales
                            </button>
                        </div>

                        {/* Highlights */}
                        <div className="flex flex-wrap justify-center gap-6 pt-8 text-white/90 text-base">
                            {[
                                "No credit card required",
                                "Free 30-day trial",
                                "Cancel anytime",
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <CircleCheck className="h-5 w-5 text-white" />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}