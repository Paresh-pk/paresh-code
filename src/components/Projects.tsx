import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProjectsProps {
  isDark: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const projects = [
    {
      title: "QEECCR Protocol for UWSN",
      subtitle: "Understanding QEECCR: A Q-Learning-Based Energy-Efficient Custom Cooperative Routing Protocol for UWSN",
      description: "Research on Q-Learning-based Energy-Efficient Custom Cooperative Routing Protocol for Underwater Wireless Sensor Networks. Published in Science & Technology Journal (Vol. 13, No. 1, ISSN 2321-3388).",
      technologies: ["Python", "NS2", "AquaSim", "Q-Learning"],
      type: "Research",
      status: "Published"
    },
    {
      title: "Mathematical Modeling of QEECCR",
      subtitle: "Analytical modeling of QEECCR",
      description: "This project introduces a reinforcement learning (Q-learning) based routing protocol designed specifically for UWSNs (Underwater Wireless Sensor Networks), aiming to optimize energy consumption and enhance routing stability in complex underwater environments.",
      technologies: ["Python", "MATLAB", "Pandas"],
      type: "Research",
      status: "Completed"
    },
    {
      title: "Online Library Management System",
      subtitle: "Web-based Book Management Solution",
      description: "A comprehensive web-based system to manage and track departmental books efficiently, replacing manual records. Features book cataloging, user authentication, and automated fine calculations.",
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
      type: "Web Application",
      status: "Completed"
    },
    {
      title: "Save the Human - Android Game",
      subtitle: "2D Mobile Game Development",
      description: "A simple 2D Android game where players control a human character to dodge randomly falling bombs. Features real-time collision detection, progressive difficulty, and intuitive touch controls.",
      technologies: ["Java", "Android Studio", "Canvas API"],
      type: "Mobile Game",
      status: "Completed"
    }
  ];

  const ongoingProjects = [
    {
      title: "On-going Project",
      status: "Coming Soon",
      description: "Exciting new data science project in development. Stay tuned for updates!"
    },
    {
      title: "Ongoing Courses",
      status: "In Progress",
      description: "Continuously learning new technologies and methodologies in data science and machine learning."
    }
  ];

  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-portfolio-dark' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Projects & Research
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className={`transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              isDark ? 'bg-portfolio-card-dark border-white/10' : 'bg-gray-50 border-gray-200'
            }`}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.type === 'Research' 
                      ? 'bg-blue-500/20 text-blue-500'
                      : project.type === 'Web Application'
                      ? 'bg-green-500/20 text-green-500'
                      : 'bg-purple-500/20 text-purple-500'
                  }`}>
                    {project.type}
                  </span>
                  <span className="px-2 py-1 bg-portfolio-accent/20 text-portfolio-accent rounded text-xs font-medium">
                    {project.status}
                  </span>
                </div>
                <CardTitle className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </CardTitle>
                <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.subtitle}
                </p>
              </CardHeader>
              <CardContent>
                <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        isDark ? 'bg-white/10 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <h3 className={`text-2xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Current Work
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {ongoingProjects.map((project, index) => (
              <Card key={index} className={`p-6 ${isDark ? 'bg-portfolio-card-dark border-white/10' : 'bg-gray-50 border-gray-200'}`}>
                <CardContent className="p-0">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h4>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-600 rounded-full text-xs font-medium">
                      {project.status}
                    </span>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
