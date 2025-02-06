"use client";
import { Button } from "@/components/ui/button";
import { info } from "@/lib/data";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { WordRotate } from "./word-rotate";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-10 md:px-16">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            <WordRotate words={["Portfolio","Developer", info.name]} />
            {/* {info.name} */}
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#projects" className="text-sm hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/#about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/#skills" className="text-sm hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="/#contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link
                href="/#projects"
                className="text-sm hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/#about"
                className="text-sm hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#skills"
                className="text-sm hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="/#contact"
                className="text-sm hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}