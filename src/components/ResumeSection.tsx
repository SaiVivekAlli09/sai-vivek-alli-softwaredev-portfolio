import React from 'react';
import { Download, User, MapPin, Phone, Mail, LinkedinIcon, Globe } from 'lucide-react';

const ResumeSection = () => {
  const handleDownloadResume = () => {
    // Create a link to download the PDF resume
    const link = document.createElement('a');
    link.href = '/resume-sai-vivek-alli.pdf';
    link.download = 'Sai_Vivek_Alli_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Resume
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Download my complete resume with detailed experience, skills, and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Resume Header */}
          <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-700/50 p-8 mb-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">SAI VIVEK ALLI</h1>
              <h2 className="text-xl text-cyan-400 mb-4">Full Stack Software Developer</h2>
              
              <div className="flex flex-wrap justify-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>saivivekalli9@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>4803340225</span>
                </div>
                <div className="flex items-center gap-2">
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} />
                  <span>Portfolio</span>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="text-center">
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download size={24} />
                Download Resume (PDF)
              </button>
            </div>
          </div>

          {/* Resume Preview */}
          <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-700/50 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Accomplished Software Developer with <strong className="text-cyan-400">6 years of progressive experience</strong> architecting scalable full-stack applications using Java Spring Boot, Python Django, and React across telecommunications and healthcare domains. Specialized in designing microservices-based solutions, implementing REST APIs, and deploying cloud-native applications on AWS that serve millions of users.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Technical Skills Preview */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Core Technical Skills</h4>
                <div className="space-y-2 text-gray-300">
                  <p>• <span className="text-cyan-400">Languages:</span> Python, Java, JavaScript</p>
                  <p>• <span className="text-cyan-400">Frameworks:</span> Spring Boot, Django, React.js</p>
                  <p>• <span className="text-cyan-400">Cloud:</span> AWS, Azure, Docker, Kubernetes</p>
                  <p>• <span className="text-cyan-400">Databases:</span> MySQL, PostgreSQL, MongoDB</p>
                </div>
              </div>

              {/* Experience Preview */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Current Role</h4>
                <div className="text-gray-300">
                  <p className="font-semibold text-cyan-400">Full Stack Software Developer</p>
                  <p className="text-sm">MindPROS, Inc - Verizon | Jan 2023 - Present</p>
                  <p className="mt-2 text-sm">Leading modernization of trade-in platform serving 2.3M users, contributing to $12M annual revenue increase.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-slate-800/50 rounded-lg border border-slate-600/30">
              <p className="text-center text-gray-400 text-sm">
                Complete resume includes detailed work experience, education, projects, and certifications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;