import React from 'react';
import { FiMapPin, FiCode } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="absolute inset-0 bg-galaxy opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-cosmic-purple mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
  <div className="relative">
    <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-electric-blue/20 to-cosmic-purple/20 p-1 mx-auto">
      <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-space-700 dark:to-space-600 
                      flex items-center justify-center overflow-hidden">
       <img
      src="/pic.jpg"
      alt="Avatar"
      className="w-full h-full object-cover object-top rounded-full" style={{ transform: 'scale(1.6)' }} 
        />
      </div>
    </div>
  </div>
</div>

          
          {/* Content */}
          <div className="order-2 lg:order-2 mt-6 lg:mt-0">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center lg:text-left">
                I'm a passionate Frontend Developer with a strong foundation in modern web technologies. 
                Currently pursuing my B.Tech in Computer Science & Engineering, I love crafting beautiful 
                and functional web experiences that make a difference.
              </p>
              
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center lg:text-left">
                Based in Kolkata, India, I specialize in React.js, Next.js, and Tailwind CSS. 
                I'm always eager to learn new technologies and take on challenging projects that 
                push the boundaries of what's possible on the web.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="flex items-center justify-center sm:justify-start space-x-3 p-3 sm:p-4 rounded-lg bg-white/50 dark:bg-space-800/50 backdrop-blur-sm">
                  <FiMapPin className="w-5 h-5 sm:w-6 sm:h-6 text-electric-blue flex-shrink-0" />
                  <div className="text-center sm:text-left">
                    <div className="font-semibold text-gray-900 dark:text-white">Location</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Kolkata, India</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center sm:justify-start space-x-3 p-3 sm:p-4 rounded-lg bg-white/50 dark:bg-space-800/50 backdrop-blur-sm">
                  <FaGraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-cosmic-purple flex-shrink-0" />
                  <div className="text-center sm:text-left">
                    <div className="font-semibold text-gray-900 dark:text-white">Education</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">B.Tech in CSE</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center sm:justify-start space-x-3 p-3 sm:p-4 rounded-lg bg-white/50 dark:bg-space-800/50 backdrop-blur-sm sm:col-span-3 lg:col-span-1">
                  <FiCode className="w-5 h-5 sm:w-6 sm:h-6 text-cosmic-magenta flex-shrink-0" />
                  <div className="text-center sm:text-left">
                    <div className="font-semibold text-gray-900 dark:text-white">Role</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Frontend Dev</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}