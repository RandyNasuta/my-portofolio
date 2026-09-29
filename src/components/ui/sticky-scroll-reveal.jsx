"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
            const distance = Math.abs(latest - breakpoint);
            if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                return index;
            }
            return acc;
        }, 0);
        setActiveCard(closestBreakpointIndex);
    });

    const linearGradients = [
        "linear-gradient(to bottom right, #06b6d4, #10b981)",
        "linear-gradient(to bottom right, #ec4899, #6366f1)",
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);

    return (
        <div
            className={cn(
                "relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-xl p-10 mx-auto max-w-5xl bg-transparent",
                "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            )}
            ref={ref}
        >
            <div className="relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="text-2xl font-bold text-slate-900 dark:text-slate-100"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="text-kg mt-10 max-w-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>

            <div
                className={cn(
                    "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur-md lg:block flex-shrink-0 shadow-2xl",
                    contentClassName
                )}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCard}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="h-full w-full flex items-center justify-center text-white p-4"
                    >
                        {content[activeCard]?.content ?? null}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};