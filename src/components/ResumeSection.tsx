import React from 'react';
import { Download, User, MapPin, Phone, Mail, LinkedinIcon, Globe, ExternalLink } from 'lucide-react';

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
            ATS-Optimized Resume with Professional Experience and Technical Skills
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Download Button - Top */}
          <div className="text-center mb-8">
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download size={24} />
              Download Resume (PDF)
            </button>
          </div>

          {/* ATS Resume Content */}
          <div className="bg-white text-black rounded-2xl border border-slate-300 p-12 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8 border-b border-gray-300 pb-6">
              <h1 className="text-4xl font-bold mb-2">SAI VIVEK ALLI</h1>
              <h2 className="text-2xl text-gray-700 mb-4">Full Stack Software Developer</h2>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span>saivivekalli9@gmail.com</span>
                <span>|</span>
                <span>4803340225</span>
                <span>|</span>
                <a 
                  href="https://www.linkedin.com/in/vivek-987-a-/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  LinkedIn <ExternalLink size={12} />
                </a>
                <span>|</span>
                <a 
                  href="https://sai-vivek-alli-softwaredev-portfoli.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  Portfolio <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">PROFESSIONAL SUMMARY</h3>
              <p className="leading-relaxed mb-4">
                Accomplished Software Developer with 6 years of progressive experience architecting scalable full-stack applications using Java Spring Boot, Python Django, and React across telecommunications and healthcare domains. Specialized in designing microservices-based solutions, implementing REST APIs, and deploying cloud-native applications on AWS that serve millions of users. Expert in transforming complex business challenges into elegant technical solutions while driving cross-functional collaboration and maintaining enterprise-grade code quality standards.
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Front-end expertise in React, Redux, and modern JavaScript frameworks for responsive user interfaces</li>
                <li>Back-end proficiency in Java, Spring Boot, Python, Django, and RESTful API development with microservices architecture</li>
                <li>Cloud infrastructure management using AWS services, Docker containerization, and Kubernetes orchestration</li>
              </ul>
            </div>

            {/* Technical Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">TECHNICAL SKILLS</h3>
              <div className="space-y-2">
                <p><strong>Languages & Frameworks:</strong> Python, Java, JavaScript, Flask, Django, FastAPI, Pandas, NumPy, Spring Boot, React.js, Node.js</p>
                <p><strong>Cloud & DevOps:</strong> AWS (Lambda, S3, DynamoDB, EC2), Azure, GCP, Docker, Kubernetes, Terraform</p>
                <p><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, Redis, Cassandra, SQL Server, Oracle</p>
                <p><strong>APIs & Architecture:</strong> REST APIs, RESTful APIs, Microservices, Event-Driven Architecture</p>
                <p><strong>AI/ML Tools & Technologies:</strong> Hugging Face, OpenCV, Computer Vision, Streamlit, Vercel, Cursor, Google Firebase Studio</p>
                <p><strong>Development & Tools:</strong> Git, Bitbucket, Jenkins, CI/CD, Agile, Jira, Power BI, SQL, Tableau, Unit Testing, Performance Tuning</p>
                <p><strong>Additional Skills:</strong> SDLC, SDK, Angular, TypeScript, Vue.js, Next.js, Pytest, Matplotlib, Generative AI, Claude</p>
              </div>
            </div>

            {/* Work Experience */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">WORK EXPERIENCE</h3>
              
              {/* Current Position */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold">MindPROS, Inc - Verizon</h4>
                    <p className="text-gray-700">Full Stack Software Developer</p>
                  </div>
                  <div className="text-right">
                    <p>Baltimore, MD</p>
                    <p>January 2023 – Present</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>Architected Java Spring Boot microservices with REST APIs to handle device trade-in valuation requests, resulting in 40% reduction in processing time and seamless integration with existing billing systems</li>
                  <li>Orchestrated React frontend components with Kubernetes deployment strategies to streamline trade-in workflow automation, achieving 25% increase in user completion rates through intuitive interface design</li>
                  <li>Optimized AWS RDS database queries and Docker containerization to support real-time device exchange calculations, delivering 60% faster response times for high-volume trade-in transactions</li>
                  <li>Streamlined CI/CD pipeline automation using Terraform infrastructure as code to accelerate purchase request updates, cutting deployment cycles from 4 hours to 30 minutes while maintaining zero-downtime releases</li>
                  <li>Integrated microservices communication patterns with AWS Lambda functions to synchronize trade-in value algorithms across 8 customer touchpoints, reducing pricing discrepancies by 95% and ensuring consistent data delivery to 2.3M web and mobile users</li>
                  <li>Collaborated with product managers and QA teams during sprint planning to resolve database connection pooling issues in Spring Boot applications, preventing production bottlenecks and maintaining 99.8% system availability during peak trade-in seasons</li>
                  <li><strong>Impact:</strong> Led complete modernization of legacy trade-in platform serving 2.3M monthly users, contributing to $12M annual revenue increase through improved conversion rates and reduced operational overhead</li>
                </ul>
              </div>

              {/* Previous Position */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold">Entersoft Security</h4>
                    <p className="text-gray-700">Software Engineer</p>
                  </div>
                  <div className="text-right">
                    <p>Hyderabad, India</p>
                    <p>February 2019 – July 2021</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>Developed Python Django backend with React Redux frontend to deliver Telugu Titans Kabaddi team's official website, resulting in 150% increase in fan engagement and seamless integration of player statistics modules</li>
                  <li>Engineered pharmaceutical sales tracking system using Node.js APIs and SQL Server optimization to automate drug inventory management, achieving 35% decrease in manual processing errors and real-time budget monitoring</li>
                  <li>Consolidated microservices architecture with AWS cloud services to unify sports management and healthcare modules, enabling cross-platform data synchronization and cutting infrastructure costs by 45%</li>
                  <li>Automated CI/CD pipeline processes using Docker containers and Kubernetes orchestration to accelerate feature deployments, shortening release cycles from 2 weeks to 3 days while maintaining 99.5% uptime</li>
                  <li>Configured Terraform infrastructure provisioning with JavaScript-based monitoring dashboards to track contract management workflows across 15 modules, providing real-time visibility that boosted HR processing efficiency by 40% and cut compliance audit time from 6 hours to 90 minutes</li>
                  <li>Debugged critical memory leaks in React Redux state management affecting pharmaceutical inventory displays, implementing component lifecycle optimizations that accelerated page load times by 50% and eliminated user session timeouts</li>
                  <li><strong>Impact:</strong> Successfully delivered dual-domain platform serving 50K+ sports fans and 200+ pharmaceutical clients, generating $2.8M combined revenue while establishing scalable foundation for future product expansion</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">EDUCATION</h3>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold">Wichita State University</h4>
                  <p>M.S in Computer and Information Sciences</p>
                  <p className="text-sm mt-2"><strong>Relevant Coursework:</strong> Database Management System, Machine Learning, Neural Networks and Deep Learning, Data Structures and Algorithms, Advanced Software Engineering, Introduction to Software Engineering, Computer Networking, Software Analysis and Methodologies, AI for Robotics, Web Programming, Graph Algorithms Applications</p>
                </div>
                <div className="text-right">
                  <p>Wichita, KS</p>
                  <p>May 2023</p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">PROJECTS</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold flex items-center gap-2">
                    CineRAG-AI – Intelligent Movie Recommendation System - 
                    <a 
                      href="https://github.com/SaiVivekAlli09/CineRAG-AI" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      GitHub <ExternalLink size={12} />
                    </a>
                  </h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Constructed an AI-powered movie discovery platform using Retrieval-Augmented Generation architecture to process natural language queries, successfully indexing 5,000+ movie records and achieving 85% relevance accuracy in initial testing</li>
                    <li>Leveraged sentence transformers and 384-dimensional vector embeddings with cosine similarity matching to deliver search results in under 2 seconds, improving upon traditional keyword-based approaches</li>
                    <li>Established adaptive learning mechanisms that increased recommendation precision by 30% after processing 100+ user interaction sessions through pickle-based data persistence</li>
                    <li><strong>Skills/Tools:</strong> Python, AI/ML, RAG Architecture, Sentence Transformers, Cosine Similarity, Vector Databases</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold flex items-center gap-2">
                    Habit Pattern Predictor - 
                    <a 
                      href="https://github.com/SaiVivekAlli09/Habit-Pattern-Predictor-Using-Python-ML" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      GitHub <ExternalLink size={12} />
                    </a>
                  </h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Formulated a comprehensive habit tracking system that monitors 5 key metrics (sleep, exercise, mood, productivity, steps) across 30-day periods, achieving 78% prediction accuracy for optimal activity timing</li>
                    <li>Synthesized predictive analytics with interactive data visualizations, generating 12 different chart types that helped identify behavioral patterns and improved goal completion rates by 25%</li>
                    <li>Generated detailed performance reports processing 500+ daily data points to provide personalized recommendations, reducing manual tracking time from 15 minutes to 3 minutes daily</li>
                    <li><strong>Skills/Tools:</strong> Python, Machine Learning, Data Visualization, Pandas, NumPy, Matplotlib, Predictive Analytics</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold flex items-center gap-2">
                    SimpleChatApp – Java Socket-Based Real-Time Chat App - 
                    <a 
                      href="https://github.com/SaiVivekAlli09/SimpleChatApp_Java" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      GitHub <ExternalLink size={12} />
                    </a>
                  </h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Assembled a multi-threaded chat application utilizing Java socket programming to support up to 10 concurrent user connections with message delivery latency under 200ms across local network testing</li>
                    <li>Implemented server-client architecture with username authentication, successfully handling 500+ messages during stress testing while maintaining connection stability and proper message ordering</li>
                    <li>Executed comprehensive error handling and connection stability features, achieving 95% uptime during 8-hour continuous testing sessions with graceful client disconnect management</li>
                    <li><strong>Skills/Tools:</strong> Java, Socket Programming, Multithreading, Network Programming, CLI Development</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold flex items-center gap-2">
                    DocumentSearchEngine_Java - 
                    <a 
                      href="https://github.com/SaiVivekAlli09/DocumentSearchEngine_Java" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      GitHub <ExternalLink size={12} />
                    </a>
                  </h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Constructed a document indexing and retrieval system using inverted index data structures, successfully indexing 200+ text files containing 50,000+ words with search response times under 100ms</li>
                    <li>Programmed custom HashMap and Set implementations for word-to-document mapping, achieving memory efficiency of 2MB for complete index storage and handling 1,000+ unique search queries during testing</li>
                    <li>Delivered intuitive console-based interface with advanced string processing capabilities, supporting complex search operations and achieving 92% accuracy in keyword matching across diverse document types</li>
                    <li><strong>Skills/Tools:</strong> Java, Data Structures, HashMap, Set, File I/O, String Processing, Algorithm Design</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">CERTIFICATIONS</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>AWS Certified Solutions Architect – Associate, Amazon Web Services</li>
                <li>CEH – Certified Ethical Hacker – EC Council</li>
              </ul>
            </div>
          </div>

          {/* Bottom Download Button */}
          <div className="text-center mt-8">
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download size={24} />
              Download Resume (PDF)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;