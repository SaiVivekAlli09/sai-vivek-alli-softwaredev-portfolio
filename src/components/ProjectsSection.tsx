import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Habit Pattern Predictor',
      description: 'AI-Powered Personal Analytics System using machine learning',
      longDescription: 'Advanced machine learning system that analyzes user behavior patterns to predict and recommend optimal habit formation strategies with 85%+ accuracy.',
      image: '/placeholder.svg',
      technologies: ['Python', 'scikit-learn', 'Pandas', 'Data Visualization', 'Machine Learning'],
      category: 'ml',
      features: [
        'Behavioral pattern analysis',
        'Predictive modeling',
        'Interactive dashboards',
        'Real-time analytics'
      ],
      achievements: '85%+ prediction accuracy',
      github: 'https://github.com/SaiVivekAlli09/Habit-Pattern-Predictor-Using-Python-ML',
      demo: 'https://github.com/SaiVivekAlli09/Habit-Pattern-Predictor-Using-Python-ML'
    },
    {
      title: 'CineRAG-AI',
      description: 'Intelligent Movie Discovery Engine with RAG architecture',
      longDescription: 'Sophisticated recommendation system using Retrieval-Augmented Generation to provide personalized movie suggestions based on user preferences and viewing history.',
      image: '/placeholder.svg',
      technologies: ['Python', 'Sentence Transformers', 'Vector Similarity', 'RAG', 'NLP'],
      category: 'ai',
      features: [
        'RAG-based recommendations',
        'Vector similarity search',
        'Natural language queries',
        'Personalized suggestions'
      ],
      achievements: '85%+ recommendation accuracy',
      github: 'https://github.com/SaiVivekAlli09/CineRAG-AI',
      demo: 'https://github.com/SaiVivekAlli09/CineRAG-AI'
    },
    {
      title: 'SimpleChatApp',
      description: 'Real-Time Multi-User Chat System',
      longDescription: 'Scalable real-time chat application supporting multiple concurrent users with features like message history, user authentication, and real-time notifications.',
      image: '/placeholder.svg',
      technologies: ['Java', 'Socket Programming', 'Multi-threading', 'Real-time Communication'],
      category: 'web',
      features: [
        'Real-time messaging',
        'Multi-user support',
        'Message persistence',
        'User authentication'
      ],
      achievements: 'Real-time message synchronization',
      github: 'https://github.com/SaiVivekAlli09/SimpleChatApp_Java',
      demo: 'https://github.com/SaiVivekAlli09/SimpleChatApp_Java'
    },
    {
      title: 'DocumentSearchEngine',
      description: 'Custom Search Engine with Inverted Indexing',
      longDescription: 'High-performance document search engine implementing inverted indexing algorithms for lightning-fast full-text search across large document collections.',
      image: '/placeholder.svg',
      technologies: ['Java', 'HashMaps', 'Data Structures', 'Algorithms', 'Indexing'],
      category: 'systems',
      features: [
        'Inverted index implementation',
        'Full-text search',
        'Query optimization',
        'Scalable architecture'
      ],
      achievements: 'Lightning-fast full-text search',
      github: 'https://github.com/SaiVivekAlli09/DocumentSearchEngine_Java',
      demo: 'https://github.com/SaiVivekAlli09/DocumentSearchEngine_Java'
    },
    {
      title: 'Airbnb Price Prediction',
      description: 'ML-Driven Pricing Analytics',
      longDescription: 'Machine learning model for predicting Airbnb listing prices using advanced feature engineering and ensemble methods to achieve high accuracy in price recommendations.',
      image: '/placeholder.svg',
      technologies: ['Python', 'XGBoost', 'Feature Engineering', 'Machine Learning', 'Analytics'],
      category: 'ml',
      features: [
        'Price prediction modeling',
        'Feature engineering',
        'Market analysis',
        'Interactive visualizations'
      ],
      achievements: 'High-accuracy price predictions',
      github: 'https://github.com/SaiVivekAlli09/AirBnB-Price-Prediction',
      demo: 'https://github.com/SaiVivekAlli09/AirBnB-Price-Prediction'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'ml', label: 'Machine Learning' },
    { key: 'ai', label: 'AI/NLP' },
    { key: 'systems', label: 'Systems' }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.key
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800/50 text-gray-400 hover:bg-slate-700/50 hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 overflow-hidden hover:bg-slate-800/70 transition-all duration-300 group">
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative overflow-hidden">
                <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-300">
                  {project.category === 'ml' ? '🤖' : 
                   project.category === 'ai' ? '🧠' :
                   project.category === 'web' ? '🌐' :
                   project.category === 'systems' ? '⚙️' : '💻'}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/50 to-transparent"></div>
              </div>

              <div className="p-6 space-y-4">
                {/* Project Header */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-cyan-400/30 text-cyan-400 text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-300">Key Features:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievement */}
                <div className="bg-slate-900/50 rounded-lg p-3 border-l-2 border-emerald-400">
                  <div className="text-xs text-emerald-400 font-medium">Achievement</div>
                  <div className="text-sm text-gray-300">{project.achievements}</div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-12">
          <Button
            onClick={() => window.open('https://github.com/SaiVivekAlli09', '_blank')}
            className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
