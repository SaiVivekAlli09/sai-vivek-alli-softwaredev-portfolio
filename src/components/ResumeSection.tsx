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
                <a 
                  href="mailto:saivivekalli9@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  saivivekalli9@gmail.com
                </a>
                <span>|</span>
                <a 
                  href="tel:4803340225"
                  className="text-blue-600 hover:underline"
                >
                  4803340225
                </a>
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
                  href="https://github.com/SaiVivekAlli09" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  GitHub <ExternalLink size={12} />
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
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Full Stack Software Developer with around 6 years building production systems in Java Spring Boot, Python Django, and React for telecommunications and healthcare domains</li>
                <li>Microservices architect experienced in decomposing monolithic applications, implementing service mesh patterns, and managing inter-service communication at scale</li>
                <li>Cloud infrastructure specialist proficient in AWS Lambda cold start optimization, RDS connection pooling, and Kubernetes resource management for high-availability systems</li>
                <li>DevOps practitioner skilled in Jenkins pipeline automation, Docker multi-stage builds, and Terraform state management for enterprise deployments</li>
              </ul>
            </div>

            {/* Professional Experience */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">PROFESSIONAL EXPERIENCE</h3>
              
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
                  <li>Decomposed monolithic Java trade-in system into 12 Spring Boot microservices using domain-driven design, reducing deployment coupling and enabling independent team scaling across device valuation workflows</li>
                  <li>Implemented Redis-based caching layer with 5-minute TTL for device pricing data, reducing MySQL query load by 65% and eliminating database timeout issues during peak traffic spikes</li>
                  <li>Built React Redux state management for complex trade-in workflow with 8 sequential steps, implementing proper error boundaries and optimistic UI updates to handle network failures gracefully</li>
                  <li>Configured AWS Application Load Balancer with health checks and auto-scaling groups, maintaining 99.8% uptime during Black Friday traffic surge of 10x normal request volume</li>
                  <li>Integrated RabbitMQ message queues for asynchronous device inspection processing, decoupling frontend submission from backend validation and reducing user wait times from 45 seconds to 8 seconds</li>
                  <li>Established Jenkins CI/CD pipeline with Docker multi-stage builds and blue-green deployment strategy, reducing production deployment risk and enabling 15-minute rollback capability</li>
                  <li>Debugged Spring Boot memory leaks with JVisualVM, identifying unclosed BufferedInputStream causing 2GB growth in 6 hours</li>
                  <li>Configured Logback with New Relic APM, creating 8 custom dashboards for transaction tracing and P95 alerts at 500ms threshold</li>
                  <li><strong>Technical Impact:</strong> Led migration serving 2.3M monthly users, achieving 40% reduction in P99 response times and contributing to $12M annual revenue through improved conversion rates</li>
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
                  <li>Architected Django REST API with PostgreSQL for Telugu Titans team management, implementing custom authentication using JWT tokens and role-based permissions for 5 distinct user types</li>
                  <li>Optimized N+1 queries using Django select_related() and prefetch_related(), reducing database calls from 847 to 23 per page</li>
                  <li>Built React Redux with lazy loading and code splitting, decreasing bundle size from 2.4MB to 680KB and improving FCP by 3.2s</li>
                  <li>Implemented Node.js inventory tracking with SQL Server, handling 500+ concurrent updates via optimistic locking mechanisms</li>
                  <li>Configured AWS EC2 auto-scaling with CloudWatch metrics for CPU utilization above 70%, automatically provisioning instances during match day traffic spikes of 15,000 concurrent users</li>
                  <li>Established Docker containerization with multi-stage builds and Alpine Linux base images, reducing deployment artifacts from 1.2GB to 340MB and decreasing container startup time by 60%</li>
                  <li>Integrated Datadog monitoring with custom KPIs, implementing alerts for API error rates &gt;2% and connection pool exhaustion</li>
                  <li>Resolved React memory leaks in real-time score updates using useEffect cleanup functions and AbortController for fetch requests, eliminating browser crashes during extended viewing sessions</li>
                  <li><strong>Technical Impact:</strong> Delivered dual-platform system handling 50K+ concurrent users during peak events, achieving 99.5% uptime and generating $2.8M combined revenue through improved user retention</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">EDUCATION</h3>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold">Wichita State University</h4>
                  <p>Master's degree in Computer and Information Sciences</p>
                  <p className="text-sm mt-2"><strong>Relevant Coursework:</strong> Database Management System, Machine Learning, Neural Networks and Deep Learning, Data Structures and Algorithms, Advanced Software Engineering, Introduction to Software Engineering, Computer Networking, Software Analysis and Methodologies, AI for Robotics, Web Programming, Graph Algorithms Applications</p>
                </div>
                <div className="text-right">
                  <p>Wichita, KS</p>
                  <p>May 2023</p>
                </div>
              </div>
            </div>

            {/* Technical Proficiencies */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">TECHNICAL PROFICIENCIES</h3>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li><strong>Backend Development:</strong> Java, Spring Boot, Python, Django, FastAPI, Node.js, RESTful APIs, GraphQL</li>
                <li><strong>Frontend Development:</strong> React.js, Redux, JavaScript (ES6+), TypeScript, HTML5, CSS3, Angular, Vue.js, Next.js</li>
                <li><strong>Cloud & Infrastructure:</strong> AWS (Lambda, EC2, RDS, S3, DynamoDB, CloudWatch), Azure, GCP, Docker, Kubernetes, Terraform</li>
                <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, Redis, Cassandra, SQL Server, Oracle</li>
                <li><strong>DevOps & CI/CD:</strong> Jenkins, Git, Bitbucket, Docker, Kubernetes, Terraform, AWS CodePipeline, Linux/Unix</li>
                <li><strong>Testing & Quality:</strong> Jest, Cypress, Selenium, Pytest, JUnit, Integration Testing, API Testing, Unit Testing, Performance Tuning</li>
                <li><strong>Monitoring & Analytics:</strong> New Relic, Datadog, AWS CloudWatch, ELK Stack, Grafana, Power BI, Tableau</li>
                <li><strong>Message Systems:</strong> RabbitMQ, Apache Kafka, AWS SQS, Event-Driven Architecture</li>
                <li><strong>APIs & Architecture:</strong> REST APIs, RESTful APIs, Microservices, Event-Driven Architecture, SDK Development</li>
                <li><strong>AI/ML Tools & Technologies:</strong> Hugging Face, OpenCV, Computer Vision, Streamlit, Vercel, Cursor, Google Firebase Studio, Matplotlib, Generative AI, Claude</li>
                <li><strong>Development Practices:</strong> Agile/Scrum, Test-Driven Development, Code Review, SOLID Principles, Design Patterns, SDLC, Jira</li>
              </ul>
            </div>

            {/* Personal Projects */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">PERSONAL PROJECTS</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold">
                    CineRAG-AI – Intelligent Movie Recommendation System - 
                    <a 
                      href="https://github.com/SaiVivekAlli09/CineRAG-AI" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub
                    </a>
                  </h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Implemented Retrieval-Augmented Generation using sentence-transformers with FAISS vector database, achieving sub-2-second similarity search across 5,000 movie embeddings with 85% relevance accuracy</li>
                    <li>Developed Flask API with Redis caching and Celery background processing, handling concurrent user queries while maintaining responsive performance through asynchronous task execution</li>
                    <li><strong>Skills/Tools:</strong> Python, RAG Architecture, Sentence Transformers, Cosine Similarity, Vector Databases, FAISS, Redis, Celery</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold">
                    Habit Pattern Predictor - 
                    <a 
                      href="https://github.com/SaiVivekAlli09/Habit-Pattern-Predictor-Using-Python-ML" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub
                    </a>
                  </h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Built time-series prediction model using scikit-learn RandomForestRegressor with 7-day sliding window features, achieving 78% accuracy in activity timing predictions across 5 tracked metrics</li>
                    <li>Created interactive visualizations using Matplotlib and Pandas for correlation analysis, implementing pickle-based data persistence for model state recovery and version compatibility</li>
                    <li><strong>Skills/Tools:</strong> Python, Data Visualization, scikit-learn, Pandas, Matplotlib, NumPy, Pickle, Matplotlib, Predictive Analytics</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold">
                    SimpleChatApp – Java Socket-Based Real-Time Chat App - 
                    <a 
                      href="https://github.com/SaiVivekAlli09/SimpleChatApp_Java" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub
                    </a>
                  </h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Developed multi-threaded TCP server using Java ServerSocket with thread pool executor, managing 10 concurrent connections with sub-200ms message latency and proper resource cleanup</li>
                    <li>Implemented synchronized message broadcasting with thread-safe collections and custom protocol, ensuring message ordering and handling network interruptions with exponential backoff reconnection</li>
                    <li><strong>Skills/Tools:</strong> Java, Socket Programming, Multithreading, Network Programming, CLI Development, Java Concurrency API</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold">
                    DocumentSearchEngine_Java - 
                    <a 
                      href="https://github.com/SaiVivekAlli09/DocumentSearchEngine_Java" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub
                    </a>
                  </h4>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Constructed inverted index using HashMap and TreeSet data structures with TF-IDF scoring algorithm, achieving sub-100ms search response times across 200+ document corpus</li>
                    <li>Implemented advanced search capabilities including boolean operators, phrase matching, and wildcard support, maintaining 2MB memory footprint through optimized string interning</li>
                    <li><strong>Skills/Tools:</strong> Java, Data Structures, HashMap, TreeSet, File I/O, Regular Expressions, String Processing, Algorithm Design</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">CERTIFICATIONS</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>AWS Certified Solutions Architect – Associate, Amazon Web Services</li>
                <li>CEH – Certified Ethical Hacker – EC Council</li>
              </ul>
            </div>

            {/* Technical Leadership & Collaboration */}
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">TECHNICAL LEADERSHIP & COLLABORATION</h3>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li><strong>Code Review Leadership:</strong> Conducted 200+ code reviews focusing on security vulnerabilities, performance bottlenecks, and architectural consistency across microservices</li>
                <li><strong>Technical Mentoring:</strong> Guided 3 junior developers in Spring Boot best practices, database optimization techniques, and debugging methodologies</li>
                <li><strong>Cross-Team Collaboration:</strong> Facilitated API contract discussions between mobile and backend teams, establishing OpenAPI specifications and versioning strategies</li>
                <li><strong>Problem-Solving:</strong> Led incident response for production issues, implementing post-mortem analysis and preventive measures to reduce similar failures by 80%</li>
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