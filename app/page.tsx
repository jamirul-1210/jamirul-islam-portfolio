"use client";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Hero from "./partials/hero";
import ProjectsList from "./partials/project-list";
import AboutSection from "./partials/about";
import SkilList from "./partials/skill-list";
import Contact from "./partials/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16 ">
        <Hero/>
        <ProjectsList/>
        <AboutSection/>
        <SkilList/>
        <Contact/>
      </main>
      <Footer />
    </>
  );
}