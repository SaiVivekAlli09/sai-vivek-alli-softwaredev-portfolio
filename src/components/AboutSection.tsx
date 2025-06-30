
import React from 'react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 p-1">
                <img
                  src="/lovable-uploads/1a9ff9f6-5ee8-4c77-af23-35b9d4d246d5.png"
                  alt="Sai Vivek Alli Professional"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 to-emerald-400/10"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Results-driven Software Engineer with <span className="text-cyan-400 font-semibold">5+ years of experience</span> in 
                full-stack development, API integrations, system design, and high-volume application development. 
                Currently working at <span className="text-emerald-400 font-semibold">Verizon through MindPROS</span>, 
                where I've optimized trade-in device processing systems handling millions of requests monthly.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I specialize in building scalable, reliable, and secure applications leveraging Python, Java, 
                RESTful APIs, microservices architecture, and cloud computing platforms. My expertise spans 
                the entire software development lifecycle, from design patterns to performance optimization.
              </p>

              <div className="border-l-4 border-cyan-400 pl-6">
                <p className="text-gray-300 italic">
                  "Passionate about transforming complex problems into elegant solutions through clean code, 
                  innovative architecture, and collaborative teamwork."
                </p>
              </div>
            </Card>

            {/* Status Badge */}
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">Available for On-Site, Hybrid and Remote Opportunities across US</span>
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-slate-800/30 backdrop-blur-sm border-slate-700/50 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-sm text-gray-400">Performance Improvement</div>
              </Card>
              <Card className="p-4 bg-slate-800/30 backdrop-blur-sm border-slate-700/50 text-center">
                <div className="text-2xl font-bold text-emerald-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-400">System Uptime</div>
              </Card>
            </div>

            {/* Education */}
            <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="font-medium text-gray-300">Masters Degree in Computer and Information Sciences</div>
                  <div className="text-cyan-400">Wichita State University</div>
                  <div className="text-sm text-gray-400">Wichita, KS</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium text-gray-300">Bachelors Degree in Electronics and Communications Engineering</div>
                  <div className="text-cyan-400">Jawaharlal Nehru Technological University</div>
                </div>
              </div>
            </Card>

            {/* Certifications */}
            <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AWS</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-300">AWS Certified Solutions Architect</div>
                    <div className="text-sm text-gray-400">Associate Level</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-700 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">CEH</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-300">CEH Certified Ethical Hacker</div>
                    <div className="text-sm text-gray-400">EC Council</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
