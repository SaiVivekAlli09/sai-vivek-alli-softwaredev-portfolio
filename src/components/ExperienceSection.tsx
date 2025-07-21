
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
      companyImage: '/lovable-uploads/19304695-fd33-4492-ae52-0511d384a52a.png', // Verizon logo
      achievements: [
        'Architected Java Spring Boot microservices with REST APIs to handle device trade-in valuation requests, resulting in 40% reduction in processing time and seamless integration with existing billing systems',
        'Orchestrated React frontend components with Kubernetes deployment strategies to streamline trade-in workflow automation, achieving 25% increase in user completion rates through intuitive interface design',
        'Optimized AWS RDS database queries and Docker containerization to support real-time device exchange calculations, delivering 60% faster response times for high-volume trade-in transactions',
        'Streamlined CI/CD pipeline automation using Terraform infrastructure as code to accelerate purchase request updates, cutting deployment cycles from 4 hours to 30 minutes while maintaining zero-downtime releases',
        'Integrated microservices communication patterns with AWS Lambda functions to synchronize trade-in value algorithms across 8 customer touchpoints, reducing pricing discrepancies by 95% and ensuring consistent data delivery to 2.3M web and mobile users',
        'Collaborated with product managers and QA teams during sprint planning to resolve database connection pooling issues in Spring Boot applications, preventing production bottlenecks and maintaining 99.8% system availability during peak trade-in seasons',
        'Conducted thorough code reviews for 47 pull requests monthly across trade-in microservices, catching memory leaks in Spring Boot connection pooling and preventing 3 potential production outages through detailed Java code analysis',
        'Tracked application performance using monitoring dashboards in New Relic, identifying slow database queries in device valuation service that were taking 2.3 seconds and reducing them to 340ms through index optimization'
      ],
      technologies: ['Java Spring Boot', 'React', 'AWS RDS', 'Docker', 'Kubernetes', 'Terraform', 'AWS Lambda', 'Microservices'],
      impact: 'Led complete modernization of legacy trade-in platform serving 2.3M monthly users, contributing to $12M annual revenue increase through improved conversion rates and reduced operational overhead'
    },
    {
      company: 'Entersoft Security',
      position: 'Software Engineer',
      duration: 'February 2019 – July 2021',
      location: 'Hyderabad, India',
      type: 'Previous Role',
      companyImage: '/lovable-uploads/3ad9e153-f082-4ed1-872b-4f4b4392c105.png', // Entersoft logo
      achievements: [
        'Developed Python Django backend with React Redux frontend to deliver Telugu Titans Kabaddi team\'s official website, resulting in 150% increase in fan engagement and seamless integration of player statistics modules',
        'Engineered pharmaceutical sales tracking system using Node.js APIs and SQL Server optimization to automate drug inventory management, achieving 35% decrease in manual processing errors and real-time budget monitoring',
        'Consolidated microservices architecture with AWS cloud services to unify sports management and healthcare modules, enabling cross-platform data synchronization and cutting infrastructure costs by 45%',
        'Automated CI/CD pipeline processes using Docker containers and Kubernetes orchestration to accelerate feature deployments, shortening release cycles from 2 weeks to 3 days while maintaining 99.5% uptime',
        'Configured Terraform infrastructure provisioning with JavaScript-based monitoring dashboards to track contract management workflows across 15 modules, providing real-time visibility that boosted HR processing efficiency by 40% and cut compliance audit time from 6 hours to 90 minutes',
        'Debugged critical memory leaks in React Redux state management affecting pharmaceutical inventory displays, implementing component lifecycle optimizations that accelerated page load times by 50% and eliminated user session timeouts',
        'Developed Python automation scripts leveraging requests library to sync Telugu Titans player statistics from external sports APIs, automatically updating Django models with match performance data and generating weekly reports that eliminated 8 hours of manual data entry for team management staff'
      ],
      technologies: ['Python Django', 'React Redux', 'Node.js', 'SQL Server', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'JavaScript'],
      impact: 'Successfully delivered dual-domain platform serving 50K+ sports fans and 200+ pharmaceutical clients, generating $2.8M combined revenue while establishing scalable foundation for future product expansion'
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
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2">
                      <img 
                        src={exp.companyImage} 
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
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
