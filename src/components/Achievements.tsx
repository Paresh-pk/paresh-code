
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, GraduationCap, Award } from 'lucide-react';

interface AchievementsProps {
  isDark: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ isDark }) => {
  const achievements = [
    {
      icon: BookOpen,
      category: "Research Publication",
      year: "2025",
      title: "Q-Learning-based Energy-Efficient Custom Cooperative Routing Protocol for Underwater Wireless Sensor Network",
      detail: "Published In: Science & Technology Journal, Vol. 13, No. 1 (ISSN 2321-3388; UGC-CARE Serial 433)",
      emoji: "📘"
    },
    {
      icon: Users,
      category: "Volunteer Work",
      year: "2024",
      title: "IEEE SILCON 2024 – Silchar Subsection",
      detail: "Supported the organization and coordination of a major IEEE technical conference.",
      emoji: "🤝"
    },
    {
      icon: GraduationCap,
      category: "Certified Program",
      year: "2025",
      title: "Emerging Tools and Technologies in Research",
      detail: "Organizer: Central University, Agartala - Completed a research-oriented academic certification program.",
      emoji: "📜"
    },
    {
      icon: Award,
      category: "Faculty Development Programme",
      year: "2025",
      title: "AICTE Faculty Development Programme",
      detail: "Participated and completed a formal FDP for academic/professional development.",
      emoji: "👨‍🏫"
    }
  ];

  return (
    <section id="achievements" className={`py-20 ${isDark ? 'bg-portfolio-card-dark' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 animate-fade-in ${isDark ? 'text-white' : 'text-gray-900'}`}>
            🏆 Achievements
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${isDark ? 'bg-white/20' : 'bg-gray-300'} hidden md:block`}></div>
            
            <div className="space-y-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="relative animate-slide-in" style={{animationDelay: `${index * 0.2}s`}}>
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-portfolio-accent rounded-full border-4 border-background hidden md:block"></div>
                    
                    <Card className={`ml-0 md:ml-20 group hover:scale-102 transition-all duration-300 ${
                      isDark ? 'bg-portfolio-dark border-white/10 hover:border-portfolio-accent/50' : 'bg-white border-gray-200 hover:border-portfolio-accent/50'
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              isDark ? 'bg-portfolio-accent/10' : 'bg-portfolio-accent/20'
                            }`}>
                              <span className="text-2xl">{achievement.emoji}</span>
                            </div>
                          </div>
                          
                          <div className="flex-grow">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className={`font-semibold ${isDark ? 'text-portfolio-accent' : 'text-portfolio-accent'}`}>
                                {achievement.category}
                              </h3>
                              <span className={`text-sm px-2 py-1 rounded-full ${
                                isDark ? 'bg-white/10 text-gray-300' : 'bg-gray-100 text-gray-600'
                              }`}>
                                {achievement.year}
                              </span>
                            </div>
                            
                            <h4 className={`text-lg font-medium mb-2 group-hover:text-portfolio-accent transition-colors ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                              {achievement.title}
                            </h4>
                            
                            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                              {achievement.detail}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
