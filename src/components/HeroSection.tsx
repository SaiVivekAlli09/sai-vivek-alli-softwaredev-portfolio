import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Software Developer', 'AI Engineer', 'Web App Penetration Tester', 'Full-Stack Developer', 'Problem Solver', 'Code Architect'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 pt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400">
                <img
                  src="/lovable-uploads/3d24494a-2aff-43ce-9a2f-770f4f7b8369.png"
                  alt="Sai Vivek Alli"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  SAI VIVEK
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  ALLI
                </span>
              </h1>
            </div>
            
            <div className="h-16 flex items-center justify-center lg:justify-start">
              <span className="text-2xl lg:text-3xl text-gray-300 font-light">
                {roles[currentRole]}
              </span>
            </div>
            
            <p className="text-xl text-gray-400 max-w-2xl">
              Building scalable solutions with modern technologies. 5+ years of experience in full-stack development, 
              API integrations, and system design.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">25+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">10+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">99%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/in/vivek-987-a-/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/SaiVivekAlli09"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors duration-300 group"
            >
              <Github className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-emerald-400 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                <img
                  src="/lovable-uploads/4231c7c3-cbbf-45fc-ba8d-e1a64ccb6655.png"
                  alt="Sai Vivek Alli"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="w-6 h-6 animate-bounce group-hover:text-cyan-400" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
