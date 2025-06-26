
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const skillCategories = {
    languages: {
      title: 'Languages & Frameworks',
      icon: '💻',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 88 },
        { name: 'Spring Boot', level: 87 },
        { name: 'FastAPI', level: 92 },
        { name: 'Django', level: 90 },
        { name: 'Flask', level: 88 }
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        { name: 'AWS', level: 90 },
        { name: 'Azure', level: 75 },
        { name: 'GCP', level: 70 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 80 },
        { name: 'Terraform', level: 75 },
        { name: 'Jenkins', level: 82 },
        { name: 'CI/CD', level: 88 }
      ]
    },
    databases: {
      title: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'MySQL', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'DynamoDB', level: 85 },
        { name: 'SQLAlchemy', level: 90 }
      ]
    },
    architecture: {
      title: 'APIs & Architecture',
      icon: '🏗️',
      skills: [
        { name: 'REST APIs', level: 95 },
        { name: 'Microservices', level: 90 },
        { name: 'Event-Driven Architecture', level: 85 },
        { name: 'System Design', level: 88 },
        { name: 'API Integration', level: 92 },
        { name: 'Scalable Architecture', level: 87 }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Agile', level: 90 },
        { name: 'Jira', level: 85 },
        { name: 'Power BI', level: 80 },
        { name: 'Tableau', level: 75 },
        { name: 'Unit Testing', level: 88 }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800/50 text-gray-400 hover:bg-slate-700/50 hover:text-white'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <Card key={index} className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 group">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {skill.name}
                </h3>
                <Badge variant="outline" className="border-cyan-400/30 text-cyan-400">
                  {skill.level}%
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Proficiency</span>
                  <span>{skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Beginner'}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 text-center">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-white mb-2">Problem Solving</h3>
            <p className="text-gray-400">Complex system design and architectural decision making</p>
          </Card>
          
          <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 text-center">
            <div className="text-3xl mb-4">👥</div>
            <h3 className="text-xl font-semibold text-white mb-2">Team Leadership</h3>
            <p className="text-gray-400">Cross-functional team collaboration and technical mentoring</p>
          </Card>
          
          <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 text-center">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-white mb-2">Performance Optimization</h3>
            <p className="text-gray-400">System performance tuning and scalability improvements</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
