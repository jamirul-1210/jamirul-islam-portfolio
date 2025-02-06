import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <p className="mb-6">
            I'm a passionate full-stack developer with over 3 years of experience in building scalable web applications and distributed systems. My journey in software development started with a curiosity about how things work on the internet, which led me to dive deep into web technologies.
          </p>
          <p className="mb-6">
            Throughout my career, I've had the opportunity to work with diverse teams and technologies, from early-stage startups to enterprise organizations. This experience has taught me the importance of writing clean, maintainable code and building systems that scale.
          </p>
          <p>
            I believe in continuous learning and staying up-to-date with the latest technologies while maintaining a strong foundation in software engineering principles. When I'm not coding, you can find me contributing to open-source projects or mentoring aspiring developers.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutSection