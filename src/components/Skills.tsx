
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface SkillsProps {
  isDark: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C', level: 75 },
        { name: 'SQL', level: 90 },
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'PHP', level: 75 },
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'LaTeX', level: 70 },
        { name: 'Git', level: 80 },
        { name: 'Linux', level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-portfolio-card-dark' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`p-6 transition-all duration-300 hover:scale-105 ${
              isDark ? 'bg-portfolio-dark border-white/10' : 'bg-white border-gray-200'
            }`}>
              <CardContent className="p-0">
                <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className={`flex justify-between mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm">{skill.level}%</span>
                      </div>
                      <div className={`w-full bg-gray-200 rounded-full h-2 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <div
                          className="bg-portfolio-accent h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
