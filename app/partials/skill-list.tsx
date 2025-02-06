import React from "react";
import { skills } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Server } from "lucide-react";


const SkilList = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 lg:px-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category} className="p-6">
              <h3 className="text-xl font-semibold mb-4 capitalize">
                {category}
              </h3>
              <div className="space-y-2">
                {items.map((skill, index) => (
                  <div key={index} className="grid grid-cols-3 gap-1 items-center">
                    <div className=""><span className="text-sm">{skill.name}</span></div>
                    <div className="w-full bg-secondary rounded-full h-2 col-span-2">
                      <div
                        className="bg-primary rounded-full h-2 px-3"
                        style={{ width: `${skill.level}` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkilList;
