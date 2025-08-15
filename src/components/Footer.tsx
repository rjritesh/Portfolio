import React from 'react';
import { FiHeart, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-white dark:bg-space-800 border-t border-gray-200 dark:border-space-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col items-center justify-center space-y-4">
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base text-center w-full">
            <div className="flex items-center space-x-2">
              <span>© {currentYear} | Ritesh Kumar Jha |</span>
            </div>
            <div className="flex items-center space-x-2">
              
              <span>All Rights Reserved</span>
            </div>
          </div>
          
        
       
        </div>
      </div>
    </footer>
  );
}