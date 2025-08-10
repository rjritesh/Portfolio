import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaBootstrap,
  FaDatabase 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss 
} from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'React.js', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
  { name: 'SQL', icon: FaDatabase, color: '#336791' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-space-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 via-transparent to-cosmic-purple/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-cosmic-purple mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative flex flex-col items-center p-4 sm:p-6 rounded-xl 
                         bg-white dark:bg-space-800 shadow-lg hover:shadow-xl 
                         transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                  style={{ backgroundColor: skill.color }}
                ></div>
                
                {/* Icon Container */}
                <div 
                  className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 
                           transition-all duration-300 group-hover:rotate-12"
                  style={{ 
                    backgroundColor: `${skill.color}15`,
                    boxShadow: `0 0 0 1px ${skill.color}30`
                  }}
                >
                  <IconComponent 
                    className="w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-300"
                    style={{ color: skill.color }}
                  />
                </div>
                
                {/* Skill Name */}
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white text-center">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}