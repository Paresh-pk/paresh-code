
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface AboutProps {
  isDark: boolean;
}

const About: React.FC<AboutProps> = ({ isDark }) => {
  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-portfolio-dark' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              I am a passionate data enthusiast currently pursuing my Master's in Computer Applications (MCA) 
              at Tripura University. With a strong foundation in mathematics and programming, I'm dedicated 
              to transforming raw data into meaningful insights that drive informed decision-making.
            </p>
            
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              My journey in data science combines academic rigor with practical application, focusing on 
              machine learning, statistical analysis, and data visualization. I believe in the power of 
              data to solve real-world problems and am constantly exploring new technologies and methodologies 
              in this rapidly evolving field.
            </p>
          </div>

          <div className="space-y-6">
            <Card className={`p-6 ${isDark ? 'bg-portfolio-card-dark border-white/10' : 'bg-gray-50 border-gray-200'}`}>
              <CardContent className="p-0">
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Education
                </h3>
                <div className="space-y-4">
                  <div className={`border-l-4 border-portfolio-accent pl-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    <div className="font-semibold">Master of Computer Applications (MCA)</div>
                    <div className="text-sm opacity-75">Tripura University | 2023 - 2025</div>
                  </div>
                  <div className={`border-l-4 border-portfolio-accent pl-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    <div className="font-semibold">B.Sc. Mathematics</div>
                    <div className="text-sm opacity-75">Jambeswar Mahavidyalaya | 2017 - 2020</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`p-6 ${isDark ? 'bg-portfolio-card-dark border-white/10' : 'bg-gray-50 border-gray-200'}`}>
              <CardContent className="p-0">
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Data Analysis', 'Machine Learning', 'Statistical Modeling', 'Data Visualization', 'Problem Solving'].map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-portfolio-accent/20 text-portfolio-accent rounded-full text-sm font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
