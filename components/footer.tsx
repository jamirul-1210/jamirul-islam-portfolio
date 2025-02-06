import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { info, socialLinks } from "@/lib/data";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-muted/20 border-t">
      <div className="container mx-auto px-4 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:px-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{info.name}</h3>
            <p className="text-sm text-muted-foreground">{info.about}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#projects"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#skills"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${info.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {info.email}
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  {info.location}
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Social</h3>
            <div className="flex gap-4">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <a href={socialLinks.linkedIn} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Twitter className="w-5 h-5" />
              </Button></a>
              <a href={socialLinks.mail} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Mail className="w-5 h-5" />
              </Button></a>

            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {info.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
