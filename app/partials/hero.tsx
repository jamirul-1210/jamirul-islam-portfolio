import React from "react";
import { info } from "@/lib/data";
import { SparklesText } from "@/components/sparkles-text";
import { Meteors } from "@/components/meteors";
import { ShimmerButton } from "@/components/shimmer-button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <div className="container mx-auto px-10 relative z-10 ">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
              Hi,
              <SparklesText text={`I'm ${info.name}`} />{" "}
              <span className="block text-primary text-3xl">
                Full Stack Developer
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">{info.description}</p>
            <div className="flex gap-4">
              <a href={info.resumeLink} target="_blank" rel="noreferrer noopener">
                <ShimmerButton className="shadow-2xl" shimmerDuration="1.5s">
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Download CV
                  </span>
                </ShimmerButton>
              </a>
              <Link href="#contact">
                <ShimmerButton className="shadow-2xl bg-primary">
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Hire Me
                  </span>
                </ShimmerButton>
              </Link>
            </div>
          </div>

        </div>
      </div>
      <Meteors number={30} />
    </section>
  );
};

export default Hero;
