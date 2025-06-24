
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1HrvaFK29V8V6UR0uo-DxucLpL5cklpaf/view?usp=drivesdk', '_blank');
  };

  const viewProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`min-h-screen flex items-center ${
      isDark ? 'gradient-bg' : 'light-gradient-bg'
    }`}>
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                isDark ? 'bg-portfolio-accent/10 text-portfolio-accent' : 'bg-portfolio-accent/20 text-portfolio-accent'
              }`}>
                <div className="w-2 h-2 bg-portfolio-accent rounded-full mr-2 animate-pulse"></div>
                Available for new opportunities
              </div>
              
              <h1 className={`text-4xl md:text-6xl font-bold leading-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Hi, I'm{' '}
                <span className="text-portfolio-accent">Paresh</span>
                <br />
                passionate about turning{' '}
                <span className="text-portfolio-accent">data</span> into{' '}
                <span className="text-portfolio-accent">insights</span> that matter.
              </h1>
              
              <p className={`text-xl leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Aspiring Data Analyst | Currently diving deep into Data Science to uncover patterns, predict outcomes, and drive decisions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={downloadResume}
                className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </Button>
              <Button
                onClick={viewProjects}
                variant="outline"
                className={`px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'border-white/20 text-white hover:bg-white/10' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                View My Work
              </Button>
            </div>
          </div>

          <div className="flex justify-center animate-slide-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-portfolio-accent to-blue-600 p-1">
                <div className={`w-full h-full rounded-full overflow-hidden ${
                  isDark ? 'bg-portfolio-dark' : 'bg-white'
                }`}>
                  <img
                    src="https://drive.google.com/thumbnail?id=1HwyeF5DKxqSrIensMN2njxvx8ps3LWwu"
                    alt="Paresh Kumar Palai"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-portfolio-accent/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
