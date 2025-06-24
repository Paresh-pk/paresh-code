
import React from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isDark ? 'bg-portfolio-dark/95 backdrop-blur-sm border-b border-white/10' : 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Paresh Kumar Palai
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`transition-colors hover:text-portfolio-accent ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {item}
            </button>
          ))}
          <ThemeToggle isDark={isDark} toggle={toggleTheme} />
        </nav>

        <div className="md:hidden">
          <ThemeToggle isDark={isDark} toggle={toggleTheme} />
        </div>
      </div>
    </header>
  );
};

export default Header;
