
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'MindPROS, Inc - Verizon',
      position: 'Full Stack Software Developer',
      duration: 'January 2023 – Present',
      location: 'Baltimore, MD',
      type: 'Current Role',
      achievements: [
        'Developed and optimized RESTful APIs using FastAPI and Flask for Verizon\'s trade-in device processing system, handling millions of exchange requests per month, reducing processing time by 40%',
        'Implemented scalable microservices architecture using Python, AWS Lambda, and DynamoDB with boto3 SDK, ensuring 99.9% uptime and handling 30% more concurrent requests',
        'Led the redesign of the purchase request API pipeline using Django REST Framework and Celery, improving data ingestion efficiency and reducing API latency from 800ms to 200ms',
        'Designed data quality validation pipeline using Pandas, NumPy, and Pydantic, improving error detection by 35%',
        'Built automated testing suites using pytest and unittest, reducing production issues by 20%'
      ],
      technologies: ['Python', 'FastAPI', 'Flask', 'Django', 'AWS Lambda', 'DynamoDB', 'Celery', 'pytest'],
      impact: 'Streamlined the trade-in device exchange workflow, reducing refund processing time by 2 days and increasing customer satisfaction scores by 18%'
    },
    {
      company: 'Entersoft Security',
      position: 'Software Engineer',
      duration: 'February 2019 – July 2021',
      location: 'Hyderabad, India',
      type: 'Previous Role',
      achievements: [
        'Developed a full-stack web application for Telugu Titans (National Kabaddi Team), integrating live score updates, player statistics, and fan engagement features, resulting in a 60% increase in user engagement',
        'Engineered a scalable backend system for a leading pharmaceutical laboratory, optimizing drug sales tracking, contract management, and budget forecasting, leading to a 20% increase in financial reporting accuracy',
        'Built and optimized REST APIs to handle high-traffic requests, reducing response time from 1.2s to 350ms',
        'Designed and implemented CI/CD pipelines using Jenkins and Docker, reducing deployment time by 45%',
        'Refactored legacy monolithic architecture into distributed microservices system using Java, cutting maintenance costs by 35%'
      ],
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'Jenkins', 'Docker', 'Microservices', 'Kafka'],
      impact: 'Enabled the pharmaceutical firm to streamline compliance workflows and improve contract processing speed by 50%, while the sports project enhanced fan engagement by 3x'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-800/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300">
              <div className="grid lg:grid-cols-4 gap-6">
                {/* Company Info */}
                <div className="lg:col-span-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.company}</h3>
                    <div className="text-lg font-semibold text-cyan-400 mb-1">{exp.position}</div>
                    <div className="text-sm text-gray-400 mb-2">{exp.duration}</div>
                    <div className="text-sm text-gray-400 mb-3">{exp.location}</div>
                    <Badge 
                      variant={exp.type === 'Current Role' ? 'default' : 'secondary'}
                      className={exp.type === 'Current Role' ? 'bg-green-500/20 text-green-400 border-green-500/30' : ''}
                    >
                      {exp.type}
                    </Badge>
                  </div>
                </div>

                {/* Experience Details */}
                <div className="lg:col-span-3 space-y-6">
                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-cyan-400/30 text-cyan-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="bg-slate-900/50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">Impact & Results</h4>
                    <p className="text-gray-300">{exp.impact}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
