import React, { useState } from 'react';
import { FiMail, FiSend, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      url: 'https://www.linkedin.com/in/jhariteshkumar/',
      color: '#0A66C2'
    },
    {
      name: 'GitHub',
      icon: FiGithub,
      url: 'https://github.com/rjritesh',
      color: '#333'
    },
    {
      name: 'Email',
      icon: FiMail,
      url: 'mailto:imrjha07@gmail.com',
      color: '#EA4335'
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-space-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-cosmic-purple/5 to-cosmic-magenta/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-cosmic-purple mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-space-800 rounded-xl shadow-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-space-600 rounded-lg 
                           bg-white dark:bg-space-700 text-gray-900 dark:text-white
                           focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 
                           transition-colors duration-300 text-sm sm:text-base"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-space-600 rounded-lg 
                           bg-white dark:bg-space-700 text-gray-900 dark:text-white
                           focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 
                           transition-colors duration-300 text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-space-600 rounded-lg 
                           bg-white dark:bg-space-700 text-gray-900 dark:text-white
                           focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 
                           transition-colors duration-300 resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-electric-blue 
                         text-white rounded-lg font-semibold hover:bg-electric-blue/90 
                         disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 
                         hover:scale-105 hover:shadow-lg hover:shadow-electric-blue/25 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8 mt-8 lg:mt-0">
            <div className="bg-white dark:bg-space-800 rounded-xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Let's Connect
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-5 h-5 sm:w-6 sm:h-6 text-electric-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Kolkata, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cosmic-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMail className="w-5 h-5 sm:w-6 sm:h-6 text-cosmic-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Email</h4>
                    <a href="mailto:riteshkumarjha@example.com" className="text-gray-600 dark:text-gray-400 hover:text-electric-blue transition-colors duration-300 text-sm break-all">
                     imrjha07@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="bg-white dark:bg-space-800 rounded-xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Follow Me
              </h3>
              
              <div className="flex justify-center sm:justify-start space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-3 sm:p-4 rounded-lg bg-gray-100 dark:bg-space-700 
                               hover:bg-gray-200 dark:hover:bg-space-600 transition-all duration-300 
                               hover:scale-110"
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400 group-hover:text-electric-blue transition-colors duration-300" />
                      
                      {/* Orbit Animation on Hover */}
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 animate-orbit">
                          <div className="w-1 h-1 bg-electric-blue rounded-full"></div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}