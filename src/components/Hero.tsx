
import { FiArrowRight, FiDownload } from 'react-icons/fi';


export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cosmic-purple/5 to-electric-blue/10 dark:from-transparent dark:via-cosmic-purple/10 dark:to-electric-blue/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-4 sm:mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                
               <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
  Ritesh Jha
</span>
               
              </h1>
          
            </div>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              Frontend Developer specializing in React, Next.js, and Tailwind CSS. 
              Passionate about creating beautiful, responsive, and user-friendly web applications.
            </p>
            
         <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
  <button
    onClick={() => scrollToSection('projects')}
    className="group inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-electric-blue text-white 
             rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 
             hover:scale-105 hover:shadow-lg hover:shadow-electric-blue/25 text-sm sm:text-base"
  >
    View Projects
    <FiArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
  </button>

  <a
    href="/Ritesh_resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-electric-blue 
               text-electric-blue rounded-lg font-semibold hover:bg-electric-blue hover:text-white 
               transition-all duration-300 hover:scale-105 text-sm sm:text-base"
  >
    Resume
    <FiDownload className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
  </a>
</div>

          </div>
          
          {/* Right Content - Avatar/Illustration */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 order-first lg:order-last">
            <div className="relative">
              {/* Floating Animation Container */}
              <div>
                {/* Main Avatar Circle */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-electric-blue/20 to-cosmic-purple/20 p-1 mx-auto">
  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-space-700 dark:to-space-600">
    <img
      src="/pic.jpg"
      alt="Avatar"
      className="w-full h-full object-cover object-top rounded-full" style={{ transform: 'scale(1.6)' }} 
    />
  </div>
</div>


              </div> 
              
              {/* Orbital Elements */}
              <div className="absolute inset-0 animate-orbit">
                <div className="w-4 h-4 bg-cosmic-purple rounded-full shadow-lg shadow-cosmic-purple/50"></div>
              </div>
              <div className="absolute inset-0 animate-orbit" style={{ animationDelay: '-10s' }}>
                <div className="w-3 h-3 bg-electric-blue rounded-full shadow-lg shadow-electric-blue/50"></div>
              </div>
              <div className="absolute inset-0 animate-orbit" style={{ animationDelay: '-5s' }}>
                <div className="w-2 h-2 bg-cosmic-magenta rounded-full shadow-lg shadow-cosmic-magenta/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}