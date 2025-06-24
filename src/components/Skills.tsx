
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Globe, Wrench } from 'lucide-react';

interface SkillsProps {
  isDark: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'Java', 'C', 'SQL'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['MySQL', 'LaTeX', 'Git', 'Linux'],
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-portfolio-card-dark' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 animate-fade-in ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className={`group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                isDark ? 'bg-portfolio-dark border-white/10 hover:border-portfolio-accent/50' : 'bg-white border-gray-200 hover:border-portfolio-accent/50'
              }`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                <CardContent className="relative p-8">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                      isDark ? 'bg-portfolio-accent/10' : 'bg-portfolio-accent/20'
                    } group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-portfolio-accent" />
                    </div>
                    <h3 className={`text-xl font-semibold group-hover:text-portfolio-accent transition-colors ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className={`px-3 py-1 transition-all duration-300 hover:scale-110 cursor-default animate-fade-in ${
                          isDark 
                            ? 'border-white/20 text-gray-300 hover:border-portfolio-accent hover:text-portfolio-accent' 
                            : 'border-gray-300 text-gray-700 hover:border-portfolio-accent hover:text-portfolio-accent'
                        }`}
                        style={{animationDelay: `${skillIndex * 0.1}s`}}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
