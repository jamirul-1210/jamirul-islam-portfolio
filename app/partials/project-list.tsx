import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";
import { ExternalLink, FolderGit2, Github } from "lucide-react";
import { projects, socialLinks } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
// import Image from 'next/image'

const ProjectList = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // filter projects are empty
  // if (filteredProjects.length === 0) {
  //   return <EmptyProjects />;
  // }

  return (
    <section id="projects" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 lg:px-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="justify-center">
            <TabsTrigger value="all" onClick={() => setActiveFilter("all")}>
              All
            </TabsTrigger>
            <TabsTrigger
              value="frontend"
              onClick={() => setActiveFilter("frontend")}
            >
              Frontend
            </TabsTrigger>
            <TabsTrigger
              value="fullstack"
              onClick={() => setActiveFilter("fullstack")}
            >
              Full Stack
            </TabsTrigger>
            <TabsTrigger
              value="devops"
              onClick={() => setActiveFilter("devops")}
            >
              DevOps
            </TabsTrigger>
            <TabsTrigger value="ai" onClick={() => setActiveFilter("ai")}>
              AI/ML
            </TabsTrigger>
          </TabsList>
        </Tabs>
        {/* empty project view */}
        {filteredProjects.length === 0 && <EmptyProjects />}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl ? project.githubUrl : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        disabled={!project.githubUrl}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

function EmptyProjects() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-muted/20 rounded-full p-6 mb-6">
        <FolderGit2 className="w-12 h-12 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-semibold mb-2">No Projects Found</h3>
      <p className="text-muted-foreground text-center max-w-md mb-6">
        There are no projects to display at the moment. Projects will appear
        here once they're added to the portfolio.
      </p>
      <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
      <Button variant="outline" size="lg">
        <Github className="w-4 h-4 mr-2" />
        View GitHub Profile
      </Button>
      </a>

    </div>
  );
}

export default ProjectList;
