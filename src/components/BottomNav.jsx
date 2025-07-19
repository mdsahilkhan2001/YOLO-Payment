 import React from 'react';
import { Home, QrCode, Percent } from 'lucide-react';

export default function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0">
      {/* Curved top border */}
      <div className="relative">
        <svg 
          viewBox="0 0 375 80" 
          className="w-full h-20 absolute -top-16"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,80 Q187.5,0 375,80 L375,80 L0,80 Z" 
            fill="#1a1a1a"
          />
        </svg>
        
        {/* Navigation container */}
        <div className="bg-[#1a1a1a] px-6 py-4 pt-8">
          <div className="flex items-center justify-center gap-16">
            
            {/* Home */}
            <div className="flex flex-col items-center transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center mb-2 shadow-lg shadow-white/20 hover:shadow-white/30">
                <Home className="w-6 h-6 text-gray-500" />
              </div>
              <span className="text-gray-500 text-sm font-medium">home</span>
            </div>

            {/* YOLO Pay - Active */}
            <div className="flex flex-col items-center transform hover:scale-105 transition-all duration-300">
              <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center mb-2 bg-transparent shadow-lg shadow-white/30 hover:shadow-white/40">
                <QrCode className="w-7 h-7 text-white" />
              </div>
              <span className="text-white text-sm font-medium">yolo pay</span>
            </div>

            {/* Ginie */}
            <div className="flex flex-col items-center transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center mb-2 shadow-lg shadow-white/20 hover:shadow-white/30">
                <Percent className="w-6 h-6 text-gray-500" />
              </div>
              <span className="text-gray-500 text-sm font-medium">ginie</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}