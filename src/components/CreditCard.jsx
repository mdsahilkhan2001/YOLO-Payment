 import React from 'react';
import download from "../assets/download.png"
import carddetail from "../assets/carddetails.png"
import card from "../assets/download (1).png"
// import yes from "../assets/Yes-Bank-logo-01.png"
import yeslogobank from "../assets/png-clipart-yes-bank-logo-bank-logos-thumbnail11.png"


export default function CreditCard({ cardData, isFrozen, showDetails }) {
  const cardBackgrounds = [download, carddetail, card];
  
  const bgIndex = parseInt(cardData.cardNumber.replace(/\s/g, '').slice(-1)) % cardBackgrounds.length;
  const selectedBg = cardBackgrounds[bgIndex];

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div
        className={`relative w-full aspect-[1.6/1] rounded-2xl overflow-hidden transition-all duration-700 ${
          isFrozen ? 'grayscale blur-sm scale-95' : ''
        }`}
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8)), url(${selectedBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10"></div>

        {/* Decorative dots */}
        <div
          className="absolute inset-0 opacity-20 z-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, white 2px, transparent 2px),
              radial-gradient(circle at 80% 70%, white 1px, transparent 1px),
              radial-gradient(circle at 40% 80%, white 1.5px, transparent 1.5px)`,
            backgroundSize: '60px 60px, 80px 80px, 100px 100px',
          }}
        ></div>

        {/* Card Content */}
        <div className="absolute inset-2 p-6 flex flex-col justify-between text-white z-20">
          {/* Top Section */}
          <div className="flex justify-between items-start">
            <div className="text-lg font-bold tracking-wider">YOLO</div>
            
            {/* YES Bank section - Logo above text */}
            <div className="text-right flex flex-col items-end">
              <div className="bg-white rounded-md p-1 flex items-center justify-center mb-1">
                <img
                  src={yeslogobank}    
                  alt="YES BANK Logo"
                  className="w-10 h-auto object-contain"
                />
              </div>
              <div className="text-xs font-medium tracking-wide">
                YES BANK
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="space-y-4">
            <div className={`text-xl font-bold transition-all duration-300 ${isFrozen ? 'blur-md' : ''}`}>
              {cardData.name}
            </div>
            <div className={`text-lg tracking-wider font-mono transition-all duration-300 ${isFrozen ? 'blur-md' : ''}`}>
              {cardData.cardNumber}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex justify-between items-end">
            <div className={`transition-all duration-300 ${isFrozen ? 'blur-md' : ''}`}>
              <div className="text-xs text-gray-200">EXPIRY</div>
              <div className="text-base font-mono">{cardData.expiry}</div>
            </div>
            
            <div className="flex items-end gap-4">
              {showDetails && (
                <div className={`text-right transition-all duration-300 ${isFrozen ? 'blur-md' : ''}`}>
                  <div className="text-xs text-gray-200">CVV</div>
                  <div className="text-base font-mono">{cardData.cvv}</div>
                </div>
              )}
              
              {/* DEBIT text moved to bottom right corner */}
              <div className="text-sm opacity-80 font-medium">DEBIT</div>
            </div>
          </div>
        </div>

        {/* Frozen Overlay */}
        {isFrozen && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-white/10 backdrop-blur-sm z-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 1px, transparent 1px),
                  radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                backgroundSize: '20px 20px, 30px 30px',
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}