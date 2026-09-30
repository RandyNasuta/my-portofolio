"use client";
import './App.css';
import { Navbar, NavBody, NavbarLogo, NavItems } from './components/ui/resizable-navbar';
import { motion } from 'motion/react';
import { HeroHighlight, Highlight } from './components/ui/hero-highlight';
import { BackgroundLines } from './components/ui/background-lines';
import { StickyScroll } from './components/ui/sticky-scroll-reveal';
import { ParallaxHeroImages } from './components/ui/parallax-hero-images';
import { HeroParallax } from './components/ui/hero-parallax';
import { navItems, stickyContent, images, projects } from './utils/constants';
import { HoverEffect } from './components/ui/hover-effect';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-neutral-950 text-white overflow-x-hidden">
      <Navbar className="fixed inset-x-0 z-50">
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
        </NavBody>
      </Navbar>

      <section id="home" className="min-h-screen w-full">
        <HeroHighlight containerClassName="min-h-screen w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          >
            <Highlight className="text-black dark:text-white">
              Randy Nasuta
            </Highlight>
            <br />
            Software Engineer Building Web, Mobile, and API systems
          </motion.h1>
        </HeroHighlight>
      </section>

      <main className="w-full min-h-screen">
        <section id="about" className="w-full relative bg-neutral-950 py-20 [overflow-x:clip]">
          <div className="absolute inset-0 pointer-events-none z-0">
            <BackgroundLines className="w-full h-full !bg-transparent p-0" />
          </div>

          <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
            <StickyScroll content={stickyContent} />

            <div id="experience" className="w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Work Experience
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      Full-Time
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      Application Developer
                    </h3>
                    <p className="text-sm text-slate-400">PT Hartono Istana Teknologi (Polytron)</p>
                    <p className="text-xs text-cyan-300 font-medium bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20 inline-block mt-3">
                      June 2024 – June 2025
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Developed web applications and RESTful APIs utilizing PHP and the Laravel framework.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Designed and built native Android applications using Java, implementing clean architecture (MVVM).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Integrated hardware features such as Bluetooth thermal printers using the ESC/POS library.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                      Internship
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      Mobile Programmer Intern
                    </h3>
                    <p className="text-sm text-slate-400">PT Hartono Istana Teknologi (Polytron)</p>
                    <p className="text-xs text-purple-300 font-medium bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20 inline-block mt-3">
                      March 2023 – February 2024
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Built an Android warehouse application integrating real-time RFID scanning with backend systems.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Developed C# desktop applications and Laravel APIs for streamlined company workflows.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Created an interactive learning game via C# and Unity during internship project tasks.</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="relative z-10 w-full min-h-screen bg-neutral-900">
          <div className="w-full h-min-screen mx-auto">
            <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-neutral-50 dark:bg-neutral-900">
              <ParallaxHeroImages images={images} className="" />
              <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-neutral-800 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] md:text-6xl dark:text-neutral-100 dark:drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                  Projects
                </h1>
                <p className="max-w-md text-neutral-600 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] dark:text-neutral-400 dark:drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]">
                  A collection of web and mobile applications that have been developed
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="certificates" className="relative z-10 w-full min-h-screen bg-neutral-950">
          {/* <HeroParallax products={products}/> */}
          <HoverEffect items={projects} className="px-5 text-center" />
        </section>
      </main>
    </div>
  );
}

export default App;