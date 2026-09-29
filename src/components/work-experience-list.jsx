"use client";
import React from "react";
import { CardSpotlight } from "./components/ui/card-spotlight";

export function WorkExperienceSection() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-10 text-center md:text-left">
                Work Experience
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CardSpotlight className="p-6 h-full flex flex-col justify-between border border-white/10 bg-slate-900/80 backdrop-blur-md rounded-2xl">
                    <div className="relative z-20">
                        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                            Full-Time
                        </span>
                        <h3 className="text-xl font-bold text-white mt-1">
                            Application Developer
                        </h3>
                        <p className="text-sm text-slate-400">PT Hartono Istana Teknologi (Polytron)[cite: 2]</p>
                        <p className="text-xs text-cyan-300 font-medium bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20 inline-block mt-2">
                            June 2024 – May 2025[cite: 2]
                        </p>

                        <ul className="mt-4 space-y-3">
                            <WorkStep title="Developed and maintained web applications and RESTful APIs using PHP and Laravel[cite: 2]" />
                            <WorkStep title="Built native Android applications using Java with MVVM architecture[cite: 2]" />
                            <WorkStep title="Integrated Bluetooth thermal printers using the ESC/POS library for document printing[cite: 2]" />
                        </ul>
                    </div>
                </CardSpotlight>

                <CardSpotlight className="p-6 h-full flex flex-col justify-between border border-white/10 bg-slate-900/80 backdrop-blur-md rounded-2xl">
                    <div className="relative z-20">
                        <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                            Internship
                        </span>
                        <h3 className="text-xl font-bold text-white mt-1">
                            Mobile Programmer Intern
                        </h3>
                        <p className="text-sm text-slate-400">PT Hartono Istana Teknologi (Polytron)[cite: 2]</p>
                        <p className="text-xs text-purple-300 font-medium bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20 inline-block mt-2">
                            March 2023 – February 2024[cite: 2]
                        </p>

                        <ul className="mt-4 space-y-3">
                            <WorkStep title="Developed Android app for warehouse operations & RFID scanning via Bluetooth[cite: 2]" />
                            <WorkStep title="Built C# companion desktop application and maintained Laravel APIs[cite: 2]" />
                            <WorkStep title="Designed & developed interactive learning game using C# and Unity[cite: 2]" />
                        </ul>
                    </div>
                </CardSpotlight>

            </div>
        </section>
    );
}

const WorkStep = ({ title }) => {
    return (
        <li className="flex gap-3 items-start pointer-events-none">
            <CheckIcon />
            <p className="text-sm text-slate-300 leading-relaxed">{title}</p>
        </li>
    );
};

const CheckIcon = () => {
    return (
        <div className="shrink-0 mt-1 pointer-events-none">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 text-cyan-400"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
                    fill="currentColor"
                    strokeWidth="0"
                />
            </svg>
        </div>
    );
};