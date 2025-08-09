'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import home from "@/data/home.json";
import site from "@/data/site.json";
import BrandButton from "@/components/brand-button";
import RotatingWords from "@/components/rotating-words";

export default function HomeClient() {
    return (
        <section className="relative overflow-hidden lg:p-10">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#DE3626]/5 to-transparent" />
            <motion.div
                initial="hidden"
                animate="show"
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
                className="container mx-auto px-4 py-16 md:py-24 grid gap-6"
            >
                <div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 },
                        }}
                        className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                    >
                        Collaborative Software Development Club @ Ohio State
                    </motion.div>
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 },
                        }}
                        className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white"
                    >
                        <RotatingWords
                            words={["Code", "Develop", "Build", "Learn"]}
                            className="pr-2"
                            aria-label="Rotating headline"
                        />{" "}
                        Together
                    </motion.h1>
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 },
                        }}
                        className="mt-4 text-lg text-zinc-300 max-w-2xl"
                    >
                        {home.hero.subtitle}
                    </motion.p>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 },
                        }}
                        className="mt-6"
                    >
                        <BrandButton asChild size="lg">
                            <Link
                                href={site.footer.discordUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Join Discord
                            </Link>
                        </BrandButton>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
