import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Cloud, Database, Layers, Wrench, Brain } from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const skillCategories = {
    languages: {
      title: 'Languages & Frameworks',
      icon: '💻',
      skills: [
        { 
          name: 'Python', 
          level: 95, 
          icon: '/lovable-uploads/26c1b741-78dd-44cf-aa7e-ef1a90903edb.png',
          isImage: true
        },
        { 
          name: 'Java', 
          level: 90, 
          icon: '/lovable-uploads/61f58f11-8b32-4978-b74e-b3709cfff816.png',
          isImage: true
        },
        { 
          name: 'JavaScript', 
          level: 85, 
          icon: '/lovable-uploads/18de624a-f7c8-4364-b28a-fa9a57da5a92.png',
          isImage: true
        },
        { 
          name: 'React.js', 
          level: 88, 
          icon: '/lovable-uploads/9ef8f217-a029-41bf-8d91-5f5b134de694.png',
          isImage: true
        },
        { 
          name: 'Spring Boot', 
          level: 87, 
          icon: '/lovable-uploads/04024840-ffe7-4725-8ce7-048740c826d4.png',
          isImage: true
        },
        { name: 'FastAPI', level: 92, icon: '⚡' },
        { 
          name: 'Django', 
          level: 90, 
          icon: '/lovable-uploads/1047059a-35ed-4be0-a88d-2d080858d888.png',
          isImage: true
        },
        { name: 'Flask', level: 88, icon: '🌶️' }
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        { 
          name: 'AWS', 
          level: 90, 
          icon: '/lovable-uploads/fd677684-be5a-4d59-9624-dec54e4d5f2a.png',
          isImage: true
        },
        { 
          name: 'Azure', 
          level: 75, 
          icon: '/lovable-uploads/0bb5caa8-d99c-4fa7-bcb8-9b20dcbdec08.png',
          isImage: true
        },
        { 
          name: 'GCP', 
          level: 70, 
          icon: '/lovable-uploads/f25aa3d6-95bf-44f3-b029-94e7982489db.png',
          isImage: true
        },
        { name: 'Docker', level: 85, icon: '🐳' },
        { 
          name: 'Kubernetes', 
          level: 80, 
          icon: '/lovable-uploads/5b65b6f3-a27f-4a04-a54f-3b94c20df1d5.png',
          isImage: true
        },
        { 
          name: 'Terraform', 
          level: 75, 
          icon: '/lovable-uploads/f691761c-c590-455a-b1a7-bcfbc2ab479c.png',
          isImage: true
        },
        { 
          name: 'Jenkins', 
          level: 82, 
          icon: '/lovable-uploads/42f7f59b-d604-4ec4-b2b1-dc6434d7f9d7.png',
          isImage: true
        },
        { 
          name: 'CI/CD', 
          level: 88, 
          icon: '/lovable-uploads/3029bd57-5c53-4d4a-809b-e9dbe1660bf0.png',
          isImage: true
        }
      ]
    },
    databases: {
      title: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'MySQL', level: 88, icon: '🐬' },
        { 
          name: 'PostgreSQL', 
          level: 85, 
          icon: '/lovable-uploads/fb320646-dc6f-45fb-af02-35dff443b253.png',
          isImage: true
        },
        { 
          name: 'MongoDB', 
          level: 80, 
          icon: '/lovable-uploads/d21bd51c-273c-4ede-9432-6716a631d57f.png',
          isImage: true
        },
        { 
          name: 'Redis', 
          level: 75, 
          icon: '/lovable-uploads/a5a18927-0473-45be-84d6-151250a14d71.png',
          isImage: true
        },
        { 
          name: 'DynamoDB', 
          level: 85, 
          icon: '/lovable-uploads/12f5c17a-3e36-4dd9-a073-840d794d938e.png',
          isImage: true
        },
        { 
          name: 'SQLAlchemy', 
          level: 90, 
          icon: '/lovable-uploads/ee6415a7-c842-48f9-8752-31d18b46c5d9.png',
          isImage: true
        }
      ]
    },
    architecture: {
      title: 'APIs & Architecture',
      icon: '🏗️',
      skills: [
        { 
          name: 'REST APIs', 
          level: 95, 
          icon: '/lovable-uploads/d3cb72a2-f6ae-4c80-8c81-361518b43938.png',
          isImage: true
        },
        { 
          name: 'Microservices', 
          level: 90, 
          icon: '/lovable-uploads/a4c1e773-34ff-4e7b-8f5b-d4bff9fa332a.png',
          isImage: true
        },
        { name: 'Event-Driven Architecture', level: 85, icon: '📡' },
        { 
          name: 'System Design', 
          level: 88, 
          icon: '/lovable-uploads/0282d47d-98a9-4c63-8202-c649818920f5.png',
          isImage: true
        },
        { 
          name: 'API Integration', 
          level: 92, 
          icon: '/lovable-uploads/2961b88a-31c1-4def-a64d-51940afb83c1.png',
          isImage: true
        },
        { name: 'Scalable Architecture', level: 87, icon: '📈' }
      ]
    },
    aiml: {
      title: 'AI/ML Tools',
      icon: '🤖',
      skills: [
        { 
          name: 'Python', 
          level: 95, 
          icon: '/lovable-uploads/26c1b741-78dd-44cf-aa7e-ef1a90903edb.png',
          isImage: true
        },
        { 
          name: 'TensorFlow', 
          level: 85, 
          icon: '/lovable-uploads/46abd940-075f-4133-8006-f6aededc736d.png',
          isImage: true
        },
        { 
          name: 'Scikit-learn', 
          level: 88, 
          icon: '/lovable-uploads/b619caaf-9132-455c-aa72-dd3a00bbf642.png',
          isImage: true
        },
        { name: 'Pandas', level: 92, icon: '🐼' },
        { 
          name: 'NumPy', 
          level: 90, 
          icon: '/lovable-uploads/62df959c-51eb-46e3-95ca-43c7893cee10.png',
          isImage: true
        },
        { 
          name: 'Jupyter Notebook', 
          level: 88, 
          icon: '/lovable-uploads/c6bca8fe-e448-4527-a4f6-a9fbc539a5ba.png',
          isImage: true
        },
        { 
          name: 'OpenCV', 
          level: 80, 
          icon: '/lovable-uploads/5698be41-5233-4dca-bfe8-739f5d6603bb.png',
          isImage: true
        },
        { 
          name: 'Streamlit', 
          level: 85, 
          icon: '/lovable-uploads/deba2e81-841c-4ead-a8aa-e9963a79445c.png',
          isImage: true
        },
        { name: 'Matplotlib', level: 87, icon: '📊' },
        { name: 'Hugging Face', level: 82, icon: '🤗' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        { 
          name: 'Git', 
          level: 95, 
          icon: '/lovable-uploads/791f58dd-44be-4be3-9bb1-1ce911a9965a.png',
          isImage: true
        },
        { name: 'Agile', level: 90, icon: '🏃' },
        { 
          name: 'Jira', 
          level: 85, 
          icon: '/lovable-uploads/cd92919d-747c-4625-b1ae-82498434309f.png',
          isImage: true
        },
        { name: 'Power BI', level: 80, icon: '📊' },
        { name: 'Tableau', level: 75, icon: '📈' },
        { name: 'Unit Testing', level: 88, icon: '🧪' }
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
                <div className="flex items-center gap-3">
                  {skill.isImage ? (
                    <div className="w-8 h-8 flex items-center justify-center">
                      <img 
                        src={skill.icon} 
                        alt={`${skill.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <span className="text-2xl">{skill.icon}</span>
                  )}
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
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
