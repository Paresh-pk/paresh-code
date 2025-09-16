
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award } from 'lucide-react';

interface CertificationsProps {
  isDark: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ isDark }) => {
  const certifications = {
    2024: [
      {
        title: "Introduction to Internet of Things",
        issuer: "NPTEL – IIT Kharagpur",
        tag: "NPTEL"
      },
      {
        title: "Distributed Systems",
        issuer: "NPTEL – IIT Kanpur", 
        tag: "NPTEL"
      },
      {
        title: "Java Programming",
        issuer: "Spoken Tutorial – IIT Bombay",
        tag: "IIT"
      },
      {
        title: "Python Programming", 
        issuer: "Spoken Tutorial – IIT Bombay",
        tag: "IIT"
      },
      {
        title: "AI for Beginners",
        issuer: "HP LIFE",
        tag: "HP"
      },
      {
        title: "Generative AI",
        issuer: "Udemy",
        tag: "Udemy"
      }
    ],
    2025: [
      {
        title: "Cloud Computing",
        issuer: "NPTEL – IIT Kharagpur",
        tag: "NPTEL"
      },
      {
        title: "Data Analytics Job Simulation",
        issuer: "Deloitte Australia – Forage Virtual Internship",
        tag: "Forage"
      },
      {
        title: "Technology Apprenticeship Job Simulation",
        issuer: "Accenture – Forage Virtual Program",
        tag: "Forage"
      },
      {
        title: "Data Analytics",
        issuer: "Google",
        tag: "Google"
      },
      {
        title: "Machine Learning",
        issuer: "Udemy",
        tag: "Udemy"
      }
    ]
  };

  return (
    <section id="certifications" className={`py-20 ${isDark ? 'bg-portfolio-dark' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 animate-fade-in ${isDark ? 'text-white' : 'text-gray-900'}`}>
            📜 Certifications
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {Object.entries(certifications).map(([year, certs]) => (
            <div key={year} className="animate-slide-in">
              <div className="flex items-center mb-8">
                <Calendar className="w-6 h-6 text-portfolio-accent mr-3" />
                <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  🗓️ Year: {year}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certs.map((cert, index) => (
                  <Card key={index} className={`group hover:scale-105 transition-all duration-300 cursor-pointer ${
                    isDark ? 'bg-portfolio-card-dark border-white/10 hover:border-portfolio-accent/50' : 'bg-white border-gray-200 hover:border-portfolio-accent/50'
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <Award className="w-5 h-5 text-portfolio-accent flex-shrink-0 mt-1" />
                        <Badge variant="outline" className={`text-xs ${
                          isDark ? 'border-portfolio-accent/30 text-portfolio-accent' : 'border-portfolio-accent text-portfolio-accent'
                        }`}>
                          #{cert.tag}
                        </Badge>
                      </div>
                      <h4 className={`font-semibold mb-2 group-hover:text-portfolio-accent transition-colors ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {cert.title}
                      </h4>
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {cert.issuer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
